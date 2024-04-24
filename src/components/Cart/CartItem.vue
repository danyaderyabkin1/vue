<script setup>
import {numberFormat} from "@/helpers/numberFormat.js";
import {ref} from "vue";
import {useCart} from "@/stores/index.js";

const props = defineProps(['item']);
const countItem = ref(props.item.quantity);
const cart = useCart();

const deleteItem = (id) => {
  cart.deleteItem(id);
}
</script>

<template>
  <li class="d-flex align-items-center m-3 border p-3 rounded">
    <img :src="props.item.product.image.file.url" :alt="props.item.product.title">
    <div class="mr-auto title text-left ml-2">
      <h5>{{props.item.product.title}}</h5>
      <p class="text-black-50">Артикул: {{props.item.product.id}}</p>
    </div>
    <div class="d-flex flex-column align-items-center mr-4">
      <h5>{{numberFormat(props.item.product.price)}}</h5>
      <input class="input-group-text pr-0" type="number" v-model="countItem">
    </div>
    <button @click.prevent="deleteItem(props.item.product.id)" class="btn btn-outline-danger font-weight-bold mr-3">
      &#x2613;
    </button>
  </li>
</template>

<style scoped>
  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }
  input {
    width: 60px;
  }
  .title {
    width: 380px;
  }
</style>