import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createItemsGalleryMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);
imagesContainer.addEventListener('click', onImageContainerClick)

function createItemsGalleryMarkup (galleryItems) {
   return galleryItems
   .map(({preview, large, description}) => {
	return `
	<div class="gallery__item">
	    <a class="gallery__link" href="${original}">
		    <img
		    class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
			/>
		</a>
	</div>
		`;
	}).join('');   
};

function onImageContainerClick (evt) {
    evt.preventDefault();
	const isImageEl = evt.target.classList.contains('gallery__image');
    if (!isImageEl) {
       return;
    }
    
     const instance = basicLightbox.create(
     `<img src="${event.target.dataset.source}" width="800" height="600">`,

     { onShow: () => document.addEventListener('keydown', onEscKeyPress),
       onClose: () => document.removeEventListener('keydown', onEscKeyPress),
     }
);
    instance.show()

function onEscKeyPress(event) {   
    if (event.code === "Escape") {
        instance.close();
	}
  }
};


























