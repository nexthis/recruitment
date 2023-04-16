import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/routes"
import { VueQueryPlugin } from "@tanstack/vue-query";


// Vuetify
import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css' 
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labs from 'vuetify/labs/components'

const vuetify = createVuetify({
  components: {
    ...components,
    ...labs
  },
  directives,
  defaults: {
    VDataTable: {
      noDataText: 'Ładowanie proszę czekać',
    },
  }
});

createApp(App).use(vuetify).use(VueQueryPlugin).use(router).mount("#app");
