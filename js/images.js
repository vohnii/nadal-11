const currentMainimage = document.querySelector(".gallery-image4 img");
const   imageToChoosefrom = document.querySelectorAll(".gallery img");

imageToChoosefrom.forEach(img => img.addEventListener('click' , imageClick));


function imageClick(e) {

    imageToChoosefrom.forEach(img => img.style.opacity = 1);

    currentMainimage.src = e.target.src;
    e.target.style.opacity = 0.5;
}