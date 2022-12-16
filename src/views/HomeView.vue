<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/views/Main.vue'

export default {
  name: 'HomeView',
  components: {
    Main
  }
}
</script>
