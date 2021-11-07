import { galleryItems } from "./gallery-items.js";

const galleryContainerRef = document.querySelector(".gallery");

addItemsToGallery(galleryItems, galleryContainerRef);
console.log(galleryItems);

galleryContainerRef.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();

  const currentPic = e.target;

  const slide = createSlide(currentPic);
  slide.show();
  closeSlideOnEsc(slide);
});

function createPicMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>
            </div>`;
}

function addItemsToGallery(pics, gallery) {
  gallery.innerHTML = pics.map(createPicMarkup).join("");
}

function createSlide(pic) {
  return basicLightbox.create(
    `<img src='${pic.dataset.source} alt='${pic.alt}'>`
  );
}

function closeSlideOnEsc(slide) {
  const isSlideOpen = document.querySelector(".basicLightbox");

  if (isSlideOpen) {
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key !== "Escape") {
          return;
        }
        slide.close();
      },
      { once: true }
    );
  }
}
