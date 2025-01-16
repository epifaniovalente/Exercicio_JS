const container = document.querySelector('.container')
const registro_btn = document.querySelector('.registrar-btn')
const login_btn = document.querySelector('.login-btn')

registro_btn.addEventListener('click', () => {
    container.classList.add('active');
})
login_btn.addEventListener('click', () => {
    container.classList.remove('active');
})