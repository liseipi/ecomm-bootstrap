<template>
  <div class="footer">
    <footer class="container footer">
      <div class="row">
        <div class="left col-12 col-lg-6 d-flex justify-content-center text-center d-lg-block text-lg-start">
          <div class="left-box w-100">
            <h3 style="font-size:16px;">Sign up now & get a $3 cash coupon </h3>
            <p class="my-3">Welcome to follow us</p>
            <div class="p-2 left-input-box d-flex">
              <input class="left-input" type="text" placeholder="Email">
              <button class="fw-bold">Sign up</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 right mt-4 mt-lg-0">
          <div class="row">
            <!-- help -->
            <!-- pc -->
            <div class="col-lg-4 col-12 mt-4 mt-lg-0 d-none d-lg-block">
              <h5 class="mb-3" style="font-size: 16px;letter-spacing: 5px;">HELP</h5>
              <ul>
                <li class="mb-3" v-for="(item, index) in help_list" :key="index">
                  <a href="#">
                    {{item}}
                  </a>
                </li>
              </ul>
            </div>
            <!-- pc -->

            <!-- mobile -->
            <div class="accordion accordion-flush d-block d-lg-none" id="accordionFlushExample">
                <div  class="accordion-item">
                  <h2 class="accordion-header" id="help-headingOne">
                    <button class="accordion-button collapsed p-0 fw-bold" style="letter-spacing: 3px;font-size:14px;" type="button" data-bs-toggle="collapse"
                      data-bs-target="#help-collapseOne" aria-expanded="false" aria-controls="help-collapseOne">
                      HELP
                    </button>
                  </h2>
                  <div id="help-collapseOne" class="accordion-collapse collapse" aria-labelledby="help-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-0">
                      <li class="pt-3" v-for="(item,index) in help_list" :key="index">
                        {{item}}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            <!-- mobile -->
            <!-- help -->

            <!-- touch -->
            <div class="col-lg-4 col-12 mt-4 mt-lg-0">
              <div class=" justify-content-between d-none d-lg-block" @click="showTouch">
                <h5 class="mb-3" style="font-size: 16px;font-size:14px;">Get in touch </h5>
                <span class="d-lg-none">
                  <svg class="touch_svg" :style="touch_show ?'transform: rotate(0deg);':''"
                    xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12">
                    <polygon
                      points="9.64644661 3.64644661 10.3535534 4.35355339 6 8.70710678 1.64644661 4.35355339 2.35355339 3.64644661 6 7.293"
                      fill="currentColor"></polygon>
                  </svg>
                </span>
                <!-- pc -->
                <ul class="d-none d-lg-block">
                  <li class="mb-3" v-for="(item, index) in touch_list" :key="index">
                    <a href="#">
                      {{item}}
                    </a>
                  </li>
                </ul>
              <!-- pc -->
              </div>

              <!-- mobile -->
              <div class="accordion accordion-flush d-block d-lg-none" id="accordionFlushExample">
                <div  class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed p-0 fw-bold" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Get in touch
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body px-0">
                      <li v-for="(item,index) in touch_list" :key="index">
                        {{item}}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <!-- mobile -->

              <!-- touch -->

            </div>

            <div class="col-lg-4 col-12 mt-2 mt-lg-0 d-none d-lg-block">
              <div class="d-inline-block me-5 dropdown justify-content-center align-items-center">
                <span class="dropdown-toggle" href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  English
                </span>
                <ul class="dropdown-menu bottom-menu" style="top:100%;" aria-labelledby="dropdownMenuButton1">
                  <li v-for="(item,index) in lan_list" :key="index"><a class="dropdown-item border-bottom pt-3 pb-3"
                      href="#">{{item}}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      touch_show: false,
      help_list: [
        'DELIVERY ', 'CONTACT US ', 'ABOUT US ', 'RETURN & EXCHANGE ', 'TERMS & CONDITIONS ', 'PAYMENT METHODS ', 'COVID-19 DELIVERY & SAFETY UPDATES ', 'ABOUT "PRE-ORDER" ITEMS', 'FAQs', 'PRIVACY POLICY '
      ],
      touch_list: [
        'service@bitylong.com'
      ],
      lan_list: ['English', 'Português', 'العربية', 'Русский']
    }
  },
  methods: {
    showTouch () {
      this.touch_show = !this.touch_show
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  font-family: Karla, sans-serif;
  font-style: normal;
  font-weight: 400;
  padding-top: 50px;
  padding-bottom: 50px;
  .left {
    .left-input-box {
      border: 1px solid rgba(74, 144, 226, 1);
      .left-input {
        flex: 1;
      }
    }
  }
  .right {
     font-size: 14px;  
  }
}

.touch_svg {
  transform: rotate(-90deg);
}

.touch-list {
  height: 0;
  overflow: hidden;
  transition: height 1s;
  &.active {
    height: auto;
    transition: height 1s;
  }
}


.accordion-button:not(.collapsed) {
  background-color: #fff;
  color: black;
}

.accordion-button:focus {
  border: none;
  box-shadow: none;
}

@media (min-width: 992px) {
  .left-box {
    width: 70% !important;
  }
  .right {
    font-size: 16px;  
  }
}
</style>