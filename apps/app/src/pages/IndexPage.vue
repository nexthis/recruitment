<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>

      <div class="mt-5 mb-1">Raportuj po dacie</div>
      <VueDatePicker range locale="pl" @update:model-value="onSelect" />

      <v-btn variant="text" class="d-flex mt-7" :to="{ name: 'client' }">
        Filtruj po klientach
      </v-btn>

      <v-btn variant="text" class="d-flex mt-7" :to="{ name: 'addProduct' }">
        Dodaj produkt
      </v-btn>

      <v-btn variant="text" class="d-flex mt-7" :to="{ name: 'addClient' }">
        Dodaj klienta
      </v-btn>

      <v-btn variant="text" class="d-flex mt-7" :to="{ name: 'addOrder' }">
        Dodaj zamówienie klienta
      </v-btn>
    </template>

    <head-line title="Produkty">
      Aktualnie posiadamy {{ data?.length }} produkty
    </head-line>

    <v-data-table-server
      :loading="isLoading"
      :headers="headers"
      :items="data"
      :items-length="data?.length ?? 0"
    >
      <template #item.price="{ item }"> {{ item.raw.price }} PLN </template>

      <template #item.totalPrice="{ item }">
        {{ item.raw.totalPrice }} PLN
      </template>
    </v-data-table-server>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useProduct } from "@/composition/useProduct";
import { useRouter } from "vue-router";

const { data, isLoading } = useProduct();
const router = useRouter();

const onSelect = (date: Array<Date>) => {
  router.push({
    name: "report",
    query: {
      from: date[0].toISOString(),
      to: date[1].toISOString(),
    },
  });
};

const headers = [
  { title: "Nazwa", key: "name" },
  { title: "Cena Detaliczna", key: "price" },
  { title: "Ilość klientów", key: "client" },
  { title: "Łączna wartość", key: "totalPrice" },
];
</script>
