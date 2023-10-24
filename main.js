const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }




  
// =================================================
// Scroll top button
// =================================================

  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }


// =================================================
// Scroll top button
// =================================================

const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
if (mobileNavToogle) {
  mobileNavToogle.addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelector('body').classList.toggle('mobile-nav-active');

    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
}


function scrollto(el) {
  const selectHeader = document.querySelector('#header');
  let offset = 0;

  if (selectHeader.classList.contains('sticked')) {
    offset = document.querySelector('#header.sticked').offsetHeight;
  } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
    offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
  }
  window.scrollTo({
    top: document.querySelector(el).offsetTop - offset,
    behavior: 'smooth'
  });
}