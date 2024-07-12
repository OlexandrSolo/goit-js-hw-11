import fetchImages from "./js/pixabay-api"
import renderMarkup from "./js/render-functions"
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const emptyInput = 'Sorry, please enter text';
const emptySearchQuery = 'Sorry, there are not no images matching your search query';
const errorFetch = 'Oops'

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
  if (userTarget.elements.query.value.trim() === '') {
    return createAlertMessages("Warning", emptyInput)
  }
  else if (gallery.children.length) {
    gallery.innerHTML = ""
  }
  loader.classList.remove('visually-hidden')
  fetchImages(userTarget.elements.query.value)
    .then((date) => {
      createMarkup(date);
    })
    .catch(error => createAlertMessages('Error', errorFetch, error)
    )
    .finally(() => {
      loader.classList.add('visually-hidden')
      form.reset()
    })
}

function createMarkup(elements) {
  if (elements.hits.length === 0) {
    return createAlertMessages('Warning', emptySearchQuery)
  }
  const imagesItem = renderMarkup(elements.hits);
  gallery.insertAdjacentHTML('beforeend', imagesItem)
}

function createAlertMessages(typeMessage, alertMessage, typeError = null) {
  return iziToast.warning({
    title: `${typeMessage}`,
    message: typeError ? `${alertMessage} ${typeError} ` : `${alertMessage}`,
  })
}