// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('#navbar');
    const toTop = document.querySelector('#to-top');

    // Jika di-scroll lebih dari 50px dari atas
    if (window.pageYOffset > 50) {
        header.classList.add('navbar-fixed');
        header.classList.remove('bg-transparent');
        
        if (toTop) {
            toTop.classList.remove('hidden');
            toTop.classList.add('flex');
        }
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('bg-transparent');
        
        if (toTop) {
            toTop.classList.remove('flex');
            toTop.classList.add('hidden');
        }
    }
};
// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//dark mode
const darkToggel = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggel.addEventListener('click', function(){
    if(darkToggel.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
});