const galleryImage = document.querySelector("#galleryImage");
const galleryButtons = document.querySelectorAll(".gallery-controls button");

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    galleryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    galleryImage.src = button.dataset.image;
    galleryImage.alt = button.dataset.alt;
  });
});
