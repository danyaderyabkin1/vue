<script setup>
import {useNewsList} from "@/stores/news.js";
import {fixDate} from "@/helpers/date.js";
const newsList = useNewsList()

defineProps({
  item: Object
})

</script>

<template>
  <li class="text-left card w-100 mb-3">
      <div class="d-flex">
        <img v-if="item.image" width="200" :src="item.image" :alt="item.title">
        <img class="no-photo border-right" v-else src="/load-photo.png" width="200" alt="no-photo">
        <div class="d-flex flex-column flex-fill">
          <h5 class="p-3 mb-0 border-bottom">
            <button @click.prevent="newsList.createModal(item)" class="btn btn-link p-0 text-left">{{ item.title }}</button>
          </h5>
          <div class="list-group list-group-flush">
            <p v-if="item.description?.length" v-html="item.description" class="border-bottom px-3 pb-2 pt-3 mb-0"></p>
            <p v-else class="pt-2 pb-2 px-3 border-bottom mb-0">Описание отсутствует</p>
          </div>
          <div class="d-flex justify-content-between p-3">
            <small>Дата: {{fixDate(item.pubDate)}}</small>
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

.no-photo {
  object-fit: contain;
}
</style>