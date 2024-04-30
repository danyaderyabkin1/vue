<script setup>
import {useNewsList} from "@/stores/news.js";
import NewsItem from "@/components/Lesson5/newsItem.vue";

const newsList = useNewsList();

</script>

<template>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Пятая задача</h2>
    <div v-if="!newsList.newsItems.length"></div>
    <ul v-else class="list-unstyled d-flex flex-wrap justify-content-between">
      <news-item v-for="item in newsList.newsItems" :item="item"></news-item>
    </ul>
  </div>
</template>

<style scoped>

</style>