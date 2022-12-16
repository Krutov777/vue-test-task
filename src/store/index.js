import {createStore} from "vuex";

export default createStore({
    state: {
        cart: [],
    },
    getters: {
        getCart(state) {
            const cartData = localStorage.getItem('cart');
            state.cart = cartData ? JSON.parse(cartData) : []
            return state.cart
        }
    },
    mutations: {
        addProductToCart(state, product) {
            const cartData = localStorage.getItem('cart');
            state.cart = cartData ? JSON.parse(cartData) : []
            state.cart.push(product)
            localStorage.clear()
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})