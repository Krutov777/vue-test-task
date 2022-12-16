<template>
  <div class="p-5 mb-5 bg-white rounded pb-5 flex flex-col overflow-hidden w-25 h-25">
    <div class="shadow-lg p-3 border bg-light bg-gradient rounded">
      <div class="block relative h-48 overflow-hidden center d-flex justify-content-center">
        <img
            :src="category.urlImage"
            loading="lazy"
            class="object-cover object-center w-full h-full block bg-gray-500"
        />
      </div>
      <div class="px-3 flex-1 d-flex justify-content-center">
        <h2 class="text-gray-900 text-base font-medium my-3">
          {{ category.name }}
        </h2>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-dark"
                @click="$router.push({ path: '/products'+'/'+category.name})">
          Send to product
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.category {
  padding: 15px;
  border: 2px solid teal;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>