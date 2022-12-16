<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categories">Categories</a>
          </li>
        </ul>
      </div>
    </div>
<!--      <a class="btn btn-outline-success" type="submit" href="/cart">-->
<!--        -->
<!--        <img alt="Vue logo" src="../assets/images/shopping_cart.png" width="25" height="25">-->
<!--        {{ $store.getters.getCart.length }}-->
<!--      </a>-->
      <a type="button" class="btn btn-secondary btn-sm" style="width: 100px" href="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
       &nbsp{{ $store.getters.getCart.length }}
      </a>
  </nav>
</template>

<script>
import store from "@/store";

export default {}
</script>

<style scoped>
.navbar {
  height: 50px;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
</style>