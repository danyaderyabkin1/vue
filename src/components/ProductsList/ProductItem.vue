<script setup>
import {numberFormat} from "@/helpers/numberFormat.js";

const props = defineProps(['product']);
const item = props.product;
</script>

<template>
  <li class="text-left">
    <div class="card">
      <router-link :to="{path: `/product/${item.id}`}">
        <img class="card-img-top p-2" :src="item.image?.file.url" alt="Card image cap">
      </router-link>
      <div class="card-body">
        <h5 class="card-title">
          <router-link class="card-link text-body" :to="{path: `/product/${item.id}`}">
            {{ item?.title }}
          </router-link>
        </h5>
      </div>
      <div class="list-group list-group-flush">
        <h5 class="list-group-item">Цена: {{ numberFormat(item?.price) }}</h5>
      </div>
      <div class="card-body">
        <router-link class="card-link" :to="{path: `/product/${item.id}`}">
          Посмотреть
        </router-link>
        <router-link class="card-link" to="/">
          В корзину
        </router-link>
      </div>
    </div>
  </li>
</template>

<style scoped>
img {
  height: 250px;
  object-fit: contain;
}

.list-unstyled > li {
  width: 23%;
  margin-bottom: 20px;
}
</style>