<template>
  <div class="c-header"  ref="header" :class="header_pos ? 'c-header-pos' : ''">
    <nav class="container">
      <div class="row">
        <div class="col-4">
          <div class="d-lg-none d-block">
            <span class="header-icon iconfont icon-gengduo me-2"></span>
            <span class="header-icon iconfont icon-sousuo"></span>
          </div>
        </div>
        <div class="col-4 flex-center text-center header-logo-lg d-lg-flex d-none">
          <img src="../../static/images/a-header-img.webp" alt="">
        </div>
        <div class="col-4 flex-center align-items-center  text-center header-logo-md d-flex d-lg-none">
          <img src="../../static/images/a-header-img.webp" alt="">
        </div>
        <div class="col-4 d-flex justify-content-center justify-content-lg-start">
          <span class="d-none d-lg-inline-block header-icon iconfont icon-sousuo me-4"></span>
          <span class="d-none d-lg-inline-block header-icon iconfont icon-wode me-4"></span>
          <span class="header-icon iconfont icon-gouwuche"></span>
          <div class="d-none d-lg-inline-flex ms-5 dropdown justify-content-center align-items-center">
            <img class="USD-icon" src="../../static//images/icon-USD.png" alt="">
            <span class="dropdown-toggle" href="#" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              USD
            </span>
            <ul class="dropdown-menu bottom-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="container d-none d-md-block">
      <ul class="d-flex flex-wrap list-unstyled fire-list mb-0">
        <li class="py-3 px-4 position-relative">
          <div>
            HOME
            <span class="bottom-line"></span>
          </div>
          <span class="fire">🔥🔥🔥</span>
        </li>
        <li class="py-3 px-4 position-relative">
          <div>
            Special Promotions
            <span class="bottom-line"></span>
          </div>
          <span class="fire sale">40-60%OFF</span>
        </li>
        <li class="py-3 px-4 position-relative">
          <div>
            HOT SALE
            <span class="bottom-line"></span>
          </div>
          <span class="fire">🔥🔥🔥</span>
        </li>
        <li class="py-3 px-4">
          <div>
            NEW IN
            <span class="bottom-line"></span>
          </div>
        </li>
        <li class="py-3 px-4 position-relative">
          <div>
            MEN CLOTHING
            <span class="bottom-line"></span>
          </div>
          <span class="fire">🔥🔥🔥</span>
        </li>
        <li class="py-3 px-4 position-relative">
          <div>
            MEN
            <span class="bottom-line"></span>
          </div>
          <span class="fire">🔥</span>
        </li>
        <li class="py-3 px-4 position-relative">
          <div>
            CUSTOM
            <span class="bottom-line"></span>
          </div>
          <span class="fire">🔥🔥</span>
        </li>
        <li class="py-3 px-4">
          <div>
            WOMEN
            <span class="bottom-line"></span>
          </div>
        </li>
        <li class="py-3 px-4">
          <div>
            ACCESSORIES
            <span class="bottom-line"></span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      header_pos: false,
    }
  },
  mounted() {
    let that = this;
    let header = document.querySelector('.c-header')
    window.addEventListener('scroll', (e) => {
      that.header_pos = header.offsetTop < document.documentElement.scrollTop 
    }, true)
  }
}
</script>

<style scoped>
.c-header {
  width: 100%;
  background: #fff;
}
.c-header-pos {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.bottom-menu {
  bottom: 0;
  right: 0;
  transform: translateY(100%);
}
.flex-center {
  display: flex;
  align-content: center;
  justify-content: center;
}
.header-logo-lg img {
  max-width: 200px;
  max-height: 50px;
}
.header-logo-md img {
  max-width: 140px;
}
.header-icon {
  font-size: 30px;
}
.USD-icon {
  max-width: 40px;
  margin-right: 10px;
}
.fire {
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  top: 0;
  right: 10px;
}
.sale {
  background-color: #e62405;
  color: #ffffff;
  border-radius: 2px;
  padding: 1px 2px;
}
.fire-list li div {
  cursor: pointer;
  position: relative;
}
.bottom-line::after {
  content: "";
  position: absolute;
  bottom: 0;
  transition: all 0.3s linear;
  height: 1px;
  left: 0;
  width: 0;
  background-color: black;
}
.fire-list li div:hover .bottom-line::after {
  width: 100%;
}
</style>