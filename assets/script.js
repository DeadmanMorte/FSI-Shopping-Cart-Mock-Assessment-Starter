function changeQuantity (displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}
let quantity = 1
let quantityDown = document.querySelector('#quantity-down')
let quantityUp = document.querySelector('#quantity-up')

quantityDown.addEventListener('click', function(){
    if(quantity > 0) {
        quantity--
    }
    changeQuantity(`Quantity: ${quantity}`)
})
quantityUp.addEventListener('click', function(){
    quantity++
    changeQuantity(`Quantity: ${quantity}`)
})
function removeItem (removal) {
    let itemOne = document.querySelector('.cart-item')
}
let remove = document.querySelector('.remove')

remove.addEventListener('click', function(){


} )

