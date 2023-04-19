<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>

    <v-form @submit.prevent="onSubmit" class="mx-auto max-w-500 mt-10">
      <head-line class="text-center" title="Dodaj Produkt"></head-line>

      <v-text-field
        v-model="form.name"
        :rules="[notEmpty]"
        label="Nazwa"
      ></v-text-field>
      <v-text-field
        class="mt-4"
        v-model="form.price"
        type="number"
        :rules="[notEmpty]"
        label="Cena"
      ></v-text-field>
      <v-btn type="submit" class="mt-4"> Dodaj </v-btn>
    </v-form>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useCreateProduct } from "@/composition/useCreateProduct";
import { notEmpty } from "@/utils/rules";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import type { SubmitEventPromise } from "vuetify";

const router = useRouter();

const form = reactive({
  name: "",
  price: null,
});

const { mutateAsync } = useCreateProduct();

const onSubmit = async (e: SubmitEventPromise) => {
  const valid = await e;
  if (!valid.valid) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  await mutateAsync(form);

  router.push({ name: "index" });
};
</script>
