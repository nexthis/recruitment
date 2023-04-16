<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list rounded="lg">
            <v-list-item v-for="n in 5" :key="n" link>
              <v-list-item-title> List Item {{ n }} </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2" />

            <v-list-item link color="grey-lighten-4">
              <v-list-item-title> Refresh </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" class="px-4 py-5" rounded="lg">
          <v-data-table-server
            :loading="isLoading"
            :headers="headers"
            :items="data"
            :items-length="data?.length ?? 0"
            show-expand
          >
            <template #item.products.price="{ item }">
              {{ sumProductsPrice(item.raw.products) }} PLN
            </template>

            <template #item.products.sum="{ item }">
              {{ item.raw.products.length }}
            </template>

            <template v-slot:expanded-row="{ columns, item }">
              <v-list rounded="lg">
                <v-list-item v-for="item in item.raw.products" :key="item._id">
                  <v-list-item-title>
                    Produkt: {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.price }} PLN
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </template>
          </v-data-table-server>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useOrders } from "@/composition/useOrders";

const { data, isLoading } = useOrders();

const headers = [
  { title: "Klient", key: "client.name" },
  { title: "Ilość zamówień", key: "products.sum" },
  { title: "Cena", key: "products.price" },
];

const sumProductsPrice = (value: Array<any>) => {
  return value.reduce((partialSum, value) => partialSum.price + value.price, {
    price: 0,
  });
};
</script>
