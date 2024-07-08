// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const URL = 'https://pixabay.com/api/';
const KEY = '44841461-2c7fd944dee0b14672f32444a';

const form = document.querySelector('.js-form');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.currentTarget.elements.query.value);
  onFetchForImages(evt.currentTarget.elements.query.value);
});

function onFetchForImages(query) {
  fetch(`${URL}?key=${KEY}&q=${query}&image_type=photo&pretty=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(console.log);
}
