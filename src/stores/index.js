import {defineStore} from "pinia";
import {computed, ref} from "vue";

import {API_BASE_URL} from "@/config.js";
import axios from "axios";

export const useCount = defineStore('count', () => {
    const count = ref(0);
    const increment = () => {
        count.value++
    }
    const unIncrement = () => {
        if (count.value === 0) return
        count.value--
    }
    return {count, increment, unIncrement}
});

export const useCart = defineStore('loadCart', () => {
    const userAccessKey = ref(null);
    const cartItems = ref([]);


    const cartTotal = computed(() => {
        return cartItems.value.reduce((acc, item) => (item.price * item.quantity) + acc, 0)
    })



    const updateKey = (key) => {
        userAccessKey.value = key
        getKey()
    }

    const updateCart = (items) => {
        cartItems.value = items
    }
    const updateCartItems = (items) => {
        cartItems.value = items
    }

    async function getKey() {
        return await axios.get(`${API_BASE_URL}/api/baskets/`, {
            params: {
                userAccessKey: userAccessKey.value
            }
        })
            .then(response => {
                if (!userAccessKey.value) {
                    localStorage.setItem('userKey', response.data.user.accessKey);
                    userAccessKey.value = response.data.user.accessKey;
                    updateCart(response.data.items)
                } else {
                    updateCart(response.data.items)
                }

            })
    }

    async function deleteItem(productId){
        return await axios.delete(`${API_BASE_URL}/api/baskets/products`, {
            params: {
                userAccessKey: userAccessKey.value
            },
            data: {
                productId
            }
        })
            .then(response => {
                updateCartItems(response.data.items)
            })
    }

    async function addToCart({productId, amount}){
        return await axios.post(`${API_BASE_URL}/api/baskets/products`, {
            productId: productId,
            quantity: amount
        }, {
            params : {
                userAccessKey : userAccessKey.value
            }
        })
            .then(response => {
                updateCart(response.data.items);
            })

    }

    return {userAccessKey, cartItems, cartTotal, getKey, updateKey, addToCart, deleteItem}
})

