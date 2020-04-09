import * as Types from "./../constants/ActionsType";

export const actAddToCart = (product, quantity) =>{
    return{
        type: Types.ADD_TO_CART,
        product,
        quantity
    };
}

export const actDeleteProduct = (product) =>{
    return{
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    };
}

export const actUpdateCart = (product, quantity) =>{
    return{
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    };
}

export const actChangeMessage = (message) =>{
    return{
        type: Types.CHANGE_MESSAGE,
        message
    };
}