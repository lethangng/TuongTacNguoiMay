const btn = document.querySelector('.dropdown');
const list = document.querySelector('.list');
btn.addEventListener('click', ()=> {
    list.classList.toggle('active');
})