<script setup>
import {numberFormat} from "@/helpers/numberFormat.js";
import {useCart} from "@/stores/index.js";
import {ref} from "vue";

const cart = useCart();
const props = defineProps(['product']);
const item = ref(props.product);
const loading = ref(false)

const addItem = async (id) => {
  loading.value = true
  return await (new Promise( resolve => setTimeout(resolve, 700)))
      .then(() => {
        cart.addToCart({productId: id, amount: 1})
      })
      .then(() => {
        loading.value = false
      })

}

</script>

<template>
  <li class="text-left">
    <div class="card">
      <router-link :to="{path: `/product/${item.id}`}">
        <img class="card-img-top p-2" :src="item.image?.file.url" alt="Card image cap">
      </router-link>
      <div class="card-body">
        <h5 class="card-title mb-0">
          <router-link :title="item?.title" class="card-link text-body" :to="{path: `/product/${item.id}`}">
            {{ item?.title }}
          </router-link>
        </h5>
      </div>
      <div class="list-group list-group-flush">
        <h5 class="list-group-item mb-0">Цена: {{ numberFormat(item?.price)  }}</h5>
      </div>
      <div class="card-body d-flex">
        <button @click.prevent="addItem(item.id)" :class="{loading: loading}" class="btn btn-dark position-relative"> В корзину
          <span v-show="loading" class="loader"></span>
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>
img {
  height: 250px;
  object-fit: contain;
}


.text-body {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>