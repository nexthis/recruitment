<template>
  <v-container>
    <v-row>
      <v-col lg="3" xl="2">
        <v-sheet rounded="lg" class="px-4 py-5">
          <slot name="option" />
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" class="px-4 py-5" rounded="lg">
          <slot />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
