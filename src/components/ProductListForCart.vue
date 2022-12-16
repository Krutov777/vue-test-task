<template>
  <div v-if="cart.length > 0" class="row align-items-start">
    <product-item-for-cart
        v-for="product in cart" :product="product"
        :key="product.id"
        @remove="$emit('remove', product)"
        @order="$emit('order', product)"
        class="col-6"
    />
  </div>
  <h2 v-else style="color: #bf4545">
    Cart is empty
  </h2>
</template>

<script>
import ProductItemForCart from "@/components/ProductItemForCart.vue";

export default {
  components: {ProductItemForCart},
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>