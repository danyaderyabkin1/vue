<script setup>
import TheHeader from "@/components/Header/TheHeader.vue";
import TheFooter from "@/components/Footer/TheFooter.vue";
import TheBreadcrumbs from "@/components/Header/TheBreadcrumbs.vue";
import {useCart} from "@/stores/index.js";
import {onMounted, ref} from "vue";
import axios from "axios";
const url = 'https://lenta.ru/rss';

const de = ref('')

const loadCart = useCart()
const userAccessKey = localStorage.getItem('userKey');

async function getNews() {
  return await axios.get(`${url}`, {
    headers: {
    },
    'X-Host-Override': 'lenta.ru'

  }).then(res => {
    console.log(res)
  })
}

onMounted(() => {
    getNews()
})

userAccessKey ? loadCart.updateKey(userAccessKey) : loadCart.getKey()

</script>

<template>
  <the-header />
  <the-breadcrumbs />
  <main>
    <router-view></router-view>
  </main>
  <the-footer />

</template>

