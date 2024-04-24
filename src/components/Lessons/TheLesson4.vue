<script setup>
import {ref} from 'vue';
import ProductItem from "@/components/ProductsList/ProductItem.vue";
const products = ref([]);


fetch('https://vue-study.skillbox.cc/api/products')
    .then(response => response.json())
    .then(data => products.value = data.items)

</script>

<template>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Четвертая задача</h2>
      <ul class="list-unstyled d-flex flex-wrap justify-content-between">
      <product-item v-for="product in products" :product="product"/>
      </ul>
  </div>
</template>

<style scoped>
</style>