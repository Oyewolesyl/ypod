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

const floatingProducts = document.querySelectorAll(".site-float, .section-float");

floatingProducts.forEach((item) => {
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  item.addEventListener("pointerdown", (event) => {
    item.classList.add("dragging");
    item.setPointerCapture(event.pointerId);
    startX = event.clientX - currentX;
    startY = event.clientY - currentY;
  });

  item.addEventListener("pointermove", (event) => {
    if (!item.classList.contains("dragging")) {
      return;
    }

    currentX = event.clientX - startX;
    currentY = event.clientY - startY;
    item.style.translate = `${currentX}px ${currentY}px`;
  });

  function releaseDrag(event) {
    item.classList.remove("dragging");
    if (item.hasPointerCapture(event.pointerId)) {
      item.releasePointerCapture(event.pointerId);
    }
  }

  item.addEventListener("pointerup", releaseDrag);
  item.addEventListener("pointercancel", releaseDrag);
});
