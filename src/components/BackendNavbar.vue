<template>
    <div class="bg-dark sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <div class="d-flex align-items-center">
              <img src="img/Fitness_Kitchen_Logo_W.svg" class="h-55" alt="">
              <p class="ml-3 h3 text-white mb-0">後台管理系統</p>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item is-active">
                  <router-link class="nav-link" to="/admin/products">產品列表</router-link>
                </li>
                <li class="nav-item is-active">
                  <router-link class="nav-link" to="/admin/coupons">優惠券列表</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link mx-md-2" to="/admin/orders">訂單列表</router-link>
                </li>
                <li class="nav-item d-md-none">
                  <router-link class="nav-link mx-md-2 btn btn-outline-secondary w-25"
                  to="/">回前台頁面</router-link>
                </li>
                <li class="nav-item d-none d-md-block">
                  <router-link class="nav-link mx-md-2 btn btn-outline-secondary"
                  to="/">回前台頁面</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
