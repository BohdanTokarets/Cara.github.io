
/*Sing in Page */
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

/*Navbar */
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close__button');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    });
}

document.addEventListener('mousedown', function(e){
    if(e.target.closest('#navbar') === null){
        nav.classList.remove('active');
    }
});

/*Cart Page */
const Remove_btn = document.getElementById("remove_btn");
const Remove = document.getElementById("remove");
const Remove_btn2 = document.getElementById("remove_btn2");
const Remove2 = document.getElementById("remove2");
const Remove_btn3 = document.getElementById("remove_btn3");
const Remove3 = document.getElementById("remove3");
const Remove_title= document.getElementById("remove_title");

Remove_btn.addEventListener("click", () =>{
  Remove.classList.add("remove_none");
});

Remove_btn2.addEventListener("click", () =>{
  Remove2.classList.add("remove_none");
});

Remove_btn3.addEventListener("click", () =>{
  Remove3.classList.add("remove_none");
  Remove_title.classList.add("remove_none");
});





