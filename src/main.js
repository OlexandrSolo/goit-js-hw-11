// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const URL = 'https://pixabay.com/api/';
const KEY = '44841461-2c7fd944dee0b14672f32444a';

const elements = {
  gallery: document.querySelector('.js-gallery'),
  form: document.querySelector('.js-form'),
};
const { gallery, form } = elements;

form.addEventListener('submit', evt => {
  evt.preventDefault();
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
    .then(renderMarkup);
}

function renderMarkup({ hits }) {
  console.log(hits);
  const markup = hits.map(image => {
    `li>
    <img src="${image.previewURL}" alt="${image.tags}">
    <div>
      <ul>
        <li>
          <p>VIEWS<span>${image.views}</span></p>
          <p>DOWNLOADS<span>${image.downloads}</span></p>
          <p>LIKES<span>${image.likes}</span></p>
          <p>COMMENTS<span>${image.comments}</span></p>
        </li>
      </ul>
      </img>
  </li>
  </div>`;
  }).join(' ');
  console.log(markup);

  return gallery.insertAdjacentHTML('afterend', markup)
}
