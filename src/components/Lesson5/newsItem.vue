<script setup>
import {computed, ref} from "vue";

defineProps({
  item: Object
})

</script>

<template>
  <li class="text-left card w-100 mb-3">
      <div class="d-flex">
        <img v-if="item.image" width="200" :src="item.image" :alt="item.title">
        <div v-else></div>
        <div class="d-flex flex-column flex-fill">
          <h5 class="p-3 border-bottom">
            <a :href="item.link" target="_blank">{{ item.title }}
            </a>
          </h5>
          <div class="list-group list-group-flush">
            <p v-if="item.description?.length" v-html="item.description" class="border-bottom px-3 pb-2 pt-3 mb-0"></p>
            <p v-else class="pt-2 pb-2 px-3 border-bottom mb-0">Описание отсутствует</p>
          </div>
          <div class="d-flex justify-content-between p-3">
            <small>Дата: {{`${new Date(item.pubDate).getDate()}.${new Date(item.pubDate).getMonth()+1}.${new Date(item.pubDate).getFullYear()}`}}</small>
            <small> {{item.category ? `Категория: ${item.category}` : ``}}</small>
          </div>
        </div>
      </div>
  </li>
</template>

<style scoped>
img {
  object-fit: cover;
}
</style>