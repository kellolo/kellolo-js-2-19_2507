export let get = url => {
    return fetch(url).then(data => data.json())
}