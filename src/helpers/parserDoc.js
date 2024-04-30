export const fromParse = (document) => {
    const parser = new DOMParser();
    let array = [];

    const doc = parser.parseFromString(document, 'text/xml');
    doc.querySelectorAll('item')?.forEach((el, i) => {
        const obj = {
            id: ++i,
            title: el.querySelector('title')?.textContent,
            description: el.querySelector('description')?.textContent.trim(),
            link: el.querySelector('link')?.textContent,
            pubDate: el.querySelector('pubDate')?.textContent,
            image: el.querySelector('enclosure') ? el.querySelector('enclosure')?.getAttribute('url') : '/load-photo.png',
        }
        array.push(obj)
    })
    return {array}
}