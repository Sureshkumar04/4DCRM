// Hamburger Menu

const menuBtn = document.querySelector('.menu-btn');
const popup = document.querySelector('.left-list-mobile');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    popup.classList.toggle("popup");
});


// slider Image

let arrImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

let initial = 0;

let button = document.querySelectorAll(".btnimg")

function updatebtn() {
    button.forEach((btn, index) => {
        if (index === initial) {
            btn.classList.add("active01");
        } else {
            btn.classList.remove("active01");
        }
    });
}



function displayImg(){
    let image = document.getElementById("sliderImg")
    image.src = arrImg[initial];
    updatebtn()
}

let backward = document.querySelector(".fa-arrow-left")
let forward = document.querySelector(".fa-arrow-right")

forward.addEventListener('click',() =>{
    if(initial < arrImg.length-1){
        initial ++;
        displayImg();
    }
})
backward.addEventListener('click',() =>{
    if(initial > 0){
        initial --;
        displayImg();
    }
})




displayImg();
