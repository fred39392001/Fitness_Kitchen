<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover bg-img-height-s-plus"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/rq8hCIjmAHnXNIxblTDrqxURtgLE5av1GvKHihtuhCLNL9aLN1Ay0I9f6pXx87DOKVuViC5iAHpRQKSQEruXSEflcMxzb94KJcPwo03j2I2206Ykzqg7yRNtkIksTRif.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start">
              <h1 class="text-light font-weight-bold pt-2 font-size-xl">精選食材，
                <br>美味多元！</h1>
            </div>
          </div>
          <div class="col-md-5 d-md-none">
            <div class="d-flex justify-content-center align-items-center mt-4 text-shadow">
              <h1 class="text-light font-weight-bold font-size-xl">精選食材，<br>美味多元！</h1>
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
      <div class="row mt-3">
        <div class="col-md-4 my-3" v-for="item in newProducts" :key="item.id">
          <router-link :to="`/product/${item.id}`" class="text-decoration-none">
          <div class="card box-shadow border-0 mb-4 position-relative position-relative h-100">
            <router-link :to="`/product/${item.id}`">
            <img :src="item.imageUrl[0]" class="card-img-top rounded-0" alt="...">
            </router-link>
            <div class="card-body d-flex flex-column align-items-center justify-content-center">
              <h4 class="mb-0">
                <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
              </h4>
              <p class="card-text text-muted mb-0">{{ item.options.summary }}</p>
              <div class="d-none d-md-block">
                <div class="mt-2 text-center d-lg-flex">
                  <del class="text-muted mr-lg-3">
                    <small>原價：{{ item.origin_price | money }}</small>
                  </del>
                  <p class="text-primary mb-0">售價：<strong>{{ item.price | money }}</strong>
                  </p>
                </div>
              </div>
              <div class="d-md-none">
                <div class="mt-2 text-center d-flex">
                  <del class="text-muted mr-3">
                    <small>原價：{{ item.origin_price | money }}</small>
                  </del>
                  <p class="text-primary h5 mb-0">售價：<strong>{{ item.price | money }}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="card-footer d-none d-md-block">
              <div class="d-flex">
                <router-link :to="`/product/${item.id}`">
                  <button type="button" class="btn btn-outline-secondary btn-sm">查看更多</button>
                </router-link>

                <button type="button" class="btn btn-outline-primary btn-sm ml-auto
                d-flex align-items-center" @click.prevent="addToCart(item.id)"
                :disabled="status.loadingItem === item.id">加入購物車
                  <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block spinner-size-s"
                  v-if="status.loadingItem === item.id"></i>
                </button>
              </div>
            </div>
            <div class="card-footer d-md-none">
              <div class="d-flex">
                <router-link :to="`/product/${item.id}`">
                  <button type="button" class="btn btn-outline-secondary">查看更多</button>
                </router-link>
                <button type="button" class="btn btn-outline-primary ml-auto
                d-flex align-items-center" @click.prevent="addToCart(item.id)"
                :disabled="status.loadingItem === item.id">加入購物車
                  <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block spinner-size-s"
                  v-if="status.loadingItem === item.id"></i>
                </button>
              </div>
            </div>
          </div>
          </router-link>
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
      filterType: '',
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.newProducts = this.products;
          this.newProducts.sort((a, b) => b.price - a.price);
          const { categoryName } = this.$route.params;
          if (categoryName) {
            this.filterType = categoryName;
          }
        }).catch(() => {
          this.isLoading = false;
        });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      const cart = {
        product: id,
        quantity,
      };
      this.$http.post(url, cart)
        .then(() => {
          this.status.loadingItem = '';
          this.isLoading = false;
          this.$bus.$emit('get-cart');
          this.$bus.$emit('message:push',
            '商品已成功加入購物車!',
            'success');
        })
        .catch((error) => {
          this.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `加入失敗!${error.response.data.errors}`,
            'danger');
          this.isLoading = false;
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
