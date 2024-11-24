// light gallery
lightGallery(document.querySelector(".gallery .lightbox"))



// navbar navigation
const navbar = document.querySelector('.navbar');
document.querySelector('#btn-menu').onclick = () =>{
    navbar.classList.toggle('active');
}
document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}


// boton search responsive
const formSearch = document.querySelector('.form-search');

document.querySelector('#btn-search').onclick = () =>{
    formSearch.classList.toggle('active');
}






window.onscroll = () =>{
    navbar.classList.remove('active');
    formSearch.classList.remove('active');
}

// Para las flechas del slide

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1 ) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length ) % slides.length;
    slides[index].classList.add('active');
}


var swiper = new Swiper(".products-slider", {
    loop: true,
    grabeCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });
var swiper = new Swiper(".arrivals-slider", {
    loop: true,
    grabeCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });

