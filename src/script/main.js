// Change Logo on scroll
// navbar = document.getElementById('nav-section');

// window.addEventListener("scroll", function(){
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if(scrollTop > 20){
//     navbar.classList.add('icon');
//   } else{
//     navbar.classList.remove('icon');
//   }

// });

// Header Color
header = document.querySelector('header');

window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > 20){
    header.classList.add('active');
  } else{
    header.classList.remove('active');
  }

});

// Desktop Menu Scroll

const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');
const hTitleEls = document.querySelectorAll('.header-title');

let currentSection = 'about'
window.addEventListener('scroll', () => {
  sectionEls.forEach(sectionEl => {
    if(window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 8)){
    // if(window.scrollY >= sectionEl.offsetTop){
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach(navLinkEl => {
    if(navLinkEl.href.includes(currentSection)){
      document.querySelector('.menu .active').classList.remove('active');
      navLinkEl.classList.add('active');
    }
  });

  hTitleEls.forEach(hTitleEl => {
    if(hTitleEl.href.includes(currentSection)){
      document.querySelector('.title .active').classList.remove('active');
      hTitleEl.classList.add('active');
    }
  });

});

// Project Hoover
if (window.innerWidth > 768) {
  function redirectToLink(element) {
    // Get the link inside the clicked experience-list
    var link = element.querySelector('h3 a');

    // Check if the link exists
    if (link) {
      // Redirect to the link's href
      window.location.href = link.getAttribute('href');
    }
  }
}


