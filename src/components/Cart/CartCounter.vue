<script setup>
import {ref} from "vue";

const countProduct = ref(1)

</script>

<template>
  <button @click.prevent="countProduct === 1 ? countProduct = 1 :countProduct-- " class="btn btn-danger">-</button>
  <input type="text" readonly class="input-group-text mx-1" v-model="countProduct">
  <button @click.prevent="countProduct++" class="btn btn-success">+</button>
</template>

<style scoped>
input {
  width: 60px;
}
</style>