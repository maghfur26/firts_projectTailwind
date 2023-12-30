// humberger menu
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active')
    navMenu.classList.toggle('hidden')
})

//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const navfixed = header.offsetTop

    if(window.scrollY > navfixed){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

//darkMode
const togle = document.querySelector('#togle');
const html = document.querySelector('html');

togle.addEventListener('click', function() {
    togle.checked ? html.classList.add('dark') : html.classList.remove('dark');
})

//typed.js
let typed = new Typed('#job',{
    strings : ['Developer','Full Stack', 'Programmer'],
    typeSpeed : 140,
    delaySpeed : 90,
    backSpeed: 60,
    loop : true
  });