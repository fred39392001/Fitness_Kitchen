<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-cover mb-0 bg-img-height-l"
    style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cTavTDhDNpEOuEtcez8MYeAFzq4gRdWnItlM26hpWQxMKGqh45uFkD30Ht1yqOBpqBHvGc9vYCevkCMMkXqfzb4v3BN9VwYggTHVEPRu03LXMMaVbvPkEhgS6DqhOMmG.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-md-5 d-none d-md-block">
            <div class="d-flex flex-column align-items-start">
              <h3 class="text-light mt-3 mt-md-0  mt-lg-3 font-size-l">您專心健身就好！</h3>
              <h2 class="text-light font-weight-bold pt-2 font-size-xl">食物的事，
                <br>就交給我們！</h2>
              <img src="img/Fitness_Kitchen_Logo_W.svg" class="mt-2 logo-h-75" alt="">
              <router-link class="btn btn-outline-light mt-4" to="/products">美味餐點</router-link>
            </div>
          </div>
          <div class="col-md-5 d-md-none mt-4">
            <div class="py-2">
              <h3 class="text-light mt-3 font-size-l text-shadow">您專心健身就好！</h3>
              <h2 class="text-light font-weight-bold pt-2 font-size-xl text-shadow">食物的事，
                <br>就交給我們！</h2>
              <img src="img/Fitness_Kitchen_Logo_W.svg" class="mt-2 logo-h-75 dark-shadow" alt="">
              <div>
                <router-link class="btn btn-outline-light mt-4 box-shadow"
                to="/products">
                美味餐點</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3 pr-0 d-none d-md-block">
          <div class="bg-cover-left bg-img-height-l-plus" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/euP5HGBmA45vXiXnxclhkhzIUhbpglwmZ9YOJYENWJD8ZXxeRmm9eaIMSSOytzhB8sBemfziLss3Ht5bshzbDZ2UFFx2cMOHu7i6SnhiszSZls5DgQ937KEt8xD1KpDm.jpg)"></div>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <div class="bg-cover-left bg-img-height-l-plus" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/87pZQLJEcgu1QG45qPspBFu4c7usY3zoBAPLhkfXU2oLstBdgYHt8Y9j1QbipVoAXcvZyKNIpCAgs6JOpO8tDRKbHgdPXJJ5HjHqiY0rmgE4lI2RFvoVv51MDuQzzgNK.jpg)"></div>
        </div>
        <div class="col-md-5 d-flex flex-column align-items-center justify-content-center">
          <h2 class="text-dark text-center font-weight-bold d-md-none d-lg-block mt-3 mt-md-0">
            關於我們<br><span class="font-RussoOne line-height-m">FITNESS KITCHEN</span></h2>
          <p>
          <h4 class="text-dark text-center font-weight-bold d-none d-md-block d-lg-none">
            關於我們<br><span class="font-RussoOne line-height-s">FITNESS KITCHEN</span></h4>
          <p>
            我們是一群喜愛健身，對健康生活充滿熱情的同好。我們樂於自己烹調平日所需的餐食，可是偶爾也想忙裡偷閒。
            所以，我們開始想像，是否可以融合便利商店的優點，提供更精緻、多元且層次更豐富的餐食給消費者，
            於是 FITNESS KITCHEN 就誕生了。
          </p>
          <p>
            當您在忙碌的工作結束後，用僅剩不多的個人時間，以健身追求另一個自我實現的同時，我們不希望您為了同等重要的飲食而
            耗費大量心力，這個時候，您只需要從冰箱拿出一份 FITNESS KITCHEN 的餐食，多元的口味及完善的營養配比，絕對能滿足您的需求。
          </p>
          <router-link class="btn btn-primary mt-3" to="/about">了解更多</router-link>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="form-row">
        <div class="col-md-8">
          <div class="bg-cover h-100 d-none d-md-block" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/R6ShRtI5iMO2Cxh12xsrFxAo5UI0vcLuBRM0f9n9551mq8UlhnavMRzM8Mymd6Hqg22EGcx1hF5Olg84iiGi3NzDQZZYyMkCUdMxumhs0Fija0l9FvQRNld3KJ4b5Rrv.jpg)"></div>
          <div class="bg-cover d-md-none bg-img-height-s" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/R6ShRtI5iMO2Cxh12xsrFxAo5UI0vcLuBRM0f9n9551mq8UlhnavMRzM8Mymd6Hqg22EGcx1hF5Olg84iiGi3NzDQZZYyMkCUdMxumhs0Fija0l9FvQRNld3KJ4b5Rrv.jpg)"></div>
        </div>
        <div class="col-md-4">
          <div class="bg-gray h-100 d-flex flex-column justify-content-center">
            <h3 class="font-weight-bold text-dark text-center pt-3 px-3 font-size-m-plus">
            優秀的主廚及團隊
            </h3>
            <p class="text-dark px-3">
              優秀的主廚，擁有藝術家的品味及美感，且兼具敏銳的感受力，這個特質將會深深影響整道料理最後呈現的風味。
            </p>
            <p class="text-dark px-3">
              我們的主廚具備豐富的實務經驗，更重視顧客的需求，而我們的理想，就是以優異的廚藝及品質，來征服顧客的味蕾。
            </p>
          </div>
        </div>
      </div>
      <div class="form-row mt-gutter-s">
        <div class="col-md-4">
          <div class="bg-cover h-100 d-none d-md-block" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1bZjAuduVLIPJTWPqJyVrwv4sAEx1PPZJIwgRTbClEfKUJZ17NdIgmDOZaaxavOrvYEdsKgcJOs0sG462OK7saoL9ACVe27TkWZ41m69xijc6IZlvl0Zgkk2R05QFvQx.jpg)"></div>
          <div class="bg-cover d-md-none bg-img-height-s" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1bZjAuduVLIPJTWPqJyVrwv4sAEx1PPZJIwgRTbClEfKUJZ17NdIgmDOZaaxavOrvYEdsKgcJOs0sG462OK7saoL9ACVe27TkWZ41m69xijc6IZlvl0Zgkk2R05QFvQx.jpg)"></div>
        </div>
        <div class="col-md-4">
          <div class="bg-primary h-100 d-flex flex-column justify-content-center">
            <h3 class="font-weight-bold text-light text-center pt-3 px-3 font-size-m-plus">
            專屬營養師
            </h3>
            <p class="text-light px-3">
              營養師在我們團隊裡佔有舉足輕重的地位，花費龐大的心力，只為了規劃出適合健身族群的餐食，在與主廚經過緊密的討論及調整，最後產出營養滿點的美味料理。
            </p>
          </div>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <div class="bg-cover h-100 d-none d-md-block" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/daAtGiIjXR7YXgsxWwDvrVKcFfCkDRMfauu7rmdDHGal7jMINQV7pAu3UTRNKsxcvO23nJ9T9pEcYaZSPdEbiHamCzdrWWymZ5imJ6erc06lYs0V9GX2WQIZ4YrQIyV5.jpg)"></div>
          <div class="bg-cover d-md-none bg-img-height-s" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/daAtGiIjXR7YXgsxWwDvrVKcFfCkDRMfauu7rmdDHGal7jMINQV7pAu3UTRNKsxcvO23nJ9T9pEcYaZSPdEbiHamCzdrWWymZ5imJ6erc06lYs0V9GX2WQIZ4YrQIyV5.jpg)"></div>
        </div>
      </div>
      <div class="form-row mt-gutter-s">
        <div class="col-md-4 d-none d-md-block">
          <div class="bg-gray h-100">
            <h3 class="font-weight-bold text-dark text-center pt-3 px-3 font-size-m-plus">
            線上飲食顧問
            </h3>
            <p class="text-dark px-3">
              為了擁有良好的體態及健康的減脂，我們知道健身與飲食控制同等重要，若您在享用我們餐食的同時，有任何疑問，歡迎您在上班時間，透過 Email 連絡我們的線上飲食顧問。
            </p>
            <p class="text-dark px-3">
              我們的顧問將提供您基礎的飲食建議，健身的基本觀念及餐食購買指南，迅速建立應有的基本概念，協助您在健身的路上，更快進入狀況，展現成效。
            </p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="bg-cover h-100 d-none d-md-block" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ZAa5tQAR0hDaMY64rcb2qbCSOKdenwdl3FYzhKsO0OFQL8FuqUfYoBtbdLIglNFGaglSNCjdM9IehzjxbpPjCA2x5wNm4P1zLMWzryFgvtSFMQPcSoI1cMTzieek5FuD.jpg)"></div>
          <div class="bg-cover d-md-none bg-img-height-s" style="background-image:url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ZAa5tQAR0hDaMY64rcb2qbCSOKdenwdl3FYzhKsO0OFQL8FuqUfYoBtbdLIglNFGaglSNCjdM9IehzjxbpPjCA2x5wNm4P1zLMWzryFgvtSFMQPcSoI1cMTzieek5FuD.jpg)"></div>
        </div>
        <div class="col-md-4 d-md-none">
          <div class="bg-gray h-100">
            <h3 class="font-weight-bold text-dark text-center pt-3 px-3 font-size-m-plus">
            線上飲食顧問
            </h3>
            <p class="text-dark px-3">
              為了擁有良好的體態及健康的減脂，我們知道健身與飲食控制同等重要，若您在享用我們餐食的同時，有任何疑問，歡迎您在上班時間，透過 Email 連絡我們的線上飲食顧問。
            </p>
            <p class="text-dark px-3">
              我們的顧問將提供您基礎的飲食建議，健身的基本觀念及餐食購買指南，迅速建立應有的基本概念，協助您在健身的路上，更快進入狀況，展現成效。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <hr class="mt-5 hr-border-width">
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="d-flex align-items-center">
            <img class="bg-cover mr-3 img-fluid customer-img" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ZqeVMx7gtGyCPMn5JN1jFnLymw4JzM4rcSO3XTtmOISxLzS0FQqDYk9P58Xenm0Irwsc7LX8ANZtC5zeWYKb4RvFcRxSj1EA8k0lvi9LQk7QHjRiCXT43g1Ie5lErDot.jpg"
            alt="">
            <div>
              <p class="mb-0 text-silver font-weight-bold font-size-s-plus">南投市 李小姐</p>
              <small>我最喜歡線上購物服務，不受地域限制，也能享受美味的料理。</small>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mt-5 mt-sm-0">
          <div class="d-flex align-items-center">
            <img class="bg-cover mr-3 img-fluid customer-img" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/MWKsMt5ZsQFxVgHyNgA7nZ8TQPpbdIJ3L8LXRlrlkeXvQIjNWdg8y68vbAa5CWx3pbyR61D0Nviy11l2PqF7duYzdF6An5nUWzGrtuqMUSEgX4Brg1uL981XxieaSBR9.jpg"
            alt="">
            <div>
              <p class="mb-0 text-silver font-weight-bold font-size-s-plus">台中市 劉先生</p>
              <small>線上顧問的服務很棒，讓我對飲食及健身有基礎認識！</small>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3  mt-5 mt-lg-0">
          <div class="d-flex align-items-center">
            <img class="bg-cover mr-3 img-fluid customer-img" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/fIviun4snkIzwIl2Vv6WaBt8zdDqUasuaLbXI0UuR4nsLDPDjfawzdWQ25ieC7YfTvA7Ae4GN1GFNKOf9RjRWCEiMfo3YAKeL0fm7gtl4GHeStI9VyAUsUxrNZutcAVx.jpg"
            alt="">
            <div>
              <p class="mb-0 text-silver font-weight-bold font-size-s-plus">台南市 陳小姐</p>
              <small>餐食十分美味，而且選擇多元，營養成分符合健身需求。</small>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mt-5 mt-lg-0">
          <div class="d-flex align-items-center">
            <img class="bg-cover mr-3 img-fluid customer-img" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ZJqa1FGqPbEOnSdnKO3GGjjsQhBtINNhgrRewxwERP9rpjdzN3DVaDrI8ocQkqpd5D293NyhVwpX8CdRnzClkS5p0aAXy4xAcMrWpiug67H85TiHFqmFocNS4MMyoj5u.jpg"
            alt="">
            <div>
              <p class="mb-0 text-silver font-weight-bold font-size-s-plus">新北市 湯瑪士</p>
              <small>臺灣很棒！發現臺灣有這樣的服務，非常開心，我愛臺灣。</small>
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
    return {};
  },
};
</script>
