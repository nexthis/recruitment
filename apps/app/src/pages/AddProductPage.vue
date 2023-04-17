<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>
    <v-text-field v-model="form.name" label="Nazwa"></v-text-field>
    <v-text-field
      v-model="form.price"
      type="number"
      label="Cena"
    ></v-text-field>
    <v-btn @click="onSend"> Dodaj </v-btn>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useCreateProduct } from "@/composition/useCreateProduct";
import { reactive } from "vue";

const form = reactive({
  name: "",
  price: null,
});

const { mutateAsync } = useCreateProduct();

const onSend = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  await mutateAsync(form);
};
</script>
