<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>
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

      <template #item.createdAt="{ item }">
        {{ readableDate(new Date(item.raw.createdAt)) }}
      </template>
    </v-data-table-server>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useOrders } from "@/composition/useOrders";
import { isValidDate, inScope, readableDate } from "@/utils/date";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const from = new Date(route.query.from);
const to = new Date(route.query.to);

if (!(isValidDate(from) && isValidDate(to))) {
  alert("Super UI ;-) \ndata nieprawidłowa");
  router.push({ name: "index" });
}

const { data, isLoading } = useOrders();

const result = computed(() =>
  data.value?.filter((item) => inScope(new Date(item.createdAt), from, to))
);

const sumProductsPrice = (value: Array<any>) => {
  return value.reduce((counter, value) => counter + value.price, 0);
};

const headers = [
  { title: "Klient", key: "client.name" },
  { title: "Ilość produktów", key: "products.sum" },
  { title: "Cena", key: "products.price" },
  { title: "Data", key: "createdAt" },
];
</script>
