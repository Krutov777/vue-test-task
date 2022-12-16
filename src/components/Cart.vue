<template>
  <div v-if="cart.length > 0" class="row align-items-start">
    <h3>List of products in cart</h3>
    <product-item
        v-for="product in cart" :product="product"
        :key="product.id"
        class="col-6"
    />
  </div>
  <h2 v-else style="color: #bf4545">
    Cart is empty
  </h2>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {ProductItem},
  props: {
    cart: []
  }
}
</script>

<style scoped>
</style>