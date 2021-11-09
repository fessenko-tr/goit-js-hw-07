import { galleryItems } from "./gallery-items.js";

const galleryContainerRef = document.querySelector(".gallery");

addItemsToGallery(galleryItems, galleryContainerRef);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createPicMarkup({ preview, original, description }) {
  return `<li><a class="gallery__item" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a></li>`;
}

function addItemsToGallery(pics, gallery) {
  gallery.innerHTML = pics.map(createPicMarkup).join("");
}
