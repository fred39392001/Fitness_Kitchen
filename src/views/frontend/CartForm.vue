<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a6TY8mfch9Hh7XZVgzUmGJ9xaMhOxGhk4dReMSwMJ6QhCWJonnqmEH4s5gvwHMvaOrHx0PNcf5iNPbf2Yorjt3qhuxo6EEIxFZhcjMSL5YWLDxDoq2al2YHSVHtQ0JP8.jpg);
    height: 200px">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start mt-minus-m">
              <h1 class="text-light font-weight-bold" style="font-size:50px">食指大動，
                <br>宅配到府！</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light my-5">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse">
          <div class="col-md-7">
            <div class="bg-light">
              <div class="d-flex justify-content-center">
                <h4 class="text-dark mb-0 font-weight-bold">訂購人資訊</h4>
              </div>
              <hr class="border-dark" style="border-width:1.5px">
              <validation-observer v-slot="{ invalid }">
                <form @submit.prevent="createOrder">
                  <div class="form-group">
                    <validation-provider rules="required|email"
                    v-slot="{ errors, classes, passed }">
                      <label for="email" class="mb-2"> <span class="text-danger">*</span>
                      電子郵件</label>
                      <input type="email" class="form-control" id="email" name="Email"
                      v-model.trim=" form.email" :class="classes" placeholder="請輸入 Email">
                      <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
                      <span v-if="passed" class="valid-feedback">Email 輸入正確</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                      <label for="name" class="mb-2"><span class="text-danger">*</span>
                      收件人姓名</label>
                      <input type="name" class="form-control rounded-0" id="name" name="收件人姓名"
                      v-model.trim="form.name" :class="classes" placeholder="請輸入收件人姓名">
                      <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
                      <span v-if="passed" class="valid-feedback">姓名輸入正確</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required|min:8"
                    v-slot="{ errors, classes, passed }">
                      <label for="tel" class="mb-2"> <span class="text-danger">*</span>
                      收件人電話</label>
                      <input type="tel" class="form-control rounded-0" id="tel" name="收件人電話"
                      v-model.trim="form.tel" :class="classes" placeholder="請輸入收件人電話">
                      <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
                      <span v-if="passed" class="valid-feedback">電話輸入正確</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                      <label for="address" class="mb-2"><span class="text-danger">*</span>
                      收件人地址</label>
                      <input type="text" class="form-control rounded-0" id="address" name="收件人地址"
                      v-model.trim="form.address" :class="classes" placeholder="請輸入收件人地址">
                      <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
                      <span v-if="passed" class="valid-feedback">地址輸入正確</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{ errors, classes, passed }">
                      <label for="payment"><span class="text-danger">*</span>付款方式</label>
                      <select class="form-control" id="payment" name="付款方式"
                      v-model.trim="form.payment" :class="classes">
                        <option selected disabled value="">請選擇付款方式</option>
                        <option value="WebATM">WebATM</option>
                        <option value="ATM">ATM</option>
                        <option value="CVS">CVS</option>
                        <option value="Barcode">Barcode</option>
                        <option value="Credit">Credit</option>
                        <option value="ApplePay">ApplePay</option>
                        <option value="GooglePay">GooglePay</option>
                      </select>
                      <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
                      <span v-if="passed" class="valid-feedback">已選擇付款方式</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <label for="message">其他需求</label>
                    <textarea class="form-control" id="message" rows="5"
                    v-model.trim="form.message" placeholder="若有其他需求，請留言告訴我們">
                    </textarea>
                  </div>
                  <div class="row d-flex justify-content-between mt-5">
                    <div class="col-md-4">
                      <router-link to="/cart" class="btn btn-outline-dark btn-block">
                      上一步
                      </router-link>
                    </div>
                    <div class="col-md-4 mt-3 mt-md-0">
                      <button class="btn btn-outline-primary btn-block d-flex align-items-center
                      justify-content-center" :disabled="invalid"
                      :class="{ disabled: loadingItem }">
                      下一步
                    <i class="ml-2 spinner-grow spinner-grow-sm"
                      v-if="loadingItem">
                    </i>
                      </button>
                    </div>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
          <div class="col-md-5">
            <div class="border p-4">
              <h4 class="font-weight-bold mb-3">訂單明細</h4>
              <div v-for="item in carts" :key="item.product.id + 1">
                <div class="d-flex mb-3">
                  <img :src="item.product.imageUrl[0]" alt="" class="mr-2"
                  style="width: 60px; object-fit: cover">
                  <div class="w-100">
                    <div class="d-flex justify-content-between font-weight-bold">
                      <p class="mb-0">{{ item.product.title }}</p>
                      <p class="mb-0">X {{ item.quantity }}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                      <small class="mb-0 text-muted">
                        {{ item.product.price | money }} / {{ item.product.unit }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <table class="table my-3 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">小計</th>
                    <td class="text-right border-0 px-0"> {{ cartTotal | money }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between">
                <p class="mb-0 h4 font-weight-bold">總金額</p>
                <p class="mb-0 h4 font-weight-bold">{{ cartTotal | money }}</p>
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
      carts: [],
      cartTotal: 0,
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      isLoading: false,
      loadingItem: false,
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.updateToTalPrice();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    updateToTalPrice() {
      let total = 0;
      this.carts.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      this.cartTotal = total;
    },
    createOrder() {
      this.loadingItem = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      this.$http.post(url, order)
        .then((res) => {
          this.$bus.$emit('get-cart');
          this.$router.push(`/cart-check/${res.data.data.id}`);
          this.getCart();
          this.loadingItem = '';
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '訂單已送出!',
            'success');
        }).catch(() => {
          this.loadingItem = '';
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '訂單送出失敗!請再試一次！',
            'danger');
        });
    },
  },
};
</script>
