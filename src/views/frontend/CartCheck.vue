<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-s" v-if="order.paid === false"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a6TY8mfch9Hh7XZVgzUmGJ9xaMhOxGhk4dReMSwMJ6QhCWJonnqmEH4s5gvwHMvaOrHx0PNcf5iNPbf2Yorjt3qhuxo6EEIxFZhcjMSL5YWLDxDoq2al2YHSVHtQ0JP8.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start mt-minus-m">
              <h1 class="text-light font-weight-bold font-size-xl">食指大動，
                <br>宅配到府！</h1>
            </div>
          </div>
          <div class="col-md-5 d-md-none">
            <div class="d-flex justify-content-center align-items-center mt-2 text-shadow">
              <h1 class="text-light font-weight-bold font-size-xl">食指大動，<br>宅配到府！</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5" v-else>
      <div class="bg-cover bg-img-height-l"
      style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ErASO6igoTN6AOjj5Gs10f6rUrz1bBqoXsueQLy5g2pUFHNplCw4a7LysALUj8nhfYBFA8m97SDlTM3kclf9tDdPYQqomMGvRN3i0IghBVJGlBM0rIhZubl4tCEp37Uo.jpg)">
        <div class="h-100 d-flex flex-column justify-content-center align-items-center p-3">
          <h1 class="text-light font-weight-bold font-size-xl text-shadow">訂單完成</h1>
          <p class="text-light text-center font-weight-bold font-size-l text-shadow">
            感謝您的購買！<br>您的訂單， 將在 1 ~ 3 個工作天內出貨！
          </p>
          <router-link to="/products" class="btn btn-dark w-25 mt-3 d-none d-md-block"
          v-if="order.paid === true">
          繼續選購
          </router-link>
          <router-link to="/products" class="btn btn-dark mt-3 w-50 d-md-none"
          v-if="order.paid === true">
          繼續選購
          </router-link>
        </div>
      </div>
    </div>
    <div class="container" v-if="order.paid === false">
      <div class="row justify-content-center flex-md-row">
        <div class="col-md-7">
          <div class="bg-light mt-3">
            <div class="d-flex justify-content-center justify-content-md-start">
              <h4 class="text-dark mb-0 font-weight-bold">結帳</h4>
            </div>
            <hr class="border-dark hr-border-width">
            <p>
              只差一步了！點選確認付款以完成訂單。<br>我們將在收到您的訂單後， 約 1 ~ 3 個工作天內出貨！
            </p>
            <img class="img-fluid w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Dry9BIAASb4giKnaoSNHtSk3l5GPx4a6lcxAxtoWM9GekuI7w9wUWmb53XFkhg1WWY9rBIPobkNvyGtttxQzHfU1zKpAyZvzJLo4g4XfFQODfneK8E2tGIquXnH9rAcK.jpg" alt="">
          </div>
        </div>
        <div class="col-md-5 mt-3">
          <div class="border p-4">
            <h4 class="font-weight-bold mb-3 d-flex justify-content-center
            justify-content-md-start">訂單明細</h4>
            <hr>
            <div v-for="( product, i ) in order.products" :key="i">
              <div class="d-flex mb-3">
                <img :src="product.product.imageUrl[0]" alt="" class="mr-2 table-img-width">
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0 font-weight-bold">{{ product.product.title }}</h6>
                    <h6 class="mb-0 font-weight-bold">X {{ product.quantity }}</h6>
                  </div>
                  <div class="d-flex justify-content-between">
                    <small class="mb-0 text-muted">
                      {{ product.product.price | money }} / {{ product.product.unit }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <ul class="mt-4 mb-0 border-top border-bottom text-muted pl-0">
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 pt-3 pb-0 font-weight-normal">電子郵件</p>
                <p class="text-right border-0 px-0 pt-3 pb-0">{{ order.user.email }}</p>
              </li>
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 font-weight-normal">收件人姓名</p>
                <p class="text-right border-0 px-0">{{ order.user.name }}</p>
              </li>
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人電話</p>
                <p class="text-right border-0 px-0 pt-0">{{ order.user.tel }}</p>
              </li>
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人地址</p>
                <p class="text-right border-0 px-0 pt-0">{{ order.user.address }}</p>
              </li>
            </ul>
            <ul class="text-muted pl-0">
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 pt-3 pb-0 font-weight-normal">付款金額</p>
                <p class="text-right border-0 px-0 pt-3 pb-0">{{ order.amount | money }}</p>
              </li>
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 font-weight-normal">付款方式</p>
                <p class="text-right border-0 px-0">{{ order.payment }}</p>
              </li>
              <li class="d-flex justify-content-between">
                <p scope="row" class="border-0 px-0 pt-0 font-weight-normal mb-0">付款狀態</p>
                <p v-if="!order.paid" class="text-right border-0 px-0 pt-0 mb-0 text-primary
                font-weight-bold">
                  尚未付款
                </p>
              </li>
            </ul>
            <hr v-if="order.paid === false">
            <div class="row justify-content-end">
              <div class="col-md-6">
                <div v-if="order.paid === false">
                  <a class="btn btn-primary d-flex align-items-center justify-content-center"
                  @click.prevent="payOrder" :disabled="loadingItem">
                  確認付款
                  <span v-if="loadingItem" class="spinner-grow spinner-grow-sm ml-2
                  spinner-size-s">
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3" v-if="order.paid === false">
            <a @click.prevent="backHome" class="btn btn-outline-dark w-50 d-none d-md-block" >
            回到首頁
            </a>
          </div>
          <div class="my-3" v-if="order.paid === false">
            <a @click.prevent="backHome" class="btn btn-outline-dark btn-block d-md-none" >
            回到首頁
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-5" v-else>
      <div class="row justify-content-center flex-md-row">
        <div class="col mt-3">
          <div class="border p-4">
            <h4 class="font-weight-bold mb-3 d-flex justify-content-center">訂單明細</h4>
            <hr>
            <div class="row align-items-center">
              <div class="col-6 d-none d-md-block" style="relative">
                <div v-for="( product, i ) in order.products" :key="i">
                  <div class="d-flex align-items-center my-3">
                    <img :src="product.product.imageUrl[0]" alt="" class="mr-3
                    table-img-height-s">
                    <div class="w-100">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-0 font-weight-bold mr-2">
                          {{ product.product.title }}</h6>
                        <h6 class="mb-0 font-weight-bold ml-auto">
                          X {{ product.quantity }}</h6>
                      </div>
                      <div class="d-flex">
                        <small class="mb-0 text-muted">
                          {{ product.product.price | money }} / {{ product.product.unit }}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <span v-if="order.products.length >= 4" class="headerDivider-r"></span>
              </div>
              <div class="col-6 d-none d-md-block" style="relative">
                <ul class="mb-0 border-bottom text-muted pl-0">
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pb-0 font-weight-normal">電子郵件</p>
                    <p class="text-right border-0 px-0 pb-0">{{ order.user.email }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 font-weight-normal">收件人姓名</p>
                    <p class="text-right border-0 px-0">{{ order.user.name }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人電話</p>
                    <p class="text-right border-0 px-0 pt-0">{{ order.user.tel }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人地址</p>
                    <p class="text-right border-0 px-0 pt-0">{{ order.user.address }}</p>
                  </li>
                </ul>
                <ul class="text-muted pl-0 mb-0">
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-3 pb-0 font-weight-normal">付款金額</p>
                    <p class="text-right border-0 px-0 pt-3 pb-0">{{ order.amount | money }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 font-weight-normal">付款方式</p>
                    <p class="text-right border-0 px-0">{{ order.payment }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-0 font-weight-normal mb-0">付款狀態</p>
                    <p v-if="order.paid" class="text-right border-0 px-0 pt-0 mb-0 text-success
                    font-weight-bold">
                      已完成付款
                    </p>
                  </li>
                </ul>
                <span v-if="order.products.length < 4" class="headerDivider-l"></span>
              </div>
              <div class="col-12 d-md-none">
                <div v-for="( product, i ) in order.products" :key="i">
                  <div class="d-flex align-items-center mb-3">
                    <img :src="product.product.imageUrl[0]" alt="" class="mr-3
                    table-img-width">
                    <div class="w-100">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-0 font-weight-bold mr-2">{{ product.product.title }}</h6>
                        <h6 class="mb-0 font-weight-bold ml-auto">X {{ product.quantity }}</h6>
                      </div>
                      <div class="d-flex">
                        <small class="mb-0 text-muted">
                          {{ product.product.price | money }} / {{ product.product.unit }}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 border-top d-md-none">
                <ul class="mb-0 border-bottom text-muted pl-0">
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pb-0 pt-3 font-weight-normal">電子郵件</p>
                    <p class="text-right border-0 px-0 pb-0 pt-3">{{ order.user.email }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 font-weight-normal">收件人姓名</p>
                    <p class="text-right border-0 px-0">{{ order.user.name }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人電話</p>
                    <p class="text-right border-0 px-0 pt-0">{{ order.user.tel }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人地址</p>
                    <p class="text-right border-0 px-0 pt-0">{{ order.user.address }}</p>
                  </li>
                </ul>
                <ul class="text-muted pl-0 mb-0">
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-3 pb-0 font-weight-normal">付款金額</p>
                    <p class="text-right border-0 px-0 pt-3 pb-0">{{ order.amount | money }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 font-weight-normal">付款方式</p>
                    <p class="text-right border-0 px-0">{{ order.payment }}</p>
                  </li>
                  <li class="d-flex justify-content-between">
                    <p scope="row" class="border-0 px-0 pt-0 font-weight-normal mb-0">付款狀態</p>
                    <p v-if="order.paid" class="text-right border-0 px-0 pt-0 mb-0 text-success
                    font-weight-bold">
                      已完成付款
                    </p>
                  </li>
                </ul>
              </div>
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
      order: {
        user: {},
        products: [],
      },
      orderId: '',
      isLoading: false,
      loadingItem: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.$bus.$emit('message:push',
            '無法取得資料！請稍後再試！',
            'danger');
          this.isLoading = false;
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.loadingItem = true;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.getOrder();
          }
          this.$bus.$emit('message:push',
            '已完成付款！',
            'success');
          this.loadingItem = false;
        })
        .catch(() => {
          this.$bus.$emit('message:push',
            '付款失敗！請再試一次！',
            'danger');
          this.loadingItem = false;
        });
    },
    backHome() {
      this.$router.push('/');
      this.$bus.$emit('message:push',
        '尚未付款！訂單已放棄，請重新下單。',
        'danger');
    },
  },
};
</script>
