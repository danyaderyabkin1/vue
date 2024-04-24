
<template>
  <footer class="p-5 bg-dark text-white">
    <div class="container d-flex">
      <router-link class="nav-link d-flex px-2 text-secondary" to="/">
        <img class="flex-shrink-0" src="/src/assets/logo.svg" alt="">
      </router-link>
      <ul class="nav col-12 col-lg-auto ml-lg-auto mb-2 align-items-center justify-content-center mb-md-0">
        <li>
          <router-link class="nav-link px-2" to="/lesson1">
            Задачи 1-2
          </router-link>
        </li>
        <li>
          <router-link class="nav-link px-2" to="/lesson3">
          Задача 3
        </router-link>
        </li>
        <li>
          <router-link class="nav-link px-2" to="/lesson4">
            Задача 4(каталог)
          </router-link>
        </li>
        <li>
          <router-link class="nav-link px-2" to="/lesson5">
            Задача 5
          </router-link>

        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.nav-link img {
  width: 50px;
  color: #fff;
}
</style>
<script setup>
</script>