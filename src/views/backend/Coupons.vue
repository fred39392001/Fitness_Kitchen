<template>
  <div class="container mt-3">
  <Loading :active.sync="isLoading" />
    <div class="row justify-content-center">
      <div class="col-md-12 d-flex justify-content-end">
        <button type="button" class="btn btn-dark" @click="openCouponModal('created')">
          建立新的優惠券</button>
      </div>
      <div class="col-md-12 my-3">
        <div class="table-responsive">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col" class="table-width-m">名稱</th>
                <th scope="col" class="table-width-l">折扣百分比</th>
                <th scope="col" class="table-width-xl">到期日</th>
                <th scope="col" class="table-width-s">是否啟用</th>
                <th scope="col" class="table-width-m">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(coupon, key) in coupons" :key="key">
                <td scope="row" class="align-middle">{{ coupon.title }}</td>
                <td scope="row" class="align-middle text-center">{{ coupon.percent }}</td>
                <td class="align-middle">{{ coupon.deadline.datetime }}</td>
                <td class="align-middle">
                  <span v-if="coupon.enabled" class="text-success">已啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td class="align-middle">
                  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-success"
                    @click="openCouponModal('edit',coupon)">編輯</button>
                    <button type="button" class="btn btn-outline-danger"
                    @click="openCouponModal('delete',coupon)">刪除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <!-- new couponModal -->
    <div id="couponModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
              <div class="modal-header bg-primary">
              <h5 class="modal-title text-white font-weight-bold" id="exampleModalLabel">建立優惠券</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <form>
                <div class="modal-body">
                  <div class="form-row">
                    <div class="col-md-12 mb-3">
                      <label for="couponTitle">標題</label>
                      <input type="text" class="form-control" id="couponTitle"
                      v-model="tempCoupon.title"  placeholder="請輸入優惠券標題">
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="couponCode">優惠碼</label>
                      <input type="text" class="form-control" id="couponCode"
                      v-model="tempCoupon.code" placeholder="請輸入優惠碼">
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="couponDueDate">到期日</label>
                      <input type="date" class="form-control" id="couponDueDate"
                      v-model="due_date">
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="couponDueTime">到期時間</label>
                      <input type="time" step="1" class="form-control" id="couponDueTime"
                      v-model="due_time">
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="couponPercent">折扣百分比</label>
                      <input type="number" class="form-control" id="couponPercent"
                      v-model="tempCoupon.percent"  placeholder="請輸入折扣百分比">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value=""
                      id="invalidCheck2" v-model="tempCoupon.enabled">
                      <label class="form-check-label" for="invalidCheck2">
                      是否啟用
                      </label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary"  @click="updateCoupon">
                    {{ status === 'created' ? '新增優惠卷' : '更新優惠券' }}</button>
                </div>
              </form>
          </div>
        </div>
    </div>
    <!-- deleteModal -->
    <div id="delCouponModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header bg-danger">
              <h5 class="modal-title text-white font-weight-bold" id="exampleModalLabel">刪除優惠券</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>是否刪除優惠券&nbsp;<strong class="text-danger">{{ tempCoupon.title }}</strong>&nbsp;
              （注意！優惠券刪除後，將無法復原！）</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="deleteCoupon">確認刪除</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        enabled: false,
        percent: 100,
        deadline_at: 0,
        code: '',
      },
      due_date: '',
      due_time: '',
      status: '',
      isLoading: false,
    };
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupons`;
      this.$http.get(url)
        .then((res) => {
          this.coupons = res.data.data;
          this.isLoading = false;
        });
    },
    openCouponModal(couponStatus, coupon) {
      this.status = couponStatus;
      switch (couponStatus) {
        case 'created':
          this.tempCoupon = {};
          $('#couponModal').modal('show');
          break;
        case 'edit': {
          this.tempCoupon = { ...coupon };
          const deadlineAt = this.tempCoupon.deadline.datetime.split('');
          [this.due_date, this.due_time] = deadlineAt;
          $('#couponModal').modal('show');
          break;
        }
        case 'delete':
          this.tempCoupon = { ...coupon };
          $('#delCouponModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateCoupon() {
      this.isLoading = true;
      let httpMethod = '';
      let statusMsg = '';
      let url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      if (this.status === 'created') {
        httpMethod = 'post';
        statusMsg = '新增';
      } else {
        url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
        httpMethod = 'patch';
        statusMsg = '修改';
      }
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`;
      this.$http[httpMethod](url, this.tempCoupon)
        .then(() => {
          $('#couponModal').modal('hide');
          this.$bus.$emit('message:push',
            `優惠券${statusMsg}成功！`,
            'success');
          this.getCoupons();
        }).catch(() => {
          this.$bus.$emit('message:push',
            `優惠券${statusMsg}失敗！請稍後再試！`,
            'danger');
          this.isLoading = false;
        });
    },
    deleteCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          $('#delCouponModal').modal('hide');
          this.getCoupons();
          this.$bus.$emit('message:push',
            '刪除成功！',
            'success');
        }).catch(() => {
          this.$bus.$emit('message:push',
            '刪除失敗！請稍後再試！',
            'danger');
          this.isLoading = false;
        });
    },
  },
};
</script>
