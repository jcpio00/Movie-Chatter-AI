document.addEventListener('DOMContentLoaded', () => {
    const menuWrapper = document.querySelector('.categories-menu-wrapper');
    const menu = menuWrapper.querySelector('.categories-menu');
    const scrollLeftBtn = menuWrapper.querySelector('.scroll-left');
    const scrollRightBtn = menuWrapper.querySelector('.scroll-right');
  
    let scrollAmount = 0;
    const step = 5;
    const delay = 10;
    let timer;
  
    const startScrollLeft = () => {
      stopScroll();
      timer = setInterval(() => {
        scrollAmount += step;
        menu.style.transform = `translateX(-${scrollAmount}px)`;
        if (scrollAmount >= menu.scrollWidth - menuWrapper.offsetWidth) {
          stopScroll();
        }
      }, delay);
    };
  
    const startScrollRight = () => {
      stopScroll();
      timer = setInterval(() => {
        scrollAmount -= step;
        menu.style.transform = `translateX(-${scrollAmount}px)`;
        if (scrollAmount <= 0) {
          stopScroll();
        }
      }, delay);
    };
  
    const stopScroll = () => {
      clearInterval(timer);
    };
  
    scrollLeftBtn.addEventListener('mouseover', () => {
      startScrollLeft();
      scrollLeftBtn.classList.add('active');
    });
  
    scrollLeftBtn.addEventListener('mouseout', () => {
      stopScroll();
      scrollLeftBtn.classList.remove('active');
    });
  
    scrollRightBtn.addEventListener('mouseover', () => {
      startScrollRight();
      scrollRightBtn.classList.add('active');
    });
  
    scrollRightBtn.addEventListener('mouseout', () => {
      stopScroll();
      scrollRightBtn.classList.remove('active');
    });
  
    menu.addEventListener('wheel', (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      if (delta === -1) {
        startScrollRight();
        scrollRightBtn.classList.add('active');
      } else if (delta === 1) {
        startScrollLeft();
        scrollLeftBtn.classList.add('active');
      }
    });
  
    const liList = document.querySelectorAll('.categories-menu li');
    liList.forEach((li) => {
      li.addEventListener('mouseover', () => {
        li.style.color = 'red';
      });
      li.addEventListener('mouseout', () => {
        li.style.color = 'inherit';
      });
    });
  });
  