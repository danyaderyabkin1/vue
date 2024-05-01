<script setup>
import {useNewsList} from "@/stores/news.js";
import NewsItem from "@/components/Lesson5/newsItem.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {useLoader} from "@/stores/loaderStore.js";


const isLoading = useLoader()
const newsList = useNewsList();
const items = ref(5);
const currentUrl = ref('/rss')

onMounted(() => {
  newsList.getNews('/rss', 5);
})

onUnmounted(() => {
  newsList.newsItems = null
})

const pageAdding = (num, url) => {
  isLoading.loading()
  items.value = num;
  new Promise(resolve => setTimeout(resolve, 500))
      .then(() => newsList.getNews(url, num))
}
</script>

<template>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Пятая задача</h2>
    <div class="container mb-4">
      <button @click.prevent="currentUrl = '/rss'; items = 5; newsList.getNews('/rss', 5)" class="btn btn-info mr-3">Новости "Лента.ру"</button>
      <button @click.prevent="currentUrl = 'https://rg.ru/xml/index.xml'; items = 5; newsList.getNews('https://rg.ru/xml/index.xml', 5)" class="btn btn-info">Новости "Российская газета"</button>
    </div>
    <div v-if="!newsList.newsItems">Загрузка...</div>
    <ul v-else class="list-unstyled d-flex flex-wrap justify-content-between">
      <news-item v-for="item in newsList.newsItems" :item="item" :key="item.id"></news-item>
    </ul>
    <button @click.prevent="pageAdding(items + 4, currentUrl)" :class="{loading: isLoading.isLoading}" class="btn btn-dark">загрузить еще</button>
  </div>
</template>

<style scoped>

</style>