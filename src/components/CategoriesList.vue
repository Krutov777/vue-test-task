<template>
    <div v-if="categories.length > 0" class="row align-items-start">
      <category-item class="col-4"
                     v-for="category in categories"
                     :category="category"
      />
    </div>
    <h2 v-else style="color: #bf4545">
      Список категорий пуст
    </h2>
</template>

<script>
import CategoryItem from "@/components/CategoryItem.vue";

export default {
  components: {CategoryItem},
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>