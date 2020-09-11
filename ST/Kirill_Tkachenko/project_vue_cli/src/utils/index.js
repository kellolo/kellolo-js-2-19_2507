export const get = url => {
    return fetch(url).then(data => data.json())
}

export const post = (url, item) => {
    return fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(item)
    }).then(response => response.json());
}

export const put = url => {
    return fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json());
}

export const del = url => {
    return fetch(url, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    }).then(response => response.json());
}