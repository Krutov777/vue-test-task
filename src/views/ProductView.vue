<template>
  <div>
<!--    <router-link :to="{name: 'cart', cart: {cart}}">-->
<!--    <router-link :to="{name: 'cart'}">-->
<!--      <button class="btn btn-outline-dark">-->
<!--        <div><img alt="Vue logo" src="../assets/images/shopping_cart.png">{{ $store.getters.getCart.length }}</div>-->
<!--      </button>-->
<!--    </router-link>-->
    <product-detail
        :product="product"
        @addToCart="addToCart"
    />
  </div>
</template>

<script>
import ProductDetail from "@/components/ProductDetail.vue";
import axios from 'axios';
import store from "@/store";
import {mapMutations, mapGetters, mapActions} from 'vuex';

export default {
  components: {
    ProductDetail
  },
  data() {
    return {
      product: {
        type: Object
      },
    }
  },
  methods: {
    addToCart() {
      //this.addProductToCart(product);
      store.commit('addProductToCart', this.product)
      // let cart = localStorage.getItem('cart')
      // cart.push(this.product)
      // localStorage.setItem('cart', store.getters.getCart)
    },
    async fetchProduct() {
      try {
        axios.defaults.headers.common = {'Authorization': 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'};
        let path = "https://app.ecwid.com/api/v3/58958138/products/" + this.$route.params.id
        const responseProduct = await axios.get(path);
        let product = responseProduct.data
        this.product.id = product.id
        this.product.name = product.name
        this.product.urlImage = product.thumbnailUrl
        this.product.cost = product.price
        this.product.description = product.description
      } catch (e) {
        alert(e.message)
      }
    }
  },
  mounted() {
    this.fetchProduct();
  }
}
</script>

<style>
</style>