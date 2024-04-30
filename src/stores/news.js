import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {RSS_NEWS} from "@/config.js";
import {fromParse} from "@/helpers/parserDoc.js";

export const useNewsList = defineStore('newsList', () => {
    const document = ref('');
    const newsItems = ref([]);
    const newsItems2 = ref([]);
    const url = '/rss';

    const getNews = async() => {
        try {
            return await axios.get(`${RSS_NEWS}`)
                .then(res => document.value = res.data)
        } catch(err) {
            console.log('error:' + err)
        } finally {
            newsItems.value = fromParse(document.value);
        }
    }

    getNews()

    async function getNews2() {
        const headers = new Headers();
        headers.append('Accept', 'application/xml');

        try {
            const response = await fetch(url, {
                mode: 'cors',
                credentials: 'include',
                method: 'GET',
                headers: headers
            });

            if (response.ok) {
                const xml = await response.text();
                console.log(xmlcd)
                newsItems2.value = fromParse(xml)
            } else {
                console.log('Authorization failed: ' + response.statusText);
            }
        } catch (error) {
            console.log('Error:', error.message);
        }
    }
    getNews2()

    return {getNews, document, newsItems, newsItems2}
})