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
              <li class="nav-item active">
                <router-link class="nav-link text-light" to="/">首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link mx-md-2 text-light" to="/products">美味餐點</router-link>
              </li>
              <li class="nav-item d-flex">
                <router-link class="nav-link text-light" to="./cart">
                  <i class="fas fa-shopping-cart"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>
