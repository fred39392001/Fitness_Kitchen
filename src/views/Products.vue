<template>
  <div>
    <h2>這裡是產品頁</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>
          <router-link :to="`/product/${item.id}`">連結</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res.data.data);
        this.products = res.data.data;
      });
  },
};
</script>
