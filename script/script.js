const menuBtn = document.querySelector(".header__menu"),
     lang = document.querySelector(".lang"),
     hiddenNav = document.querySelector(".hide-nav-block"),
     hiddenNavContainer = document.querySelector(".hide-nav"),
     hiddenNavItem = document.querySelector(".hide-nav__item"),
     nav = document.querySelector(".nav");
function burgerMenuChange(type) {
    menuBtn.classList[type]("header__menu_active");
    for (let i = 0, j = menuBtn.children.length; i < j; i++) {
        let xx = 'burger_active-';
        menuBtn.children[i].classList[type](`${xx}` + i);
    }
    if(type==="add"){
        if(hiddenNav.classList.contains("hide-nav-block_deactive")){
            hiddenNav.classList.remove("hide-nav-block_deactive");
            hiddenNavContainer.classList.remove("hide-nav_deactive")
        }
        hiddenNav.classList.add("hide-nav-block_active")
        hiddenNavContainer.classList.add("hide-nav_active")
    }
    else {
        hiddenNav.classList.add("hide-nav-block_deactive")
        hiddenNavContainer.classList.add("hide-nav_deactive")
        hiddenNav.classList.remove("hide-nav-block_active");
        hiddenNavContainer.classList.remove("hide-nav_active")
    }
}
function removeAndAddClass(item, className, addClass) {
    let removeActiveClass = document.querySelector(`.${className}`);
    removeActiveClass.classList.remove(className)
    if (addClass) item.classList.add(className)
}

menuBtn.addEventListener("click", () => {
    let headerMenuActive = document.querySelector(".header__menu_active");
    headerMenuActive == null ? burgerMenuChange('add') : burgerMenuChange('remove')
});

lang.addEventListener("click", (e) => {
    if (e.target === lang.children[0] || e.target === lang.children[1]) {
        removeAndAddClass(e.target, "lang_active", true)
    }
})

hiddenNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("hide-nav__item")) {
        removeAndAddClass(e.target, "hide-nav__item_active", true)
        burgerMenuChange('remove')
    }
    else{burgerMenuChange('remove')}
})

for (let i = 0, j = nav.children.length; i < j; i++) {
    nav.children[i].addEventListener("click", () => {
        removeAndAddClass(nav.children[i].children[1], "nav__link-active_show", true)
    })
}
