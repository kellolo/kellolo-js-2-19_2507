export function  parentGet(url) {
    return fetch(url).then(d => d.json())
}