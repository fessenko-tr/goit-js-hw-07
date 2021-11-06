import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const links = document.querySelector(".gallery");
const createGalleryMarkup = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item"> 
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>
            </div>`;

const addItemsToGallery = (pics, gallery) => {
  gallery.innerHTML = pics.map(createGalleryMarkup).join("");
};

addItemsToGallery(galleryItems, galleryContainerRef);
console.log(galleryItems);

links.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
  const originalPic = e.target;

  const instance = basicLightbox.create(
    `<img src='${originalPic.dataset.source} alt='${originalPic.alt}'>`
  );
  instance.show();

  window.addEventListener("keydown", (e) => {
    if ((e.key = "Escape")) {
      instance.close();
    }
  });
});
