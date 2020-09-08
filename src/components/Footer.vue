<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row py-4 d-flex align-items-center">
        <div class="col-lg-6 d-flex justify-content-center justify-content-lg-start">
        <p class="mb-0 text-light" style="font-family:'Arimo'">Copyright © 2020
          <span style="font-family:'Russo One'">FITNESS KITCHEN</span> All Rights Reserved.</p>
        </div>
        <div class="col-lg-6 mt-3 mt-lg-0">
        <ul class="d-flex list-unstyled mb-0 h4 align-items-center justify-content-center
        justify-content-lg-end">
            <li>
              <a href="mailto:service@FitnessKitchen.com.tw" class="text-white mr-2">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
            <li><a href="https://github.com/fred39392001" target="_blank" rel="noreferrer noopener"
            class="text-white mx-2"><i class="fab fa-github-square"></i></a></li>
            <li><router-link class="text-white ml-2 btn btn-sm btn-outline-light" to="/login">
              管理後台</router-link></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
