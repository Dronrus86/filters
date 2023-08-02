let cartCounter = document.querySelector('.cart_counter');
let productsButton = document.querySelectorAll('.products_button');
let add = document.querySelector('.add')






productsButton.forEach((event)=>{
    event.addEventListener('click',()=>{
        cartCounter.textContent++;
        // event.target.innerText="go"


    });
})


const showMenu = document.querySelector('.mobile_nav');
const show = document.querySelector('.show_menu')
const btnBurgerMenu = document.querySelector('.btn_burger_menu')
const opencontent = document.querySelector('#opencontent');


btnBurgerMenu.addEventListener('click', () => {
    btnBurgerMenu.classList.toggle('show');
        opencontent.classList.toggle('open');
    showMenu.classList.toggle('show_menu');
    show.classList.toggle('show_menu')








});




