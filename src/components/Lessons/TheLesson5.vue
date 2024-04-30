<script setup>
import {useNewsList} from "@/stores/news.js";
import NewsItem from "@/components/Lesson5/newsItem.vue";
import {onMounted, onUnmounted, ref} from "vue";

const newsList = useNewsList();

onMounted(() => {
  newsList.getNews('/rss')
})

onUnmounted(() => {
  newsList.newsItems = null
})

</script>

<template>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Пятая задача</h2>
    <div class="container mb-4">
      <button @click.prevent="newsList.getNews('/rss')" class="btn btn-info mr-3">Новости "Лента.ру"</button>
      <button @click.prevent="newsList.getNews('https://rg.ru/xml/index.xml')" class="btn btn-info">Новости "Российская газета"</button>
    </div>
    <div v-if="!newsList.newsItems">Загрузка...</div>
    <ul v-else class="list-unstyled d-flex flex-wrap justify-content-between">
      <news-item v-for="item in newsList.newsItems" :item="item" :key="item.id"></news-item>
    </ul>
  </div>
</template>

<style scoped>

</style>