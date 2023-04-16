//For a more advanced project, I split the routes into multiple files and organize them in directoire.
import {createRouter, createWebHistory} from "vue-router"

import IndexPage from "@/pages/IndexPage.vue"
import ClientPage from "@/pages/ClientPage.vue"

const routes = [
    { path: '/', component: IndexPage },
    { path: '/client', component: ClientPage },
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})