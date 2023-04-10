const arrayFunctions = require ("./arraytest");

describe ('Our array functions', ()=> {
    describe ('addtoCart function', ()=>{
        test ('item added to cart', ()=> {
          arrayFunctions.addtoCart('milk', 3, 1) ;
          expect(arrayFunctions.cart.length).toEqual(1);
          expect(arrayFunctions.cart[0].name).toEqual('milk');
          //same but .price and .quantity  toEqual (3) and (1) respectively
        });
    });
    describe ('empty cart', ()=> {
        test ('cart emptied', ()=> {
            arrayFunctions.emptyCart();
            expect(arrayFunctions.cart.length).toEqual(0);
        });
    })
});