const burger = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('primary')[1]

burger.addEventListener('click',() =>{
    navbarLinks.classList.toggle('active')
})