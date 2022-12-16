<template>
  <div v-if="!loading" class="loading">
    <div class="loader" style="--b: 20px;--c:#000;width:80px;--n:15;--g:7deg"></div>
  </div>
  <div v-else>
    <div>
      <categories-list
          :categories="categories"
      />
    </div>
  </div>
</template>

<script>
import CategoriesList from "@/components/CategoriesList.vue";
import axios from 'axios';

export default {
  components: {
    CategoriesList
  },
  data() {
    return {
      loading: false,
      categories: []
    }
  },
  methods: {
    async fetchCategories() {
      try {
        axios.defaults.headers.common = {'Authorization': 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'};
        let path = "https://app.ecwid.com/api/v3/58958138/categories"
        const response = await axios.get(path);
        let categories = response.data["items"]
        for (let i = 0; i < categories.length; i++) {
          let category = {
            id: categories[i].id,
            name: categories[i].name,
            urlImage: categories[i].thumbnailUrl
          }
          this.categories.push(category)
          this.loading = true;
        }
      } catch (e) {
        alert(e.message)
      }
    },
  },
  mounted() {
    this.fetchCategories();
  }
}
</script>

<style>
@import '@/assets/styles/animationLoading.css';
</style>