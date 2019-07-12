/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function Carousel(images) {
  console.log(images)
  const carousel = document.createElement('div')
  carousel.classList.add("carousel")
  let index = 0

  left = document.createElement('div')
  left.classList.add('left-button')
  left.textContent = '<'
  left.addEventListener("click", () => {
    const images = document.querySelectorAll(".carousel img")
    index === 0 ? index = 3 : index--;
    images.forEach(img => (img.style.display = "none"));
    images[index].style.display = "block";
  });

  right = document.createElement('div')
  right.classList.add('right-button')
  right.textContent = '>'
  right.addEventListener("click", () => {
    const images = document.querySelectorAll(".carousel img")
    console.log('first index:', index)
    index === 3 ? index = 0 : index++;
    console.log("second index:", index)
    images.forEach(img => (img.style.display = "none"));
    console.log("indexed image:", images[index])
    images[index].style.display = "block";
  });

  carousel.appendChild(left)

  images.forEach(i => {
    let im = document.createElement('img')
    im.src = i
    carousel.appendChild(im)
  })

  carousel.appendChild(right)

  return carousel
}
const images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']
const carouselContainer = document.querySelector('.carousel-container')
console.log(carouselContainer)
const carousel1 = carouselContainer.appendChild(Carousel(images))
const img1 = document.querySelectorAll(".carousel img")[0]
console.log(img1)
img1.style.display = "block"