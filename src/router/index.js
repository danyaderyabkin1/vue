import {createRouter, createWebHistory} from "vue-router";

import TheWelcome from "@/components/TheWelcome.vue";
import TheLesson1 from "@/components/Lessons/TheLesson1.vue";
import TheLesson3 from "@/components/Lessons/TheLesson3.vue";
import TheLesson4 from "@/components/Lessons/TheLesson4.vue";
import TheLesson5 from "@/components/Lessons/TheLesson5.vue";
import CartPage from "@/components/Cart/CartPage.vue";
import ProductPage from "@/components/ProductsList/ProductPage.vue";


export const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: TheWelcome
        },
        {
            path: '/lesson1',
            component: TheLesson1
        },
        {
            path: '/lesson3',
            component: TheLesson3
        },
        {
            path: '/lesson4',
            component: TheLesson4
        },
        {
            path: '/lesson5',
            component: TheLesson5
        },
        {
            path: '/cart',
            component: CartPage
        },
        {
            path: '/product/:id',
            component: ProductPage
        },
    ]
});

