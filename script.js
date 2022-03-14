const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let ready = false;
let imagesLoaded = 0;
let toatlImages = 0;
let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "Dq6_p3RGbsmjzOWNzxuN4p907ZmUfMmmsy_ioWZotGY";
const secretKey = "8nkblcYzuCbCCLN9Jzu7Pbth_TfIZ_ExdCaIq_ykkAM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images are loaded

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === toatlImages) {
    ready = true;
    loader.hidden = true;
  }
}
// get photos from unspalsh api
function displayPhotos() {
  toatlImages = photosArray.length;
  imagesLoaded = 0;
  photosArray.forEach((photo) => {
    //create a tags

    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    //create img tag
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // img event listener load
    img.addEventListener("load", imageLoaded);

    //put img inside a then put both inside image container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch {}
}
// on load
getPhotos();
