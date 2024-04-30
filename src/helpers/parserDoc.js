import {ref} from "vue";

export const fromParse = (document) => {
    const parser = new DOMParser();
    let array = [];

    const doc = parser.parseFromString(document, 'text/xml');
    doc.querySelectorAll('item')?.forEach((el, i) => {
        const obj = {
            id: ++i,
            title: el.querySelector('title')?.textContent,
            description: el.querySelector('description')?.textContent,
            link: el.querySelector('link')?.textContent,
            pubDate: el.querySelector('pubDate')?.textContent,
        }
        array.push(obj)
    })
    return {array}
}