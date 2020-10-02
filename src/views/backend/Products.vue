<template>
  <div class="container mt-3">
  <Loading :active.sync="isLoading" />
    <div class="row justify-content-center">
      <div class="col-md-12 d-flex justify-content-end">
        <button type="button" class="btn btn-dark" @click="openModal('new')">建立新的產品</button>
      </div>
      <div class="col-md-12 my-3">
        <div class="table-responsive">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col" class="table-width-m">分類</th>
                <th scope="col" class="text-center table-width-l">產品圖</th>
                <th scope="col" class="table-width-xl">產品名稱</th>
                <th scope="col" class="table-width-s">原價</th>
                <th scope="col" class="table-width-s">售價</th>
                <th scope="col" class="table-width-s">是否上架</th>
                <th scope="col" class="table-width-m">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td scope="row" class="align-middle">{{ product.category }}</td>
                <td scope="row" class="align-middle text-center"><img :src="product.imageUrl" alt=""
                class="table-img-height-s"></td>
                <td class="align-middle">{{ product.title }}</td>
                <td class="align-middle">{{ product.origin_price | money }}</td>
                <td class="align-middle">{{ product.price | money }}</td>
                <td class="align-middle">
                  <span v-if="product.enabled" class="text-success">已上架</span>
                  <span v-else>未上架</span>
                </td>
                <td class="align-middle">
                  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-success"
                    @click="openModal('edit',product)">編輯</button>
                    <button type="button" class="btn btn-outline-danger"
                    @click="openModal('delete',product)">刪除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <pagination class="mt-3" :pages="pagination" @update="getProducts" />
    </div>
    <!-- Modal -->
    <!-- new productModal -->
    <div id="productModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
              <div class="modal-header bg-primary">
              <h5 class="modal-title text-white font-weight-bold" id="exampleModalLabel">新增產品</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <form>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-lg-4">
                      <div v-for="i in 5" :key="'img'+ i" class="form-group">
                        <label for="'img' + i">請輸入圖片網址</label>
                        <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]"
                        type="text" placeholder="請輸入圖片連結">
                      </div>
                      <div class="form-group">
                        <label for="customFile">
                        或 上傳圖片
                        <img v-if="status.fileUploading" class="h-20" src="https://www.intogif.com/resource/image/loading/spin.gif" alt="">
                        </label>
                        <input id="customFile" ref="file" type="file" class="form-control"
                        @change="uploadFile">
                      </div>
                      <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt />
                    </div>
                    <div class="col-lg-8">
                        <div class="form-row">
                          <div class="col-md-12 mb-3">
                            <label for="productTitle">產品名稱</label>
                            <input type="text" class="form-control" id="productTitle"
                            v-model="tempProduct.title"  placeholder="請輸入產品名稱">
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-6 mb-3">
                            <label for="productCategory">產品分類</label>
                            <input type="text" class="form-control" id="productCategory"
                            v-model="tempProduct.category"  placeholder="請輸入產品分類">
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="productUnit">單位</label>
                            <input id="productUnit" v-model="tempProduct.unit" type="unit"
                            class="form-control" placeholder="請輸入單位">
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-6 mb-3">
                            <label for="productOriginPrice">原價</label>
                            <input type="number" class="form-control" id="productOriginPrice"
                            v-model="tempProduct.origin_price" placeholder="請輸入原價">
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="productPrice">售價</label>
                            <input id="productPrice" v-model="tempProduct.price" type="number"
                            class="form-control" placeholder="請輸入售價">
                          </div>
                        </div>
                        <hr>
                        <div class="form-row">
                          <div class="col-md-4 mb-3">
                            <label for="productNutrients01">重量</label>
                            <input type="number" class="form-control" id="productNutrients01"
                            v-model="tempProduct.options.weight" placeholder="請輸入重量">
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="productNutrients02">熱量</label>
                            <input id="productNutrients02" v-model="tempProduct.options.calories"
                            type="number" class="form-control" placeholder="請輸入熱量">
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="productNutrients03">蛋白質</label>
                            <input type="number" class="form-control" id="productNutrients03"
                            v-model="tempProduct.options.protein" placeholder="請輸入蛋白質">
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-4 mb-3">
                            <label for="productNutrients04">脂肪</label>
                            <input id="productNutrients04" v-model="tempProduct.options.fat"
                            type="number" class="form-control" placeholder="請輸入脂肪">
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="productNutrients05">碳水化合物</label>
                            <input type="number" class="form-control" id="productNutrients05"
                            v-model="tempProduct.options.carbohydrate" placeholder="請輸入碳水化合物">
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="productNutrients06">鈉</label>
                            <input id="productNutrients06" v-model="tempProduct.options.na"
                            type="number" class="form-control" placeholder="請輸入鈉">
                          </div>
                        </div>
                        <hr>
                        <div class="form-row">
                          <div class="col-md-12 mb-3">
                              <label for="productSummary">產品摘要</label>
                              <textarea type="text" class="form-control" id="productSummary"
                              v-model="tempProduct.options.summary" placeholder="請輸入產品摘要">
                              </textarea>
                          </div>
                          <div class="col-md-12 mb-3">
                              <label for="productContent">產品說明</label>
                              <textarea type="text" class="form-control" id="productContent"
                              v-model="tempProduct.content" placeholder="請輸入產品說明">
                              </textarea>
                          </div>
                          <div class="col-md-12 mb-3">
                              <label for="productDescription">產品資訊</label>
                              <textarea type="text" class="form-control" id="productDescription"
                              v-model="tempProduct.description" placeholder="請輸入產品產品資訊">
                              </textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value=""
                            id="invalidCheck2" v-model="tempProduct.enabled">
                            <label class="form-check-label" for="invalidCheck2">
                            是否上架
                            </label>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary" @click="updateProduct">確認新增</button>
                </div>
              </form>
          </div>
        </div>
    </div>
    <!-- deleteModal -->
    <div id="deleteModal" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header bg-danger">
              <h5 class="modal-title text-white font-weight-bold" id="exampleModalLabel">刪除產品</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>是否刪除商品&nbsp;<strong class="text-danger">{{ tempProduct.title }}</strong>&nbsp;
              （注意！商品刪除則無法復原）</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
        options: {},
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      user: {
        token: '',
      },
    };
  },
  components: {
    pagination,
  },
  props: ['token'],
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
      });
    },
    openModal(isNew, product) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: [],
            options: {},
          };
          this.isNew = true;
          $('#productModal').modal('show');
          break;
        case 'edit':
          this.getProduct(product.id);
          this.isNew = false;
          break;
        case 'delete':
          this.tempProduct = { ...product };
          $('#deleteModal').modal('show');
          break;
        default:
          break;
      }
    },
    getProduct(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.tempProduct = res.data.data;
        $('#productModal').modal('show');
        this.$bus.$emit('message:push',
          '產品資料已取得！',
          'success');
      })
        .catch(() => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '無法取得資料！請稍後再試！',
            'danger');
        });
    },
    updateProduct() {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }
      const vm = this;
      this.$http[httpMethod](url, this.tempProduct)
        .then(() => {
          this.isLoading = false;
          $('#productModal').modal('hide');
          vm.getProducts();
          this.$bus.$emit('message:push',
            '產品更新成功！',
            'success');
        }).catch(() => {
          this.isLoading = false;
          this.$bus.$emit('message:push',
            '產品更新失敗！請稍後再試！',
            'danger');
        });
    },
    uploadFile() {
      this.isLoading = true;
      const uploadedfile = document.querySelector('#customFile').files[0];
      const fileInput = document.querySelector('#customFile');
      const formData = new FormData();
      formData.append('file', uploadedfile);
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/storage`;
      const vm = this;
      vm.status.fileUploading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          this.isLoading = false;
          this.status.fileUploading = false;
          if (res.status === 200) {
            vm.tempProduct.imageUrl.push(res.data.data.path);
          }
          fileInput.value = '';
          this.$bus.$emit('message:push',
            '圖片上傳成功！',
            'success');
        })
        .catch((error) => {
          this.isLoading = false;
          this.status.fileUploading = false;
          this.$bus.$emit('message:push',
            `${error.response.data.errors.file}檔案請勿超過 2MB！`,
            'danger');
        });
    },

    deleteProduct() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.$http.delete(url)
        .then(() => {
          this.isLoading = false;
          $('#deleteModal').modal('hide');
          this.getProducts();
          this.$bus.$emit('message:push',
            '刪除成功！',
            'success');
        }).catch(() => {
          this.$bus.$emit('message:push',
            '刪除失敗！請稍後再試！',
            'danger');
        });
    },
  },
};
</script>
