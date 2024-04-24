<script setup>
import CartItem from "@/components/Cart/CartItem.vue";
import {useCart} from "@/stores/index.js";
import {numberFormat} from "@/helpers/numberFormat.js";
import {computed, ref} from "vue";

const cart = useCart();

const promo = ref(true);
const promoReady = ref(false);
const promoDone = ref(false);
const promoText = ref('');

const totalPromo = computed(() => {
  const percent_10 = (cart.cartTotal / 100) * 10
  return cart.cartTotal - percent_10;
})

const deletePromo = () => {
  promo.value = true
  promoReady.value = false
  promoDone.value = false
}

const activatePromo = (e) => {
  if (promoText.value === 'SALE10') {
    promoReady.value = true
    promoDone.value = true
    promoText.value = ''
  } else {
    e.target.querySelector('input').classList.add('error')
  }
}

</script>

<template>
  <div class="container container3 d-flex flex-column mb-3 mt-3 text-center p-3 flex-fill">
    <h2 class="text-center mb-4">Корзина</h2>
    <div class="d-flex flex-fill wrap">
      <div class="cart-wrap">
        <ul class="list-unstyled" :class="{notEvent : promoDone}">
          <cart-item v-for="item in cart.cartItems" :key="item.id" :item="item">
          </cart-item>
        </ul>

      </div>
      <div class="cart-wrap checkout d-flex flex-column">
        <h5 class="mt-3">Ваша корзина</h5>

        <div class="d-flex align-items-center justify-content-between p-3 border-bottom">
          <p class="text-left text-black-50 mb-0">Товары, {{cart.cartItems.length}} шт</p>
          <p class="text-left text-black-50 mb-0">{{numberFormat(cart.cartTotal)}}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between p-3">
          <button @click.prevent="promo = false" v-if="promo" class="btn btn-link p-0">У меня есть промокод</button>
          <div v-else>
            <form v-if="!promoDone" @submit.prevent="activatePromo" class="d-flex flex-wrap">
              <div class="d-flex">
                <input v-model="promoText" class="input-group-text w-100" type="text">
                <button class="btn btn-success ml-2">Применить</button>
              </div>
              <p class="text-black-50 text-left mb-0">Подсказка: SALE10</p>
            </form>
            <div v-else-if="!cart.cartItems.length">Корзина пуста!</div>
            <div v-else class="text-left ">
              <p class="text-success mb-0">Ваш промокод успешно применён!</p>
              <button @click.prevent="deletePromo" class="btn btn-link text-danger p-0 m-0">Удалить промокод</button>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between p-3 mt-auto">
          <h4 class="m-0">Итого</h4>
          <h4 v-if="promoReady" class="m-0 position-relative">{{numberFormat(totalPromo)}}<span class="position-absolute text-black-50">{{numberFormat(cart.cartTotal)}}</span></h4>
          <h4 v-else class="m-0">{{numberFormat(cart.cartTotal)}}</h4>
        </div>
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
  max-height: 270px;
}
.error {
  outline: 3px solid red;
  border-radius: 5px;
}

.btn-link.text-danger {
  font-size: 13px;
}

.notEvent {
  pointer-events: none;
  filter: blur(1px);
  cursor: not-allowed;
}

h4 span {
  font-size: 16px;
  top: -15px;
  right: 0px;
  text-decoration: line-through;
}
</style>