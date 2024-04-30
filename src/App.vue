<script setup>
import TheHeader from "@/components/Header/TheHeader.vue";
import TheFooter from "@/components/Footer/TheFooter.vue";
import TheBreadcrumbs from "@/components/Header/TheBreadcrumbs.vue";
import {useCart} from "@/stores/index.js";

const loadCart = useCart()
const userAccessKey = localStorage.getItem('userKey');

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

