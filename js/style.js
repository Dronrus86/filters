const add = document.querySelectorAll('.btn');
let getTitle = document.querySelector('#getTitle');
let title = document.querySelector('#title');
let price = document.querySelector('#price');
add.forEach(e => {
    e.addEventListener('click', (event) => {
        getTitle.textContent = event.target.dataset.title;
        price.textContent = event.target.dataset.id;
        title.value = event.target.dataset.title;
        price.value = event.target.dataset.price;

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


const btnForm = document.querySelectorAll(".btn");
const showForm = document.querySelector('.show_form');
// const wrapper = document.querySelector('.wrapper');
btnForm.forEach((e) => {
    e.addEventListener('click', () => {
        showForm.classList.toggle('show_form');
        // wrapper.style.opacity = '0.4';
    })
});


const closePopup = document.querySelector('.closePopup');

closePopup.addEventListener('click', () => {
    showForm.classList.toggle('show_form')
});


// const btnSend = document.querySelector('.btn_send');
const sendOrder = document.querySelector('.sendOrder');
sendOrder.addEventListener('submit', (event) => {
    event.preventDefault();
    showForm.classList.toggle('show_form')
    const data = new FormData(event.target);

    console.log(`Name: ${data.get('name')}`);
    console.log(`City: ${data.get('city')}`);
    console.log(`Phone: ${data.get('phone')}`);
    console.log(`Email: ${data.get('email')}`);
    console.log(`Comment: ${data.get('comment')}`);

    console.log(`Title: ${data.get('title')}`);
    console.log(`Price: ${data.get('price')}`);
    console.log(`Url: ${data.get('url')}`);


});


