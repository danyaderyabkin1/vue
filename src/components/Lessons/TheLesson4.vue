<script setup>
import {computed, ref} from 'vue';
import ProductItem from "@/components/ProductsList/ProductItem.vue";
import axios from "axios";
import {API_BASE_URL} from "@/config.js";
const products = ref([]);

const page = 1;
const perPage = 4;



async function getProducts() {
  return await (new Promise(resolve => setTimeout(resolve, 200)))
      .then(() => {
        return axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: page,
            limit: perPage,

          }
        })
            .then(response => {
              console.log(response.data)
              products.value = response.data
            })
      })
}
getProducts()

</script>

<template>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Четвертая задача</h2>
      <ul class="list-unstyled d-flex flex-wrap justify-content-between">
      <product-item v-for="product of products.items" :product="product"/>
      </ul>
    <ul class="list-unstyled pagination">
      <li style="display: none">
        <button class="btn btn-light">&#8249;</button>
      </li>
        <li  v-for="page in products.pagination.pages">
          <button @click.prevent="getProducts" >{{page}}</button>
        </li>

        <li style="display: none">
          <button @click.prevent="page++" class="btn btn-light">&#8250;</button>
        </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 5px;
}
</style>