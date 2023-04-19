<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>
    <v-form @submit.prevent="onSubmit" class="mx-auto max-w-500">
      <head-line class="text-center" title="Dodaj Klienta"></head-line>
      <v-text-field
        :rules="[notEmpty]"
        v-model="form.name"
        label="Nazwa"
        class="mt-4"
      ></v-text-field>
      <v-text-field
        :rules="[notEmpty]"
        v-model="form.city"
        label="Miasto"
        class="mt-4"
      ></v-text-field>
      <v-text-field
        :rules="[notEmpty]"
        v-model="form.postcode"
        label="Kod Pocztowy"
        class="mt-4"
      ></v-text-field>
      <v-text-field
        :rules="[notEmpty]"
        v-model="form.streetName"
        label="Ulica"
        class="mt-4"
      ></v-text-field>
      <v-text-field
        v-model="form.streetNumber"
        :rules="[notEmpty]"
        type="number"
        class="mt-4"
        label="Nr Ulicy"
      ></v-text-field>
      <v-btn type="submit" class="mt-4"> Dodaj </v-btn>
    </v-form>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useCreateProduct } from "@/composition/useCreateClient";
import { notEmpty } from "@/utils/rules";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import type { SubmitEventPromise } from "vuetify";

const router = useRouter();

const form = reactive({
  name: "",
  city: "",
  postcode: "",
  streetNumber: null,
  streetName: "",
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
