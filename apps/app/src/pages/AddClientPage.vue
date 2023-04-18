<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>
    <div class="mx-auto max-w-500 mt-10">
      <head-line class="text-center" title="Dodaj Klienta"></head-line>
      <v-text-field v-model="form.name" label="Nazwa"></v-text-field>
      <v-text-field v-model="form.city" label="Miasto"></v-text-field>
      <v-text-field v-model="form.postcode" label="Kod Pocztowy"></v-text-field>
      <v-text-field v-model="form.streetName" label="Ulica"></v-text-field>
      <v-text-field
        v-model="form.streetNumber"
        type="number"
        label="Nr Ulicy"
      ></v-text-field>
      <v-btn @click="onSend"> Dodaj </v-btn>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useCreateProduct } from "@/composition/useCreateClient";
import { reactive } from "vue";

const form = reactive({
  name: "",
  city: "",
  postcode: "",
  streetNumber: null,
  streetName: "",
});

const { mutateAsync } = useCreateProduct();

const onSend = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  await mutateAsync(form);
};
</script>
