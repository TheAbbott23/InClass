const cart = [];

function addtoCart (name, price, quantity) {
    const newCartItem = {name:name, price:price, quantity: quantity};
    cart.push(newCartItem);

}




function emptyCart () {
    cart = [];
}

module.exports = {
    addtoCart,emptyCart,cart,

};


//INCLUDE cart variable to test if cart has changed