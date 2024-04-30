<script setup>
defineProps({
  item: Object
})
</script>

<template>
  <li class="text-left">
    <div class="card">
      <img width="200" src="/load-photo.png" alt="">
      <div class="card-body">
        <h5 class="card-title mb-0">
          {{item.title}}
        </h5>
      </div>
      <div class="list-group list-group-flush">
        <p v-html="item.description" class="list-group-item mb-0"></p>
      </div>
      <div class="card-body d-flex">
        <a :href="item.link" target="_blank" class="btn btn-success position-relative">Смотреть
          <span class="loader"></span>
        </a>
      </div>
    </div>
  </li>
</template>

<style scoped>
li {
  width: 25%;
}
</style>