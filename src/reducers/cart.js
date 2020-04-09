import * as Types from "./../constants/ActionsType"

var data = JSON.parse(localStorage.getItem("Cart"));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1; // -1 ko tim thay, !-1 tim thay
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProduct(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];

        case Types.DELETE_PRODUCT_IN_CART:
            index = findProduct(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];

        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProduct(state, product);
            if(index !== -1){
                if(quantity > 0){
                    state[index].quantity = quantity;  
                }else{
                    state[index].quantity = 1;
                }
                
            }
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

var findProduct = (cart, product) =>{
    var index = -1;
    if(cart.length > 0){
        for(var i=0; i< cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;