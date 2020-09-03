<template>
  <div>
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
          <div class="col-md-6">
            <div class="bg-light">
              <div class="d-flex">
                <h4 class="text-dark mb-0 font-weight-bold">訂單完成</h4>
              </div>
              <hr class="border-dark" style="border-width:1.5px">
              <p>
                感謝您的購買！<br>您的訂單， 將在 1 ~ 3 個工作天內出貨！
              </p>
            </div>
            <img class="img-fluid" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XFsNBRYyHjMUY5h4K5HRSIVfW93b3jhcmYFm8SLrgOvf9FA4dphwFwYTb4e7hN9hUdD3M0CJvwoROmbZqwbc8y6H1epIqNe9uzMOUp0aLgst9h4ijvb1HT2QppKrNUNY.jpg" alt="">
            <router-link to="/products" class="btn btn-outline-dark mt-3">
            繼續選購
            </router-link>
          </div>
          <div class="col-md-6">
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
                    <th scope="row" class="border-0 px-0 pt-4 pb-0 font-weight-normal">電子郵件</th>
                    <td class="text-right border-0 px-0 pt-4 pb-0">abc@mail.com</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">收件人姓名</th>
                    <td class="text-right border-0 px-0">ABC</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人電話</th>
                    <td class="text-right border-0 px-0 pt-0">0912345678</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">收件人地址</th>
                    <td class="text-right border-0 px-0 pt-0">XX縣XX鎮XX路一段XX號</td>
                  </tr>
                </tbody>
              </table>
              <table class="table mt-4 text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 pb-0 font-weight-normal">付款金額</th>
                    <td class="text-right border-0 px-0 pt-4 pb-0">NT.1,527</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">付款方式</th>
                    <td class="text-right border-0 px-0">信用卡</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款狀態</th>
                    <td class="text-right border-0 px-0 pt-0 text-success font-weight-bold">
                      付款完成</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
