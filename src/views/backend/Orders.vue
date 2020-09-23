<template>
  <div class="container mt-4 d-flex flex-column align-items-center">
    <Loading :active.sync="isLoading" />
    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="text-center">
          <tr>
            <th scope="col" style="min-width:200px">下單時間</th>
            <th scope="col" style="min-width:250px">購買品項</th>
            <th scope="col">付款方式</th>
            <th scope="col" style="min-width:125px">應付金額</th>
            <th scope="col" style="min-width:135px">是否付款</th>
          </tr>
        </thead>
        <tbody class="text-center" v-if="orders.length">
          <tr v-for="(item, i) in orders" :key="i + 1">
            <td scope="row" class="align-middle">{{ item.created.datetime }}</td>
            <td class="d-flex flex-column justify-content-center">
              <span class="" v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} <span class="text-muted">數量:{{ product.quantity }}
                {{ product.product.unit }}</span>
              </span>
            </td>
            <td class="align-middle">{{ item.payment }}</td>
            <td class="align-middle">{{ item.amount | money }}</td>
            <td class="align-middle">
              <div class="custom-control custom-switch">
                <input :id="item.id" v-model="item.paid" @change="changeOrderPaid(item)"
                type="checkbox" class="custom-control-input">
                <label class="custom-control-label" :for="item.id">
                <strong v-if="item.paid" class="text-success">已付款</strong>
                <span v-else class="text-muted">未付款</span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination class="mt-3" :pages="pagination" @update="getOrders" />
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: {
        user: {},
      },
      isLoading: false,
      pagination: {},
    };
  },
  components: {
    pagination,
  },
  props: ['token'],
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '訂單資料載入成功！',
            'success');
        })
        .catch(() => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '訂單資料載入失敗！請稍後再試！',
            'danger');
        });
    },
    changeOrderPaid(item) {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }
      this.$http
        .patch(url, item.id)
        .then(() => {
          this.$bus.$emit('message:push',
            '付款狀態修改成功！',
            'success');
          this.isLoading = false;
          this.getOrders();
        })
        .catch(() => {
          this.$bus.$emit('message:push',
            '付款狀態修改失敗！請再試一次！',
            'danger');
          this.isLoading = false;
        });
    },
  },
};
</script>
