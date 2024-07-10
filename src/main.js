import fetchImages from "./js/pixabay-api"
import renderMarkup from "./js/render-functions"

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.js-form'),
  loader: document.querySelector('.loader')
};
const { gallery, form, loader } = elements;
form.addEventListener('submit', handlerSubmitForm);
gallery.addEventListener('click', handlerClickBtn)

function handlerClickBtn(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== "IMG") {
    return
  }
  new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: 'bottom', captionsData: "alt" });
}

function handlerSubmitForm(evt) {
  evt.preventDefault();
  const userTarget = evt.currentTarget;
  loader.classList.remove('visually-hidden')
  if (!userTarget.elements.query.value.trim() === '') {
    return iziToast.warning({
      title: 'Warning',
      message: "Sorry, there are not no images matching your search query",
    })
  }
  else if (gallery.children.length) {
    gallery.innerHTML = ""
  }
  fetchImages(userTarget.elements.query.value)
    .then((date) => {
      createMarkup(date);
    })
    .catch(console.log)
    .finally(() => {
      loader.classList.add('visually-hidden')
      form.reset()
    })
}

function createMarkup(elements) {
  const imagesItem = renderMarkup(elements.hits);
  gallery.insertAdjacentHTML('beforeend', imagesItem)
}