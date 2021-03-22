const nav = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const navBtn = document.querySelector('.nav-btn');
const navItems = document.querySelectorAll('.sidebar__item');
const logo = document.querySelector('.logo');
const emblem = document.querySelector('.emblem');
const form = document.querySelector('form');
console.log(form)

navBtn.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('nav-active');
  content.classList.toggle('content-active');
  navBtn.classList.toggle('nav-btn-active');
  logo.classList.toggle('dblock');
  emblem.classList.toggle('dnone');
});

navItems.forEach((el) => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    navItems.forEach((el) => {
      el.classList.remove('item-active');
    })
    el.classList.add('item-active');
  });
})

window.onscroll = function() {
  if (window.pageYOffset > 150) {
    form.classList.add('scrolled');
  } else {
    form.classList.remove('scrolled');
  }
}