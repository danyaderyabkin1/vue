<script setup>
import {ref} from 'vue';
import ProductItem from "@/components/ProductsList/ProductItem.vue";
import axios from "axios";
import {API_BASE_URL} from "@/config.js";
import {useRoute} from "vue-router";
const products = ref([]);

const router = useRoute()
const page = ref(1);
const perPage = ref(4);
const productsLoading = ref(true)

const nextPage = () => {
  if (+router.query.page === products.value.pagination.pages) return
  page.value++
  getProducts()
}

const paginate = (pageNum) => {
  page.value = pageNum;
  getProducts()
}
const prevPage = () => {
  if (+router.query.page === 1) return
  page.value--
  getProducts()
}

async function getProducts() {
  productsLoading.value = false
  return await (new Promise(resolve => setTimeout(resolve, 500)))
      .then(() => {
        return axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: router.query.page ? router.query.page : page.value,
            limit: perPage.value,

          }
        })
            .then(response => {
              products.value = response.data
            })
      })
      .then(() => productsLoading.value = true)
}
getProducts()

</script>

<template>
  <div v-if="productsLoading" class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Четвертая задача</h2>
      <ul class="list-unstyled d-flex flex-wrap justify-content-between">
      <product-item v-for="product of products?.items" :product="product" :key="product.id"/>
      </ul>
    <ul class="pagination">
      <li class="d-none">
        <router-link @click="prevPage" :to="{path: '/lesson4', query: {page: +router.query.page - 1}}">
          <button class="btn btn-light">&#8249;</button>
        </router-link>
      </li>
        <li v-for="page in products.pagination.pages" :key="page">
          <router-link :to="{path: '/lesson4', query: {page: page}}">
            <button @click="paginate(page)" :class="{active: page === products.pagination.page}" class="btn btn-light" >{{page}}</button>
          </router-link>
        </li>
        <li class="d-none">
          <router-link @click="nextPage" :to="{path: '/lesson4', query: {page: +router.query.page + 1}}">
            <button class="btn btn-light">&#8250;</button>
          </router-link>
        </li>
    </ul>
  </div>
  <div v-else class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Четвертая задача</h2>
      <ul class="list-unstyled d-flex flex-wrap justify-content-between">
        <li class="text-left">
          <div class="card">
            <img class="blink" src="/load-photo.png" alt="загрузка">
            <div class="card-body">
              <div class="loader__wrap-list cost w-100">
                <div class="load-anim p-3"></div>
              </div>
            </div>

            <div class="card-body list-group pl-3 list-group-flush d-flex">
              <div class="loader__wrap-list cost w-75 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>
            <div class="card-body pl-3 w-50 d-flex">
              <div class="loader__wrap-list cost w-50 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>

          </div>
        </li>
        <li class="text-left">
          <div class="card">
            <img class="blink" src="/load-photo.png" alt="загрузка">
            <div class="card-body">
              <div class="loader__wrap-list cost w-100">
                <div class="load-anim p-3"></div>
              </div>
            </div>

            <div class="card-body list-group pl-3 list-group-flush d-flex">
              <div class="loader__wrap-list cost w-75 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>
            <div class="card-body pl-3 w-50 d-flex">
              <div class="loader__wrap-list cost w-50 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>

          </div>
        </li>
        <li class="text-left">
          <div class="card">
            <img class="blink" src="/load-photo.png" alt="загрузка">
            <div class="card-body">
              <div class="loader__wrap-list cost w-100">
                <div class="load-anim p-3"></div>
              </div>
            </div>

            <div class="card-body list-group pl-3 list-group-flush d-flex">
              <div class="loader__wrap-list cost w-75 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>
            <div class="card-body pl-3 w-50 d-flex">
              <div class="loader__wrap-list cost w-50 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>

          </div>
        </li>
        <li class="text-left">
          <div class="card">
            <img class="blink" src="/load-photo.png" alt="загрузка">
            <div class="card-body">
              <div class="loader__wrap-list cost w-100">
                <div class="load-anim p-3"></div>
              </div>
            </div>

            <div class="card-body list-group pl-3 list-group-flush d-flex">
              <div class="loader__wrap-list cost w-75 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>
            <div class="card-body pl-3 w-50 d-flex">
              <div class="loader__wrap-list cost w-50 title">
                <div class="load-anim p-3"></div>
              </div>
            </div>

          </div>
        </li>
      </ul>
    <div class="loader__wrap-list cost w-25 mx-auto">
      <div class="load-anim"></div>
    </div>
  </div>
</template>

<style scoped>

.list-unstyled > li {
  width: 23%;
  margin-bottom: 20px;
}
img {
  height: 250px;
  object-fit: cover;
}
.pagination {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 5px;
}
</style>