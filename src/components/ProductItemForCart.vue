<template>
  <div class="p-5 mb-5 bg-white rounded pb-5 flex flex-col overflow-hidden w-25 h-25">
    <div class="shadow-lg p-3 border bg-light bg-gradient rounded">
      <div class="block relative h-48 overflow-hidden center d-flex justify-content-center">
        <img
            :src="product.urlImage"
            loading="lazy"
        />
      </div>
      <div class="px-3 flex-1 d-flex justify-content-center">
        <h2 class="text-gray-900 text-base font-medium my-3">
          {{ product.name }}
        </h2>
      </div>
      <div class="btn-group">
        <button @click="$emit('remove', product)"
                type="submit" class="btn btn-outline-danger">
          Delete
        </button>
        <button @click="$emit('order', product)"
                type="submit" class="btn btn-outline-success">
          Buy&nbsp&nbsp&nbsp&nbsp
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product {
  padding: 15px;
  border: 2px solid teal;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.center {
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
</style>