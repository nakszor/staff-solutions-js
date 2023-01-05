const showMenu = document.getElementById("show-menu")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close-menu")
const partners = document.getElementById('partners')


showMenu.addEventListener("click", () => {
    menu.classList.remove('hidden')
    showMenu.classList.add('hidden')
    closeMenu.style.display = 'block'
})
closeMenu.addEventListener("click", () => {
    menu.classList.add('hidden')
    closeMenu.style.display = 'none'
    showMenu.classList.remove('hidden')
})

const modal1 = document.querySelector(".modal-1")
const btnCloseModal = document.querySelector("#button-modal")

btnCloseModal.addEventListener("click", () => {
    modal1.style.display = "none"
})

const openLogin = document.getElementById('open-login-mobile')
const openRegister = document.getElementById('open-register-mobile')

const login = document.getElementById('div-login')
const register = document.getElementById('div-register')

openLogin.addEventListener('click', () => {
    login.classList.remove('hidden')
    register.classList.add('hidden')
    partners.classList.add('hidden')
})
openRegister.addEventListener('click', () => {
    partners.classList.add('hidden')
    login.classList.add('hidden')
    register.classList.remove('hidden')
})

const loginDesktop = document.getElementById('open-login-desktop')
const registerDesktop = document.getElementById('open-register-desktop')

loginDesktop.addEventListener('click', () => {
    login.classList.remove('hidden')
    register.classList.add('hidden')
    partners.classList.add('hidden')
})
registerDesktop.addEventListener('click', () => {
    register.classList.remove('hidden')
    partners.classList.add('hidden')
    login.classList.add('hidden')
})

const goRegister = document.getElementById('registerbutton')
const goLogin = document.getElementById('go-to-login-button')
const goBack = document.getElementById('btn-voltar')

goRegister.addEventListener('click', () => {
    partners.classList.add('hidden')
    login.classList.add('hidden')
    register.classList.remove('hidden')
})
goLogin.addEventListener('click', () => {
    login.classList.remove('hidden')
    register.classList.add('hidden')
    partners.classList.add('hidden')
})
goBack.addEventListener('click', () => {
    login.classList.remove('hidden')
    register.classList.add('hidden')
    partners.classList.add('hidden')
})

const partnersBtn1 = document.getElementById('partners-btn1') 
const partnersBtn2 = document.getElementById('partners-btn2') 

partnersBtn1.addEventListener('click', () => {
    partners.classList.remove('hidden')
    register.classList.add('hidden')
    login.classList.add('hidden')
})
partnersBtn2.addEventListener('click', () => {
    partners.classList.remove('hidden')
    register.classList.add('hidden')
    login.classList.add('hidden')
})
