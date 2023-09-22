const menuBtn = document.querySelector(".header__menu-btn")
const closeBtn = document.querySelector(".sidebar__close")
const sidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", ()=> {
    sidebar.classList.add("toggle")
})
closeBtn.addEventListener("click", ()=> {
    sidebar.classList.remove("toggle")
})