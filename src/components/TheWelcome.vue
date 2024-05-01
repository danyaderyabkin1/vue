<template>
  <div class="container">
    <ul class="list-unstyled mt-4">
      <card-item v-for="task in myTasksNames" :key="task.id" :task="task"></card-item>
    </ul>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import CardItem from "@/components/MainCard/CardItem.vue";

  const myTasksNames = ref([
    {
      id: 1,
      name: 'Первая задача',
      url: '/lesson1',
      description: 'Базовые задачи'
    },
    {
      id: 3,
      name: 'Третья задача',
      url: '/lesson3',
      description: 'Работа с Api'
    },
    {
      id: 4,
      name: 'Четвертая задача',
      url: '/lesson4',
      description: 'Работа с Api и Store'
    },
    {
      id: 5,
      name: 'Пятая задача',
      url: '/lesson5',
      description: 'Работа с Rss'
    },

  ])
</script>

<style scoped>
.list-unstyled {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap: 20px;
}

</style>