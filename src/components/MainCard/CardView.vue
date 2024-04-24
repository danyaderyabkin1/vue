<script setup>
</script>

<template>
  <div class="container container3 d-flex flex-column mb-3 mt-3 text-center p-3 flex-fill">
    <h2 class="text-center mb-4">Корзина</h2>
    <div class="d-flex flex-fill wrap">
      <div class="cart-wrap">

      </div>
      <div class="cart-wrap checkout">

      </div>
    </div>
  </div>
</template>

<style scoped>
.container3 .wrap {
  gap: 20px;
}
.cart-wrap {
  width: 70%;
  background-color: #fff;
  border-radius: 10px;
}
.cart-wrap.checkout {
  width: 30%;
}
</style>