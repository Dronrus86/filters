let cartCounter = document.querySelector('.cart_counter');
let productsButton = document.querySelectorAll('.products_button');
let add = document.querySelector('.add')






productsButton.forEach((event)=>{
    event.addEventListener('click',()=>{
        cartCounter.textContent++;
        // event.target.innerText="go"


    });
})


const showMenu = document.querySelector('.show_menu');
const btnBurgerMenu = document.querySelector('.btn_burger_menu')
const mobileNav= document.querySelector('.mobile_nav ')

btnBurgerMenu.addEventListener('click', () => {
    showMenu.classList.toggle('show_menu');
    // mobileNav.style='transition: height 1s liner 250ms';





});