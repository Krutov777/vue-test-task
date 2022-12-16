import {createRouter, createWebHistory} from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import ProductsListView from "@/views/ProductsListView.vue";
import CartView from "@/views/CartView.vue";


const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/about',
        component: AboutView,
    },
    {
        path: '/product/:id',
        component: ProductView,
        props: true
    },
    {
        path: '/products/:id',
        component: ProductsListView
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoriesView
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartView,
        props: true
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export  default router;