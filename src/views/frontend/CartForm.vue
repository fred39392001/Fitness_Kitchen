<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/a6TY8mfch9Hh7XZVgzUmGJ9xaMhOxGhk4dReMSwMJ6QhCWJonnqmEH4s5gvwHMvaOrHx0PNcf5iNPbf2Yorjt3qhuxo6EEIxFZhcjMSL5YWLDxDoq2al2YHSVHtQ0JP8.jpg);
    height: 250px">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start">
              <h1 class="text-light font-weight-bold pt-2" style="font-size:50px">食指大動，
                <br>宅配到府！</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light my-5">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse">
          <div class="col-md-8">
            <div class="bg-light">
              <div class="d-flex justify-content-center">
                <h4 class="text-dark mb-0 font-weight-bold">1.訂購人資訊</h4>
              </div>
              <hr class="border-dark" style="border-width:1.5px">
              <form>
                <div class="form-group">
                  <label for="ContactMail" class="text-muted mb-0">電子郵件</label>
                  <input type="email" class="form-control rounded-0" id="ContactMail"
                  aria-describedby="emailHelp" placeholder="請輸入電子郵件地址">
                </div>
                <div class="form-group">
                  <label for="ContactName" class="text-muted mb-0">姓名</label>
                  <input type="text" class="form-control rounded-0" id="ContactName"
                  placeholder="請輸入姓名">
                </div>
                <div class="form-group">
                  <label for="ContactPhone" class="text-muted mb-0">電話</label>
                  <input type="text" class="form-control rounded-0" id="ContactPhone"
                  placeholder="請輸入電話">
                </div>
              </form>
            </div>
            <div class="bg-light mt-4">
              <div class="d-flex justify-content-center">
                <h4 class="text-dark mb-0 font-weight-bold">2.收件人資訊</h4>
              </div>
              <hr class="border-dark" style="border-width:1.5px">
              <form>
                <div class="form-group">
                  <label for="Address" class="text-muted mb-0">收件人地址</label>
                  <input type="text" class="form-control rounded-0" id="Address"
                  aria-describedby="AddressHelp" placeholder="請輸入收件人地址">
                </div>
                <div class="form-group">
                  <label for="Payment">付款方式</label>
                  <select class="form-control" id="Payment">
                    <option selected disabled value="">請選擇付款方式</option>
                    <option>WebATM</option>
                    <option>ATM</option>
                    <option>信用卡</option>
                    <option>ApplePay</option>
                    <option>GooglePay</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="Textarea">其他需求</label>
                  <textarea class="form-control" id="Textarea" rows="5"
                  placeholder="若有其他需求，請留言告訴我們">
                  </textarea>
                </div>
              </form>
            </div>

            <div class="row d-flex justify-content-between mt-5">
              <div class="col-md-3">
                <router-link to="/cart" class="btn btn-outline-dark btn-block">
                上一步
                </router-link>
              </div>
              <div class="col-md-3 mt-3 mt-md-0">
                <router-link class="btn btn-outline-primary btn-block"
                to="/cart-check">
                下一步
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="font-weight-bold">訂單明細</h4>
              <div class="d-flex">
                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/D87wPpwGyQtMdOE5i6N2Ap01Z48byt85Wqy7uPQtt27k6z9F36zvI4AkYSPY2RmE8Dm9dCBFPr4CJ2WS3gWr6C0CDGE27Xub0D9dVR3n0OqCoAPB9iMNWZ0SgfHVKlxz.jpg" alt="" class="mr-2" style="height: 48px">
                <div class="w-100">
                  <div class="d-flex justify-content-between font-weight-bold">
                    <p class="mb-0">豪邁嫩肩牛排</p>
                    <p class="mb-0">X 1</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-muted mb-0"><small>NT.399</small></p>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-3">
                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dubrULYOnN1L24rJynJ4XPID2IlZaDSzlaShqtgvpsEwaAR5nMPR16EfXCUFrOqISOEjhfxyMylZYm8kPKdeoK5lsRHGRTWjXiA92DEgTUfMhEFFTvnxgZufYdJtwtmN.jpg" alt="" class="mr-2" style="height: 48px">
                <div class="w-100">
                  <div class="d-flex justify-content-between font-weight-bold">
                    <p class="mb-0">國產火烤豬肋排</p>
                    <p class="mb-0">X 1</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-muted mb-0"><small>NT.699</small></p>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-3">
                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/YIqTqexdvTuK3DxhL8uL2MTHSFywjZlh1hWr4VXZrLDEOTUBQMAprVuwl1Z9XctGZETiBnIaCztIWOvPHRWFe2peuFHP5JXDMaf2lWbx5Fja9mSJqb7DCI63Fv6hLYl6.jpg" alt="" class="mr-2" style="height: 48px">
                <div class="w-100">
                  <div class="d-flex justify-content-between font-weight-bold">
                    <p class="mb-0">頂級鮮切霜降牛排</p>
                    <p class="mb-0">X 1</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-muted mb-0"><small>NT.199</small></p>
                  </div>
                </div>
              </div>
              <table class="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pb-0 pt-4 font-weight-normal">小計</th>
                    <td class="text-right border-0 px-0 pb-0 pt-4">NT.1,297</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">運費</th>
                    <td class="text-right border-0 px-0">NT.230</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                    <td class="text-right border-0 px-0 pt-0 pb-4">信用卡</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">總金額</p>
                <p class="mb-0 h4 font-weight-bold">NT.1,527</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
