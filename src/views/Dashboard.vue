<template>
    <div class="dashborad">
        <h2>這裡是後台管理頁面</h2>
            <div id="nav">
                <router-link to="/admin/">後台首頁</router-link> |
                <router-link to="/admin/products">後台產品列表</router-link> |
                <router-link to="/admin/coupons">後台優惠券列表</router-link> |
                <router-link class="text-gray" to="/">回前台頁面</router-link>
            </div>
        <router-view/>
    </div>
</template>
<style lang="scss">
.dashborad {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    .text-gray{
    color:gray;
    }

    a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
        color: #42b983;
    }
    }
}
</style>
