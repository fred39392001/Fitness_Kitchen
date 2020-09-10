<template>
  <div class="mb-5">
    <Swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide class="item" v-for="item in identical" :key="item.id">
        <div class="card h-100">
          <div class="bg-cover card-img-top" style="height: 180px; cursor: pointer"
          :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
          @click.prevent="getDetail(item.id)">
          </div>
          <div class="card-body text-center px-2 py-3">
            <h5 class="mb-0">
              <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
            </h5>
            <div class="mt-2 d-lg-flex justify-content-center align-items-center">
              <del class="text-muted mr-lg-2" style="font-size:10px">
                <small>原價：{{ item.origin_price | money }}</small>
              </del>
              <p class="text-primary mb-0" style="font-size:14px">
                售價：<strong>{{ item.price | money }}</strong>
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      products: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    product: {
      type: Object,
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data;
        });
    },
    getDetail(id) {
      this.$router.push(`/product/${id}`);
      this.$emit('update');
    },
  },
  computed: {
    identical() {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category,
      );
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
