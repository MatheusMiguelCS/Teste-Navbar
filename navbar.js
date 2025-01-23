const menuHamburguer = document.querySelector(".menu-hbgr")
const navbar = document.querySelector(".nav")
const ul = document.querySelector(".ul")
const linknav = document.querySelectorAll(".link-nav")
const iconPerfil = document.querySelector(".icon-perfil")
const iconLogout = document.querySelector(".icon-logout")

menuHamburguer.addEventListener('click', () => {   
    if(navbar.classList.contains("nav-active")){
        navbar.classList.remove("nav-active")
    }else{
        navbar.classList.add("nav-active")
    }

    if(ul.classList.contains("ul-active")){
        ul.classList.remove("ul-active")
    }else{
        ul.classList.add("ul-active")
    }  

    // if(linknav.classList.contains("link-nav-active")){
    //     linknav.classList.remove("link-nav-active")
    // }else{
    //     linknav.classList.add("link-nav-active")
    // }

    if(iconPerfil.classList.contains("icon-perfil-active")){
        iconPerfil.classList.remove("icon-perfil-active")
    }else{
        iconPerfil.classList.add("icon-perfil-active")
    }  

    if(iconLogout.classList.contains("icon-logout-active")){
        iconLogout.classList.remove("icon-logout-active")
    }else{
        iconLogout.classList.add("icon-logout-active")
    } 

    if(menuHamburguer.classList.contains("menu-hbgr-active")){
        menuHamburguer.classList.remove("menu-hbgr-active")
    }else{
        menuHamburguer.classList.add("menu-hbgr-active")
    } 


})
