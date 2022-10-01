const numberOfImages = 6;
let currentImage = 0;  // There's always going to be 3 images on the screen
let frameKeep = 0

function scrollToRight() {
  frameKeep = 0;
  currentImage++;
  if (currentImage >= numberOfImages - 3) {
    currentImage = numberOfImages - 3;
  }
  document.getElementById(currentImage.toString()).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

function scrollToLeft() {
  frameKeep = 0;
  currentImage--;
  if (currentImage <= 0) {
    currentImage = 0;
  }
  document.getElementById(currentImage.toString()).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}
