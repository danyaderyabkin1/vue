import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {fromParse} from "@/helpers/parserDoc.js";
import {set} from "@vueuse/core";

export const useNewsList = defineStore('newsList', () => {
    const newsItems = ref(null);
    const loading = ref(false);
    const modal = ref(false);
    const modalContent = ref({});
    const error = ref(null);
    const fullLoad = ref(true);

    const getNews2 = async (url, page = 5) => {
        let headers = new Headers();

        headers.append('Accept', 'application/xml');

        try {
            const response = await fetch(url, {
                mode: 'cors',
                credentials: 'include',
                method: 'GET',
                headers: headers
            });

            console.log(response);

            if (response.ok) {
                const xml = await response.text();
                console.log(xml);
            } else {
                console.log('Authorization failed: ' + response.statusText);
            }
        } catch (error) {
            console.log('Error:', error.message);
        }
    }




        const getNews = async (url, pageAdd) => {
            fullLoad.value = true;
            error.value = null;
            loading.value = true;
            return await (new Promise(resolve => setTimeout(resolve, 700)))
                .then(() => {
                    fetch(url)
                        .then(res => res.text())
                        .catch(err => error.value = err.message)
                        .then(data => {
                            if ((fromParse(data).array.length - pageAdd) <= 0) {
                                fullLoad.value = false
                            }
                            newsItems.value = fromParse(data).array.filter(el => el.id < pageAdd);

                        })
                }).then(() => {
                    loading.value = false;
                })
        }
        const createModal = (item) => {
            modal.value = true;
            modalContent.value = item;
        }

        return {getNews, createModal, getNews2, newsItems, loading, modal, modalContent, fullLoad, error}
    }

)