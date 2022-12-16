<template>
  <div v-if="products.length > 0" class="row align-items-start">
    <product-item
        v-for="product in products"
        :product="product"
        :key="product.id"
        @click="$emit('addToCart', product)"
        class="col-6"
    />
  </div>
  <h2 v-else style="color: #bf4545">
    List of products is empty
  </h2>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {ProductItem},
  props: {
    products: {
      type: Array,
      required: true
    },
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>