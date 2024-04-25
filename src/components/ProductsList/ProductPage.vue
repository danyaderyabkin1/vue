<script setup>
import {useRoute} from 'vue-router'
import {ref} from "vue";
import {numberFormat} from "@/helpers/numberFormat.js";
import {API_BASE_URL} from "@/config.js";
import {useCart} from "@/stores/index.js";
import axios from "axios";

const useCartToAdd = useCart();
const product = ref({});
const countProduct = ref(1)
const route = useRoute();
const loading = ref(false)

const productLoading = ref(false);
const loadProductTimer = ref({});

async function addToCart() {
  loading.value = true
  return await (new Promise( resolve => setTimeout(resolve, 700)))
      .then(() => {
        useCartToAdd.addToCart({productId: product.value.id, amount: countProduct.value})
      })
      .then(() => {
        loading.value = false
      })

}

(async function loadProduct() {
  productLoading.value = true;
  clearTimeout(loadProductTimer.value)
  return await (new Promise(resolve => setTimeout(resolve, 500)))
      .then(() => {
        return axios.get(`${API_BASE_URL}/api/products/${route.params.id}`)
            .then(response => product.value = response.data)
            .then(() => productLoading.value = false)
      })

})();


</script>

<template>
  <div v-if="!productLoading" class="container container3 d-flex flex-column mb-3 mt-3 text-center p-3 flex-fill">
    <h2 class="text-center mb-4">Страница товара</h2>
    <div class="d-flex flex-fill wrap">
      <div class="cart-wrap d-flex align-items-center justify-content-center">
        <img :src="product.image?.file.url" alt="">
      </div>
      <div class="cart-wrap checkout">
        <h3 class="mb-5">{{product?.title}}</h3>
        <h5>Артикул:
          <span class="d-inline-block mr-2 color"> {{product?.id}}</span>
        </h5>
        <h5>{{product.colors?.length > 1 ? 'Цвета:' : 'Цвет: '}}
          <span class="d-inline-block mr-2 color" v-for="color in product.colors">{{color.title}}</span>
        </h5>
        <h5 class="mb-5">Категория:
          <span class="d-inline-block mr-2 color"> {{product.category?.title}}</span>
        </h5>
        <h4>Цена: {{numberFormat(product?.price)}}</h4>
        <div class="mt-2 d-flex">
          <button @click.prevent="countProduct === 1 ? countProduct = 1 :countProduct-- " class="btn btn-danger">-</button>
          <input type="text" readonly class="input-group-text mx-1" v-model="countProduct">
          <button @click.prevent="countProduct++" class="btn btn-success">+</button>
          <button @click.prevent="addToCart" :class="{loading: loading}" class="btn btn-dark ml-2 position-relative">В корзину
            <span v-show="loading" class="loader"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container container3 d-flex flex-column mb-3 mt-3 text-center p-3 flex-fill">
    <h2 class="text-center mb-4">Страница товара</h2>
    <div class="d-flex flex-fill wrap">
      <div class="cart-wrap d-flex align-items-center justify-content-center">
        <img class="blink" src="/load-photo.png" alt="загрузка">
      </div>
      <div class="cart-wrap checkout">
        <div class="loader__wrap-list title mb-5">
          <div class="load-anim"></div>
        </div>
        <div class="loader__wrap-list mb-5">
          <div class="load-anim"></div>
          <div class="load-anim"></div>
          <div class="load-anim"></div>
        </div>
        <div class="loader__wrap-list cost mb-2">
          <div class="load-anim"></div>
        </div>
        <div class="loader__wrap-list cost w-50">
          <div class="load-anim p-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  width: 60px;
}
.container3 .wrap {
  gap: 20px;
}
.cart-wrap {
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  text-align: left;
}
.cart-wrap img{
  border-radius: 10px;
  height: 330px;
}
.cart-wrap.checkout {
  width: 50%;
  padding: 20px;
}
.btn {
  margin-left: 0;
}

.color {
  font-weight: 100;
  font-size: 18px;
}
</style>