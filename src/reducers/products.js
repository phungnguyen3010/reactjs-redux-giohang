var initialState = [
    {
        id: 1,
        name: "Iphone 8x",
        image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_8_64gb.jpg",
        description: "San Pham cua Apple",
        price: 300,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: "Samsum Galaxy",
        image: "https://clickbuy.com.vn/uploads/2019/04/samsung-galaxy-s8-do.png",
        description: "San Pham cua SamSum",
        price: 250,
        inventory: 12,
        rating: 4
    },
    {
        id: 3,
        name: "Nokia 3030",
        image: "https://cdn.nguyenkimmall.com/images/detailed/583/10041721_DTDD_NOKIA-210-DS-VN-RED_01.jpg",
        description: "San Pham cua Nokia",
        price: 100,
        inventory: 8,
        rating: 3
    }
];

const products = (state= initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}

export default products;