import {defineStore} from "pinia";
import {ref} from "vue";
import {fromParse} from "@/helpers/parserDoc.js";

export const useNewsList = defineStore('newsList', () => {
    const document = ref('');
    const newsItems = ref(null);

    async function getNews(url) {
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
                newsItems.value = fromParse(xml).array
            } else {
                console.log('Authorization failed: ' + response.statusText);
            }

        } catch (error) {
            console.log('Error:', error.message);
        }
    }

    return {getNews, newsItems}
})