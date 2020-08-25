<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-7">
          <img :src="product.imageUrl[0]" class="img-fluid" alt="...">
        </div>
        <div class="col-md-5 d-flex flex-column justify-content-center">
          <p class="h2 text-primary">{{ product.title }}</p>
          <hr class="border border-primary mt-0" style="width:100%">
          <p class="pt-3">{{ product.content }}</p>
          <div class="btn-group align-self-start mt-3" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary rounded-0">-</button>
            <button type="button" class="btn btn-outline-primary rounded-0">1</button>
            <button type="button" class="btn btn-outline-primary rounded-0">+</button>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-3">
          <h4 class="text-primary">商品資訊</h4>
        </div>
        <div class="col-md-9">
          <p v-html="product.description"></p>
        </div>
      </div>
            <div class="row mt-5">
        <div class="col-md-3">
          <h4 class="text-primary">營養成份</h4>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4">
              <p><i class="fas fa-weight-hanging pr-2"></i>重量：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.weight}}
                </span>克
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-fire-alt pr-2"></i>熱量：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.calories}}
                </span>卡
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-egg pr-2"></i>蛋白質：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.protein}}
                </span>克
              </p>
            </div>
          </div>
          <div class="row mt-md-2">
            <div class="col-md-4">
              <p><i class="fas fa-tint pr-2"></i>脂肪：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.fat}}
                </span>克
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-cookie-bite pr-2"></i>碳水：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.carbohydrate}}
                </span>克
              </p>
            </div>
            <div class="col-md-4">
              <p><i class="fas fa-certificate pr-2"></i>鈉：
                <span class="border-bottom border-dark text-center"
                style="display:inline-block; width:30%">
                {{product.options.na}}
                </span>毫克
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
        <h5 class="font-weight-bold mb-3 h5">相關商品</h5>
        <RelatedPorducts :product="product" @update="getProduct"/>
        </div>
      </div>
    </div>
</template>

<script>
import RelatedPorducts from '@/components/RelatedProducts.vue';

export default {
  data() {
    return {
      product: {
        num: 1,
        imageUrl: [],
        options: {},
      },
    };
  },
  components: {
    RelatedPorducts,
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.product = res.data.data;
          this.$set(this.product, 'num', 1);
        });
    },
  },
};
</script>
