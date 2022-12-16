<template>
  <div>
    <products-list-for-cart
        :cart="cart"
        @remove="removeFromCart"
        @order="orderProduct"
    />
  </div>
</template>

<script>
import ProductsListForCart from "@/components/ProductListForCart.vue";
import {mapGetters} from 'vuex';
import store from "@/store";

export default {
  components: {
    ProductsListForCart
  },
  // props: {
  //   cart: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      //cart: store.getters.getCart
      cart: []
      // cart: [{
      //   id: 344134461,
      //   name: "ОБРАЗЕЦ. ЦВЕТОЧНЫЙ ТОП",
      //   urlImage: "https://d2j6dbq0eux0bg-cdn.ecwid.net/default-store/jade_tank_400px.jpg"
      // }]
    }
  },
  computed: {
    ...mapGetters(['getCart'])
  },
  methods: {
    removeFromCart(product) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === product) {
          this.cart.splice(i, 1);
        }
      }
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    orderProduct(product) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === product) {
          this.cart.splice(i, 1);
        }
      }
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(this.cart))
      alert('Congratulations on a successful purchase')
    },
  },
  mounted() {
    const cartData = localStorage.getItem('cart');
    this.cart = cartData ? JSON.parse(cartData) : [];
    store.state.cart = this.cart
  }
}
</script>

<style>
</style>