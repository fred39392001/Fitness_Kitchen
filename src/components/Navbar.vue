<template>
    <div class="bg-primary sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <router-link class="navbar-brand" to="/">
            <img src="img/Fitness_Kitchen_Logo_W.svg"  style="height:55px" alt="">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item is-active">
                <router-link class="nav-link" to="/">首頁</router-link>
              </li>
              <li class="nav-item is-active">
                <router-link class="nav-link ml-md-2" to="/about">關於我們</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link mx-md-2" to="/products">美味餐點</router-link>
              </li>
              <li class="nav-item d-flex">
                <router-link class="nav-link" to="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  <span class="badge badge-pill badge-warm"
                  style="transform: translateX(-6px) translateY(-11px)" v-if="carts.length">
                  {{ carts.length }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('get-cart', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
