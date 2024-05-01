import {defineStore} from "pinia";
import {ref} from "vue";
import {fromParse} from "@/helpers/parserDoc.js";
import {set} from "@vueuse/core";

export const useNewsList = defineStore('newsList', () => {
    const newsItems = ref(null);
    const loading = ref(false);
    const modal = ref(false);
    const modalContent = ref({});

    const getNews = async (url, pageAdd) => {
        loading.value = true;
        return await (new Promise(resolve => setTimeout(resolve, 700)))
            .then(() => {
                fetch(url)
                    .then(res => res.text())
                    .catch(err => console.log(err))
                    .then(data => {
                        newsItems.value = fromParse(data).array.filter(el => el.id < pageAdd)
                    })
            }).then(() => {
                loading.value = false;

            })
    }
    const createModal = (item) => {
        modal.value = true;
        modalContent.value = item;
    }

    return {getNews, createModal, newsItems, loading, modal, modalContent}
})