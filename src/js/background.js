const images = [
  "CherryGrove.png",
  "Desert.png",
  "FlowerForest.png",
  "Jungle.png",
  "Savanna.png",
  "FrozenRiver.png",
  "GravellyHills.png",
  "MangroveSwamp.png",
  "MushroomFields.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;
bgImage.style.width = "62%";

document.body.appendChild(bgImage);
