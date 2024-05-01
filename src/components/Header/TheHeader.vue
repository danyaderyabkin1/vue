<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto mr-lg-auto mb-2 align-items-center justify-content-center mb-md-0">
          <li class="d-flex">
            <router-link class="nav-link d-flex px-2 text-secondary" to="/">
              <img class="flex-shrink-0" src="/src/assets/logo.svg" alt="">
            </router-link>
         </li>
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
            <router-link class="nav-link px-2" :to="{path: '/lesson4', query: {page: 1}}">
              Задача 4(каталог)
            </router-link>
          </li>
          <li>
            <router-link class="nav-link px-2" to="/lesson5">
              Задача 5
            </router-link>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 mr-lg-3 d-none">
          <input type="search" class="form-control form-control-dark" placeholder="Поиск..." aria-label="Поиск">
        </form>

        <div class="text-end mr-3">
          <button type="button" class="btn btn-outline-light mr-2">Вход</button>
          <button type="button" class="btn btn-warning">Регистрация</button>
        </div>
        <cart-indicator/>
      </div>
    </div>
  </header>
</template>

<script setup>
import CartIndicator from "@/components/Cart/CartIndicator.vue";
</script>

<style>

.nav-link img {
  width: 50px;
  color: #fff;
}
.nav-link {
  transition: .3s;
  color: #fff;
}

.nav-link:hover {
  color: #00bd7e;
}

.btn-outline-light:hover {
  border-color: transparent;
  background-color: #ffc107;
}

.btn-warning:hover {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
}

</style>