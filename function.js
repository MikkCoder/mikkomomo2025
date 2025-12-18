const slides = document.querySelector('.islides');
const radios = document.querySelectorAll('.ins-img input');
const dots = document.querySelectorAll('.manual-btn');
const totalSlides = radios.length;
let index = 0; 

function setActiveDot() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  index++;
  if(index >= totalSlides) index = 0;
  radios[index].checked = true;
  slides.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
  setActiveDot();
}


setActiveDot();

setInterval(autoSlide, 3000);
