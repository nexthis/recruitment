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
          >
            <template #item.price="{ item }">
              {{ item.raw.price }} PLN
            </template>

            <template #item.totalPrice="{ item }">
              {{ item.raw.totalPrice }} PLN
            </template>
          </v-data-table-server>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useProduct } from "@/composition/useProduct";

const { data, isLoading } = useProduct();

const headers = [
  { title: "Nazwa", key: "name" },
  { title: "Cena Detaliczna", key: "price" },
  { title: "Ilość klientów", key: "client" },
  { title: "Łączna wartość", key: "totalPrice" },
];
</script>
