const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector ('#navbar__logo')

//Display Mobile Menu 

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click',mobileMenu); 

//show active menu when scrolling 
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const abutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollpos = window.scrollY
    //console.log(scroiiPos);

    // adds 'highlight' class to my menu items
    
    if(window.innerWidth > 960 && scrollpos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove ('highlight')
        return
    }else if (window.innerWidth > 960 && scrollpos < 1400) {
        aboutMenu.classList.add ('highligh')
        homeMenume.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return 
    
    }else if (window.innerWidth > 960 && scrollpos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highligh')
        return
    }    
    
    if ((elem && window.innerWidth < 960 && scrollpos < 600 ) || elem) {
        elem.classList.remove('highlight')
    }


}


window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//  Close mobile Menu when clicking on a menu item 
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



















