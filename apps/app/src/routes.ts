//For a more advanced project, I split the routes into multiple files and organize them in directoire.
import {createRouter, createWebHistory} from "vue-router"

import IndexPage from "@/pages/IndexPage.vue"
import ClientPage from "@/pages/ClientPage.vue"
import ReportPage from "@/pages/ReportPage.vue"
import AddProductPage from "@/pages/AddProductPage.vue"
import AddClientPage from "@/pages/AddClientPage.vue"
import AddOrderPage from "@/pages/AddOrderPage.vue"

// for better performance use lazy import(/* webpackChunkName: "group-name" */ '@/pages/ReportPage.vue')
const routes = [
    { path: '/', component: IndexPage, name: 'index' },
    { path: '/client', component: ClientPage, name: 'client' },
    { path: '/report', component: ReportPage, name: 'report' },
    { path: '/add/product', component: AddProductPage, name: 'addProduct' },
    { path: '/add/client', component: AddClientPage, name: 'addClient' },
    { path: '/add/order', component: AddOrderPage, name: 'addOrder' },
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})