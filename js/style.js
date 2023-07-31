let cartCounter = document.querySelector('.cart_counter');
let productsButton = document.querySelectorAll('.products_button');
let add = document.querySelector('.add')






productsButton.forEach((event)=>{
    event.addEventListener('click',()=>{
        cartCounter.textContent++;
        // event.target.innerText="go"


    });
})


