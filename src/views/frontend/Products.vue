<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-cover"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/rq8hCIjmAHnXNIxblTDrqxURtgLE5av1GvKHihtuhCLNL9aLN1Ay0I9f6pXx87DOKVuViC5iAHpRQKSQEruXSEflcMxzb94KJcPwo03j2I2206Ykzqg7yRNtkIksTRif.jpg);
    height: 250px">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start">
              <h1 class="text-light font-weight-bold pt-2" style="font-size:50px">精選食材，
                <br>美味多元！</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-md-5 mt-3">
      <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
          role="tab" aria-controls="pills-home" aria-selected="true"
          @click.prevent="getFilter(filterType = 'all')">全部餐點</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
          role="tab" aria-controls="pills-profile" aria-selected="false"
          @click.prevent="getFilter(filterType = 'beef')">嚴選牛肉</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
          role="tab" aria-controls="pills-contact" aria-selected="false"
          @click.prevent="getFilter(filterType = 'pig')">國產豬肉</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
          role="tab" aria-controls="pills-profile" aria-selected="false"
          @click.prevent="getFilter(filterType = 'chicken')">優質雞肉</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
          role="tab" aria-controls="pills-contact" aria-selected="false"
          @click.prevent="getFilter(filterType = 'seafood')">澎派海鮮</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
          role="tab" aria-controls="pills-profile" aria-selected="false"
          @click.prevent="getFilter(filterType = 'bread')">低碳麵點</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
          role="tab" aria-controls="pills-contact" aria-selected="false"
          @click.prevent="getFilter(filterType = 'drink')">減糖飲品</a>
        </li>
      </ul>
      <div class="row mt-md-5 mt-3">
        <div class="col-md-4" v-for="item in newProducts" :key="item.id">
          <div class="card box-shadow border-0 mb-4 position-relative position-relative">
            <router-link :to="`/product/${item.id}`">
            <img :src="item.imageUrl[0]" class="card-img-top rounded-0" alt="...">
            </router-link>
            <a href="#" class="text-dark">
              <i class="far fa-heart position-absolute text-light" style="right: 16px; top: 16px;
              z-index:99"></i>
            </a>
            <div class="card-body d-flex flex-column align-items-center">
              <h4 class="mb-0">
                <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
                </h4>
              <p class="card-text text-muted mb-0">{{ item.options.summary }}</p>
              <div class="mt-2 d-flex">
                <p class="text-muted mr-2 line-through">
                  原價：{{ item.origin_price }}
                </p>
                <p class="text-primary">售價：<strong>{{ item.price }}</strong>
                </p>
              </div>
              <button class="btn btn-outline-primary">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      newProducts: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.data;
          this.newProducts = this.products;
          this.newProducts.sort((a, b) => b.price - a.price);
          const { categoryName } = this.$route.params;
          if (categoryName) {
            this.filterType = categoryName;
          }
        });
    },
    getFilter() {
      switch (this.filterType) {
        case 'all':
          this.newProducts = this.products;
          break;
        case 'beef':
          this.newProducts = this.products.filter((item) => item.category === '嚴選牛肉');
          break;
        case 'pig':
          this.newProducts = this.products.filter((item) => item.category === '國產豬肉');
          break;
        case 'chicken':
          this.newProducts = this.products.filter((item) => item.category === '優質雞肉');
          break;
        case 'seafood':
          this.newProducts = this.products.filter((item) => item.category === '澎派海鮮');
          break;
        case 'bread':
          this.newProducts = this.products.filter((item) => item.category === '低碳麵點');
          break;
        case 'drink':
          this.newProducts = this.products.filter((item) => item.category === '減糖飲品');
          break;
        default:
          break;
      }
    },
  },
};
</script>
