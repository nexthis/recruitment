<template>
  <div>
    <h1 class="text-h3 text-lg-h2 font-weight-light">{{ title }}</h1>
    <h3 class="text-h6 text-lg-h5 font-weight-light mt-2 mb-10">
      <slot />
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
