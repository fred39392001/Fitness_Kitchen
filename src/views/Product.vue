<template>
    <div>
        <h2>單一產品頁面</h2>
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
      });
  },
};
</script>
