//Select Dom Items
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav')
const menuBrand = document.querySelector('.menu-branding')
const menuItem = document.querySelectorAll('.nav-item')

let showMenu = false ;

menuBtn.addEventListener('click' , ()=>{
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    menuItem.forEach((item)=>{
      item.classList.add('show');
    })
    // now it's already shown so let reassign it
    showMenu = true;

  }
  else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrand.classList.remove('show');
    menuItem.forEach((item)=>{
      item.classList.remove('show');
    })

  }
})
