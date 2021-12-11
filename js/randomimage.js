const mybutton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["profile1.jpg", "profile2.jpg", "profile3.jpg", "profile4.jpg"];


mybutton.addEventListener('click', changeImage);

function changeImage() {

    let randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);

    image.src  = `images/${images[randomIndex]}`

}