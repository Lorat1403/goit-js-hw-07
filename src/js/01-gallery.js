import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onGalleryClick);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return ` <div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div> `;
  })
  .join("");
console.log(galleryMarkup);

galleryEl.innerHTML = galleryMarkup;

function onGalleryClick(event) {
  event.preventDefault();
  console.log("I'm working");
  if (event.target.classList.contains(".gallery__image")) {
    return;
  }
  const instance = basicLightbox
    .create(
      ` <div class="modal"><img src="${event.target.dataset.source}"></div>`,
      {
        onShow: () => {
          galleryEl.addEventListener("keydown", onEscPress),
            document.body.classList.add("no-scroll");
        },
        onClose: () => {
          galleryEl.addEventListener("keydown", onEscPress),
            document.body.classList.remove("no-scroll");
        },
      }
    )
    .show();

  function onEscPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      instance.close();
    }
  }
}
