import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return ` <li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li> `;
  })
  .join("");
console.log(galleryMarkup);

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onModalOpenClick);

function onModalOpenClick(el) {
  const imgTarget = el.target.classList.contains("gallery__image");
  if (!imgTarget) {
    return;
  }

  el.preventDefault();
}
const lightbox = new SimpleLightbox(".gallery a", {
  
  captionDelay: 250,
  captionsData: "alt",
  
});
console.log(lightbox);

