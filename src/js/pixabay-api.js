const URL = 'https://pixabay.com/api/';
const KEY = '44841461-2c7fd944dee0b14672f32444a';
const imageType = "photo";
const orientation = "horizontal"
const safesearch = true;

function onFetchForImages(query) {
    return fetch(`${URL}?key=${KEY}&q=${query}&&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}

export default onFetchForImages