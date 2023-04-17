<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import type { ChartData } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: ChartData<"doughnut", number[], unknown>;
}

defineProps<Props>();

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
