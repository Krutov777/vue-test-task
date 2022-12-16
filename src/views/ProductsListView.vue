<template>
  <div v-if="!loading" class="loading">
    <div class="loader" style="--b: 20px;--c:#000;width:80px;--n:15;--g:7deg"></div>
  </div>
  <div v-else>
    <products-list
        :products="products"
        @addToCart="addToCart"
    />
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
import axios from 'axios';
import store from "@/store";

export default {
  components: {
    ProductsList
  },
  data() {
    return {
      loading: false,
      products: [],
      cart: []
    }
  },
  methods: {
    addToCart(product) {
      //this.addProductToCart(product);
      store.commit('addProductToCart', product)
      // let cart = localStorage.getItem('cart')
      // cart.push(this.product)
      // localStorage.setItem('cart', store.getters.getCart)
    },
    async fetchProducts() {
      try {
        axios.defaults.headers.common = {'Authorization': 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'};
        let path = "https://app.ecwid.com/api/v3/58958138/products?keyword=" + this.$route.params.id
        console.log(path)
        const response = await axios.get(path);
        let products = response.data["items"]
        for (let i = 0; i < products.length; i++) {
          let product = {
            id: products[i].id,
            name: products[i].name,
            urlImage: products[i].thumbnailUrl
          }
          this.products.push(product)
        }
        this.loading = true;
      } catch (e) {
        alert(e.message)
      }
    },
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style>
@import '@/assets/styles/animationLoading.css';


</style>