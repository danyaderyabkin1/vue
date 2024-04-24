<template>
  <li>
    <div class="card">
      <img class="card-img-top p-5" src="/src/assets/logo.svg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{props.task.name}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{props.task.description}}</li>
      </ul>
      <div class="card-body">
        <router-link class="card-link" :to="props.task.url">
          Посмотреть
        </router-link>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps(['task'])
</script>

<style scoped>

</style>