import {defineStore} from "pinia";
import {ref} from "vue";

export const useLoader = defineStore('loader', () => {
    const isLoading = ref(false);

    const loading = () => {
        isLoading.value = true
        setTimeout(() => {
            isLoading.value = false
        }, 500)

    }

    return {loading, isLoading}
})