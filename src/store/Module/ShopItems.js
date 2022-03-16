const state = {
    Products : [
        {
            id: 1,
            type: "LTE, T-Shirts",
            name: "All Stars Shirt",
            price: 6100.00,
            image: "display1.jpg",
            quantity: 1
        },
    
        {
            id: 2,
            type: "Jackets, LTE",
            name: "Zip Down Jacket",
            price: 10100.00,
            image: "zip.jpg",
            quantity: 1
        },
    
        {
            id: 3,
            type: "Joggers, LTE",
            name: "Joggers",
            price: 7100.00,
            image: "joggers.jpg",
            quantity: 1
        },
    
        {
            id: 4,
            type: "Caps, LTE",
            name: "Caps",
            price: 3600.00,
            image: "cap.jpg",
            quantity: 1
        },
    
        {
            id: 5,
            type: "Crop, LTE, Sweatshirts, T-Shirts",
            name: "Crop Matrix Sweatshirt",
            price: 7600.00,
            image: "matrix.jpg",
            quantity: 1
        },
    
        {
            id: 6,
            type: " Crop, Jackets, LTE",
            name: "Crop Jackets",
            price: 9100.00,
            image: "jacket.jpg",
            quantity: 1
        },
        
        {
            id: 7,
            type: "LTE, T-Shirts",
            name: "Flare Shirt",
            price: 6100.00,
            image: "flare.jpg",
            quantity: 1
        },
    ],
    Cart: [],
    searchField: '',
};

const getters = {
    allProducts: (state) => state.Products,
    allCart: (state) => state.Cart,
    cartTotalPrice: (state) => {
        let total = 0;
        state.Cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total 
    }
};

const actions = {
    addToCart({ commit }, product) {
        const cart = product
        commit('updateCart', cart)
    },

    removeCart({ commit }, cart) {
        commit('deleteCart', cart)
    },

    increaseQuantity({ commit }, cart) {
        commit('updateQuantity', cart)
    }
};

const mutations = {
    updateCart: (state, cart) => {
        let productInCart = state.Cart.find(item => {
            return item.id === cart.id
        });
        if (productInCart) {
            productInCart.quantity += 1;
            return
        }
        state.Cart.push(cart)
    },

    deleteCart: (state, cart) => {
        state.Cart = state.Cart.filter(item => {
            return item.id !== cart.id
        })
    },

    updateQuantity: (state, cart) => {
        return state.Cart.quantity += cart.quantity.value
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}