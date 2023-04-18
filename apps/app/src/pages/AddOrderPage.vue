<template>
  <base-layout>
    <template #option>
      <div class="text-h6 text-center">Opcje</div>
      <v-btn :to="{ name: 'index' }" variant="text" class="d-flex mt-5">
        Wstecz
      </v-btn>
    </template>
    <div class="mx-auto max-w-500 mt-10">
      <head-line class="text-center" title="Dodaj zamówienie"></head-line>
      <v-combobox
        v-model="form.client"
        label="Klient"
        :return-object="false"
        :items="client"
      ></v-combobox>
      <v-combobox
        label="Produkty"
        multiple
        v-model="form.products"
        :return-object="false"
        :items="products"
      ></v-combobox>
      <v-btn @click="onSend"> Dodaj </v-btn>
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HeadLine from "@/components/HeadLine.vue";
import { useCreateOrder } from "@/composition/useCreateOrder";
import { reactive } from "vue";
import { useProduct } from "@/composition/useProduct";
import { useClient } from "@/composition/useClient";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { data: productsData } = useProduct();
const { data: clientData } = useClient();

const { mutateAsync } = useCreateOrder();

const products = computed(() =>
  productsData.value?.map((item) => ({ title: item.name, value: item._id }))
);

const client = computed(() =>
  clientData.value?.map((item) => ({ title: item.name, value: item._id }))
);

const form = reactive({
  client: "",
  products: [],
});

const onSend = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  await mutateAsync(form);

  router.push({ name: "index" });
};
</script>
