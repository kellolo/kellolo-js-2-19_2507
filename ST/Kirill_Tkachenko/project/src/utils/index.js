export const get = url => {
    return fetch(url).then(data => data.json())
}

export const decimal = numb => { return numb.toFixed(2) }