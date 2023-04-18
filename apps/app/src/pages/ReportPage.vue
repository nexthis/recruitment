<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>

    <head-line title="Raport ">
      Raport z przedziału od {{ readableDate(from) }} do {{ readableDate(to) }}
    </head-line>

    <v-container class="mb-6">
      <v-row>
        <v-col class="d-flex flex-column justify-between gaps">
          <v-sheet
            class="px-3 py-8 rounded bg-deep-purple-lighten-3 text-white"
          >
            <div class="text-h4 text-lg-h3 text-center mb-2">Produkty</div>
            <div v-if="result" class="text-h5 text-lg-h4 text-center">
              {{ allProductsCount(result) }} produkty
            </div>
          </v-sheet>

          <v-sheet
            class="px-3 py-8 rounded bg-deep-purple-lighten-3 text-white"
          >
            <div class="text-h4 text-lg-h3 text-center mb-2">Łącznie</div>
            <div v-if="result" class="text-h5 text-lg-h4 text-center">
              {{ allProductsPrice(result) }} PLN
            </div>
          </v-sheet>
        </v-col>
        <v-col xl="7">
          <v-sheet
            class="px-3 py-6 rounded bg-deep-purple-lighten-3 text-white"
          >
            <doughnut-chart v-if="result" :data="chartData(result)" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-data-table-server
      :loading="isLoading"
      :headers="headers"
      :items="result"
      :items-length="result?.length ?? 0"
    >
      <template #item.products.price="{ item }">
        {{ sumProductsPrice(item.raw.products) }} PLN
      </template>

      <template #item.products.sum="{ item }">
        {{ item.raw.products.length }}
      </template>

      <template #item.products.name="{ item }">
        {{
          item.raw.products
            .map((item) => `${item.name} (${item.price} PLN)`)
            .join(", ")
        }}
      </template>

      <template #item.createdAt="{ item }">
        {{ readableDate(new Date(item.raw.createdAt)) }}
      </template>
    </v-data-table-server>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useOrders } from "@/composition/useOrders";
import { isValidDate, inScope, readableDate } from "@/utils/date";
import { randomColor } from "@/utils/color";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import _ from "lodash";

const route = useRoute();
const router = useRouter();

const from = new Date(route.query.from);
const to = new Date(route.query.to);

if (!(isValidDate(from) && isValidDate(to))) {
  alert("Super UI ;-) \ndata nieprawidłowa");
  router.push({ name: "index" });
}

const { data, isLoading } = useOrders();

//Sorting and Filtering

const result = computed(() =>
  data.value?.filter((item) => inScope(new Date(item.createdAt), from, to))
);

const sumProductsPrice = (value: Array<any>) => {
  return value.reduce((counter, value) => counter + value.price, 0);
};

const allProductsPrice = (value: Array<any>) => {
  return value.reduce(
    (counter, value) => counter + sumProductsPrice(value.products),
    0
  );
};

const allProductsCount = (value: Array<any>) => {
  return value.reduce((counter, value) => counter + value.products.length, 0);
};

const chartData = (value: Array<any>) => {
  const results = _.groupBy(
    _.flatten(value.map((item) => item.products)),
    "_id"
  );

  const labels = _.map(results, (item) => item[0].name);
  const data = _.map(results, (item) => item.length);
  const backgroundColor = _.map(results, () => `#${randomColor()}`);

  return {
    labels,
    datasets: [
      {
        backgroundColor,
        data,
      },
    ],
  };
};

const headers = [
  { title: "Klient", key: "client.name" },
  { title: "Produkty", key: "products.name" },
  { title: "Ilość produktów", key: "products.sum" },
  { title: "Cena", key: "products.price" },
  { title: "Data", key: "createdAt" },
];
</script>

<style scoped>
.justify-between {
  justify-content: space-between;
}

.gaps {
  gap: 15px;
}
</style>
