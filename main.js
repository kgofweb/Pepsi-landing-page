// DOM elements
const pepsiImg = document.querySelector('.pepsi');
const colorBg = document.querySelector('.bg');
const thumbImg = document.querySelectorAll('.thumb li img');
const toggleMenu = document.querySelector('.toggle-menu');
const mainMenu = document.querySelector('.main-menu');

// Events listener
thumbImg.forEach(thumb => {
   thumb.addEventListener('click', () => {
      // Change image
      if(thumb.classList.contains('thumb2')) {
         imageSlider('./img/pepsi002.png');
      } else if(thumb.classList.contains('thumb3')) {
         imageSlider('./img/pepsi003.png');
      } else {
         imageSlider('./img/pepsi001.png');
      }

      // Change bgColor
      if(thumb.classList.contains('thumb2')) {
         changeBgColor('#e60c2c');
      } else if(thumb.classList.contains('thumb3')) {
         changeBgColor('#1e1e1e');
      } else {
         changeBgColor('#0062be');
      }
   });
});

toggleMenu.addEventListener('click', () => {
   menuToggle();
});

// Functions
function imageSlider(img) {
   pepsiImg.src = img;
}

function changeBgColor(color) {
   colorBg.style.background = color;
}

function menuToggle() {
   toggleMenu.classList.toggle('active');
   mainMenu.classList.toggle('active');
}