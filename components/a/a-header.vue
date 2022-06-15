<template>
  <nav class="a-header" ref="header" :class="header_pos ? 'a-header-pos' : ''">
    <div>
      <div class="container a-md-header d-flex d-lg-none justify-content-between align-items-center">
        <a class="md-a-header-logo" href="#"><img src="../../static/images/a-header-logo.webp" alt=""></a>
        <div class="a-md-icon-box">
          <span class="iconfont icon-gouwuche me-3"></span>
          <span class="iconfont icon-gengduo"></span>
        </div>
      </div>
      <div class="header-border">
        <div class="container d-flex align-items-center" style="flex:1;">
          <div class="left d-flex align-items-center w-100">
            <span v-show="header_pos" @click="showBar" class="iconfont icon-gengduo icon-more animate__animated animate__bounceInLeft"></span>
            <a class="a-header-logo d-none d-lg-inline-block" href="#"><img src="../../static/images/a-header-logo.webp"
                alt=""></a>
            <div style="flex:1;">
              <div class="a-header-input-box d-flex w-100">
                <div class="rounded-pill border flex-center my-3 my-md-0" style="flex:1;">
                  <input @focus="clear_show = !clear_show" @blur="clear_show = !clear_show" class="a-header-input"
                    type="text" placeholder="Search...">
                  <span class="iconfont icon-sousuo position-relative "
                    style="left: -10px;font-size: 26px;cursor: pointer;"></span>
                </div>
                <span v-show="clear_show" class="iconfont icon-more ms-3 animate__animated animate__fadeIn" style="font-size: 25px;"></span>
              </div>
            </div>
          </div>
          <div class="right align-items-center d-none d-lg-flex" style="margin-left: 40px;">
            <div class="me-5 dropdown justify-content-center align-items-center">
              <span class="dropdown-toggle" href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                English
              </span>
              <ul class="dropdown-menu bottom-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="d-none d-lg-inline-flex me-5 dropdown justify-content-center align-items-center">
              <img class="USD-icon" src="../../static//images/icon-USD.png" alt="">
              <span class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-ds-toggle="dropdown"
                aria-expanded="false">
                USD
              </span>
              <ul class="dropdown-menu bottom-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="d-none d-lg-inline-flex me-5 dropdown justify-content-center align-items-center">
              <span class="a-header-icon iconfont icon-wode me-3"></span>
              <span>ACCOUNT</span>
            </div>
            <div class="d-none d-lg-inline-flex dropdown justify-content-center align-items-center">
              <span class="a-header-icon iconfont icon-gouwuche me-3"></span>
              <span>CART</span>
            </div>
          </div>
        </div>

      </div>

      <!-- bar -->
      <div class="container" v-show="bar_show">
        <ul class=" list-unstyled mb-0 d-none d-lg-flex">
          <li class="mx-3 position-relative dropdown" v-for="(item,index) in list" :key="index">
            <span class="py-3 d-inline-block" href="#" :id="'dropdownMenuButton'+index" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">{{item}}</span>
            <span class="under_line"></span>
            <ul class="dropdown-menu bottom-menu" :aria-labelledby="'dropdownMenuButton'+index">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>

  </nav>
</template>

<script>
export default {
  name: "a-header",
  data () {
    return {
      clear_show: false,
      bar_show: true,
      header_pos: false,
      list: ['HOME', 'NEW IN', 'TYPE', 'OCCASION', 'COLOR', 'FABRIC', 'ACCESSORIES', 'DELIVERY TIME']

    }
  },
  methods: {
    clickup (e) {
      this.clear_show = !this.clear_show
    },
    showBar () {
      this.bar_show = !this.bar_show
    }
  },
  mounted () {
    let that = this;
    let header = document.querySelector('.a-header')
    window.addEventListener('scroll', (e) => {
      that.header_pos = header.offsetTop < document.documentElement.scrollTop;
    }, true)
  },
  watch: {
    header_pos: {
      handler (newvalue) {
        this.bar_show = !newvalue
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/a.scss";

.a-header {
  width: 100%;
  color: black;
  background: #fff;
}
.a-header-pos {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
}
.a-header-logo {
  width: 150px;
  margin-right: 60px;
}
.a-header-logo img {
  width: 100%;
  height: auto;
}
.a-md-header {
  color: $a-base-color;
}
.a-md-icon-box span {
  font-size: 24px;
}
.md-a-header-logo {
  width: 100px;
}
.md-a-header-logo img {
  width: 100%;
  height: auto;
}
.header-border {
  border: none;
}
.icon-more {
  color: $a-base-color;
  font-size: 24px;
  margin-right: 20px;
  transition: all 0.5s linear;
  display: none;
}
.USD-icon {
  max-width: 30px;
  margin-right: 10px;
}
.right {
  font-size: 14px;
  color: $a-base-color;
}
a-header-input-box {
  transition: all 1s;
}
.a-header-icon {
  font-size: 25px;
}

.a-header-input {
  border: none;
  height: 30px;
  margin: 0 10px;
  font-size: 14px;
  width: 90%;
}
input {
  outline: none;
}

ul {
  font-size: 14px;
  color: $a-base-color;
}
ul li {
  cursor: pointer;
}
ul li:hover .under_line {
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: black;
  left: 0;
  bottom: 0;
}

@media (min-width: 992px) {
  .mw-lg-460 {
    max-width: 460px !important;
  }
  .header-border {
    border-top: 1px solid rgba(228, 228, 231, 1);
    border-bottom: 1px solid rgba(228, 228, 231, 1);
  }
  .icon-more {
    display: inline-block;
  }
  .a-header-input-box {
    max-width: 75%;
  }
}
</style>
