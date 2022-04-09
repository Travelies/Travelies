const $ = (id) => document.getElementById(id);

const show_nav = () => ($("nav-mobile").style.display = "block");

const close_nav = () => ($("nav-mobile").style.display = "none");
