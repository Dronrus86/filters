//
// const add = document.querySelectorAll('.btn')
//
// add.forEach(e=>{
//     e.addEventListener('click', (event)=>{
//         console.log(event.target.dataset.id)
//         console.log(event.target.dataset.type)
//
//     });
// })


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






const btnForm = document.querySelectorAll(".btn");
const showForm = document.querySelector('.show_form')

btnForm.forEach((e)=>{
    e.addEventListener('click',()=>{
      showForm.classList.toggle('show_form')

    })
})



const closePopup = document.querySelector('.closePopup');

closePopup.addEventListener('click', ()=>{
    showForm.classList.toggle('show_form')
})