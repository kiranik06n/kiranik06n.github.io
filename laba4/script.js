// script.js
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animated'); 
    elements.forEach(element => {
      const scrollPosition = window.scrollY; 
      const elementTop = element.getBoundingClientRect().top; 
      if (elementTop < window.innerHeight) {
        element.classList.add('show'); 
      }
    });
  });
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxBg = document.querySelector('.parallax-bg');
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.2}px)`; 
    //  Изменяйте  значение  `0.2`  для  регулировки  скорости  движения  фона
});