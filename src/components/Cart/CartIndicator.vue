<script setup>
import {useCart} from "@/stores/index.js";
const cartCount = useCart()
</script>

<template>
  <router-link class="cart-icon position-relative" to="/cart">
    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M2.9187 4.49316L3.25684 4.60587C4.94176 5.16752 5.78422 5.44833 6.26608 6.1169C6.74795 6.78544 6.74796 7.67347 6.74796 9.44955V12.7899C6.74796 16.4001 6.74796 18.2052 7.86952 19.3268C8.99108 20.4484 10.7962 20.4484 14.4065 20.4484H16.9593M24.6178 20.4484H22.065"
          stroke="white" stroke-width="1.91463" stroke-linecap="round"/>
      <path
          d="M9.93904 23.6394C10.9965 23.6394 11.8537 24.4966 11.8537 25.554C11.8537 26.6114 10.9965 27.4687 9.93904 27.4687C8.88162 27.4687 8.02441 26.6114 8.02441 25.554C8.02441 24.4966 8.88162 23.6394 9.93904 23.6394Z"
          stroke="white" stroke-width="1.91463"/>
      <path
          d="M21.4268 23.6394C22.4842 23.6394 23.3415 24.4965 23.3415 25.554C23.3415 26.6114 22.4842 27.4687 21.4268 27.4687C20.3694 27.4687 19.5122 26.6114 19.5122 25.554C19.5122 24.4965 20.3694 23.6394 21.4268 23.6394Z"
          stroke="white" stroke-width="1.91463"/>
      <path
          d="M6.74805 8.32227H10.5773M7.38626 17.2572H20.8165C22.0411 17.2572 22.6534 17.2572 23.1329 16.941C23.6125 16.6247 23.8537 16.062 24.3361 14.9364L24.8831 13.66C25.9164 11.249 26.4331 10.0436 25.8656 9.1829C25.298 8.32227 23.9866 8.32227 21.3635 8.32227H15.683"
          stroke="white" stroke-width="1.91463" stroke-linecap="round"/>
    </svg>
    <span :class="{'d-none': !cartCount.cartItems.length}" >{{cartCount.cartItems.length ? cartCount.cartItems.length : ''}}</span>
  </router-link>

</template>

<style scoped>
.cart-icon span {
  position: absolute;
  top: -10px;
  right: -15px;
  background-color: #479080;
  border-radius: 50%;
  padding: 4px 7px;
  color: #fff;
  line-height: 1;
  font-size: 12px;
}
</style>