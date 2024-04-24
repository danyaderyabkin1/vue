<script setup>
import {ref} from "vue";
import axios from "axios";

const url = 'http://ip-api.com/json/';
const ip = ref('');
const activeIp = ref('');

const params = '?fields=country,regionName,city,currency,query';
const currentIp = ref({});

const fetchData = async () => {
  return await axios.get(`${url}${ip.value}${params}`)
      .then(response => currentIp.value = response.data)
}

(async function getIp() {
  return await axios.get(`http://ipapi.co/json/`)
      .then(response => activeIp.value = response.data.ip)
})();

</script>

<template>
  <div class="container container3 mt-3 mb-3 flex-fill text-center p-3">
    <h2 class="text-center mb-4">Третья задача</h2>
    <h4>
      Ваш ip - {{activeIp}}
    </h4>
    <h6>
      Введите нужный IP для поиска и получите информацию о нём
    </h6>
    <h6>
      На данный момент работает только в локале, поскольку идет запрос с https на http, ошибка безопасности
    </h6>
    <p>для тестов примеры:</p>
    <p>83.220.236.0</p>
    <p>24.48.0.1</p>
    <p>95.142.196.32</p>
    <form  class="mb-4 mt-4 justify-content-center d-flex align-items-center" @submit.prevent="fetchData">
      <input type="text" v-model="ip">
      <button class="btn btn-dark ml-3">Получить информацию</button>
    </form>
    <div v-for="(item, i) in currentIp" :key="item">
      <h5>{{i}} - {{item}} </h5>
    </div>
  </div>
</template>

<style scoped>

input {
  border-radius: 7px;
  padding: 10px;
  outline: none;
  border: 1px solid #ddd;
}

</style>
