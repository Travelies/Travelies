const $ = (id) => document.getElementById(id);

document.addEventListener('scroll', () => {
  $('tothetop').style.display = window.scrollY !== 0 ? 'flex' : 'none';
});

const show_nav = () => ($('nav-mobile').style.display = 'block');

const close_nav = () => ($('nav-mobile').style.display = 'none');

const goTo = (id) => window.location.href = id;

const scrollToTop = () => window.scrollTo(0, 0);