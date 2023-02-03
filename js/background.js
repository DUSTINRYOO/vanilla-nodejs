const images = ["backimg.jpg", "backimg2.jpg", "backimg3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.classList.add("backgroundImage");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
