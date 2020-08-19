<template>
  <div class="home">
      <div id="nav">
        <router-link to="/">前台首頁</router-link> |
        <router-link to="/products">產品列表</router-link> |
        <router-link to="/cart">購物車列表</router-link> |
        <router-link to="/admin" class="text-gray">後台管理頁面</router-link>
    </div>
    <router-view/>
  </div>
</template>
