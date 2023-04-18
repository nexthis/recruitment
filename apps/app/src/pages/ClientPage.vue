<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>

    <head-line title="Klienci "> Lista naszych aktualnych klientów </head-line>

    <v-expansion-panels>
      <v-expansion-panel v-for="(client, name) in clients" :key="name">
        <v-expansion-panel-title>
          {{ name }} - ilość zamówień {{ client.length }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Produkty</th>
                <th class="text-left">Kwota</th>
                <th class="text-left">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in client" :key="item.createdAt">
                <td>{{ item.products.map((item) => item.name).join(", ") }}</td>
                <td>{{ sumProductsPrice(item.products) }} PLN</td>
                <td>{{ readableDate(new Date(item.createdAt)) }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useOrders } from "@/composition/useOrders";
import { readableDate } from "@/utils/date";
import { computed } from "vue";
import _ from "lodash";

const { data, isLoading } = useOrders();

const headers = [
  { title: "Klient", key: "client.name" },
  { title: "Ilość produktów", key: "products.sum" },
  { title: "Cena", key: "products.price" },
];

const clients = computed(() => _.groupBy(data.value, "client.name"));

const sumProductsPrice = (value: Array<any>) => {
  return value.reduce((counter, value) => counter + value.price, 0);
};
</script>
