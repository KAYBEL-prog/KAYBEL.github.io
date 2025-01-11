// Anim header
// 
// start

const header = document.getElementById('header');
const link = document.getElementById('change-link');
const animLink = document.getElementById('anim-change-link');
// 
const swapBtnOne = document.getElementById('swap-btn-1');
const swapBtnTwo = document.getElementById('swap-btn-2');
// id блока при котором происходит действие
const targetBlock = document.getElementById('portfolio');
// Настройки наблюдателя
const options = {
  root: null, // Область — весь viewport
  rootMargin: '0px', // Без отступов
  threshold: 0.5 // % видимости элемента
};
const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      link.href = '#home';
      header.style.marginTop = '120px';

      setTimeout(() => {
        animLink.classList.remove('-top-7');
        animLink.classList.add('top-7');

      }, 1);
    } else {
      link.href = '#portfolio';
      header.style.marginTop = '80px';

      setTimeout(() => {
        animLink.classList.remove('top-7');
        animLink.classList.add('-top-7');

      }, 1);
    }
  });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(targetBlock);

// End
//
// 

