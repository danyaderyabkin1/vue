<script setup>
import {useNewsList} from "@/stores/news.js";
import NewsItem from "@/components/Lesson5/newsItem.vue";
import {onMounted, onUnmounted, ref} from "vue";
import TheModal from "@/components/Lesson5/TheModal.vue";
import {useRoute} from "vue-router";
const router = useRoute()

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
  items.value = num;
  newsList.getNews(url, num)
}
</script>

<template>
  <the-modal/>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Пятая задача</h2>
    <div class="container mb-4">
      <button  @click.prevent="newsList.newsItems = null;
               currentUrl = '/rss';
               items = 5;
               newsList.getNews('/rss', 5);"
               class="btn btn-info mr-3">
      Новости "Лента.ру"
      </button>
      <button @click.prevent="newsList.newsItems = null;
              currentUrl = 'https://rg.ru/xml/index.xml';
              items = 5;
              newsList.getNews('https://rg.ru/xml/index.xml', 5)"
              class="btn btn-info">
      Новости "Российская газета"
      </button>
    </div>
    <ul v-if="newsList.newsItems" class="list-unstyled d-flex flex-wrap justify-content-between">
      <news-item v-for="item in newsList.newsItems" :item="item" :key="item.id"></news-item>
    </ul>
    <div v-else class="container container3 mt-3 mb-3 flex-fill text-center p-0">
      <ul class="list-unstyled d-flex flex-wrap justify-content-between">
        <li class="text-left w-100 mb-3">
          <div class="card flex-row">
            <div>
              <img class="blink" width="200" src="/load-photo.png" alt="">
            </div>
            <div class="flex-fill d-flex flex-column">
              <div class="card-body p-2">
                <div class="loader__wrap-list cost w-100">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="card-body p-2 list-group list-group-flush d-flex">
                <div class="loader__wrap-list cost w-100 title">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="d-flex">
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list align-items-end cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="text-left w-100 mb-3">
          <div class="card flex-row">
            <div>
              <img class="blink" width="200" src="/load-photo.png" alt="">
            </div>
            <div class="flex-fill d-flex flex-column">
              <div class="card-body p-2">
                <div class="loader__wrap-list cost w-100">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="card-body p-2 list-group list-group-flush d-flex">
                <div class="loader__wrap-list cost w-100 title">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="d-flex">
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list align-items-end cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="text-left w-100 mb-3">
          <div class="card flex-row">
            <div>
              <img class="blink" width="200" src="/load-photo.png" alt="">
            </div>
            <div class="flex-fill d-flex flex-column">
              <div class="card-body p-2">
                <div class="loader__wrap-list cost w-100">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="card-body p-2 list-group list-group-flush d-flex">
                <div class="loader__wrap-list cost w-100 title">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="d-flex">
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list align-items-end cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="text-left w-100 mb-3">
          <div class="card flex-row">
            <div>
              <img class="blink" width="200" src="/load-photo.png" alt="">
            </div>
            <div class="flex-fill d-flex flex-column">
              <div class="card-body p-2">
                <div class="loader__wrap-list cost w-100">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="card-body p-2 list-group list-group-flush d-flex">
                <div class="loader__wrap-list cost w-100 title">
                  <div class="load-anim p-3"></div>
                </div>
              </div>
              <div class="d-flex">
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
                <div class="card-body p-2 w-25 d-flex">
                  <div class="loader__wrap-list align-items-end cost w-25 title">
                    <div class="load-anim w-25 p-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="loader__wrap-list cost w-25 mx-auto">
        <div class="load-anim"></div>
      </div>
    </div>
    <button v-if="items > newsList.newsItems?.length" v-show="newsList.newsItems" @click.prevent="pageAdding(items + 4, currentUrl)" :class="{loading: newsList.loading}" class="btn btn-dark">загрузить еще</button>
    <div v-else></div>
  </div>
</template>

<style scoped>

</style>