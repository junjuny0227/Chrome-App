const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}.jpg`;
bgImage.style.width = "50%";

document.body.appendChild(bgImage);
