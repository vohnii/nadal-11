const mybutton = document.querySelector("button");
const mybox = document.querySelector('.box');    
const colors = ["red" , "green" , "blue" ,"yellow"];
    
mybutton.addEventListener("click", changecolor);

function changecolor() {

    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);
    mybox.style.backgroundColor = colors[randomIndex];

}