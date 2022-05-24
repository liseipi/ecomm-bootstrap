<template>
  <nav class="b-header" ref="header" :class="header_pos ? 'b-header-pos' : ''">
    <div class="container">
      <div class="d-flex flex-center">
        <div class="header-logo me-2 flex-center">
          <img src="/images/b-header-img.webp" alt="">
        </div>
        <div style="flex:1;" class="mx-3">
          <ul class="d-md-flex d-none list-unstyled flex-wrap justify-content-center">
            <li class="p-2" style="cursor:pointer" v-for="(item,index) in list" :key="index">
              <div class="position-relative list-item">
                {{item}}
                <span class="bottom-line"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="d-flex align-items-center flex-nowrap icon-box">
          <span class="iconfont icon-wode me-4 d-none d-md-inline-block"></span>
          <span class="iconfont icon-sousuo me-4" data-bs-toggle="modal" data-bs-target="#exampleModal"></span>
          <!-- 搜索模态窗口 -->
          <!-- <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for
            @mdo</button> -->
          <div class="modal fade w-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog mw-100">
              <div class="modal-content w-100">
                <div class="modal-body py-2 w-100" style="height:170px;">
                  <form class="w-100 flex-center h-100">
                      <span class="iconfont icon-sousuo"></span>
                      <input type="text" class="h-100" style="flex:1;" placeholder="Search our store">
                      <span class="iconfont icon-chahao" data-bs-dismiss="modal"></span>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <span class="iconfont icon-gengduo me-4 d-inline-block d-md-none"></span>
          <span class="iconfont icon-gouwudai_o"></span>
        </div>
      </div>
    </div>

    <!-- <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div> -->
  </nav>
</template>

<script>
export default {
  name: "a-header",
  data () {
    return {
      header_pos: false,
      list: ['Home', 'Evening', 'Dresses', 'Cocktail', 'Dresses', 'Prom Dresses', 'Party Dresses', 'Clubwear Dress', 'Wedding Dresses', 'Elegant Dresses', 'Jumpsuits & Rompers', 'Sexy Dresses', 'Blazers', 'Bridal Accessories', 'Shoes', 'Accessories', 'Nipple Covers', 'Nail Art', 'New In']
    }
  },
  mounted () {
    let that = this;
    let header = document.querySelector('.b-header')
    window.addEventListener('scroll', (e) => {
      that.header_pos = header.offsetTop < document.documentElement.scrollTop
    }, true)
  }
}
</script>

<style scoped>
.b-header {
  width: 100%;
  background: #fff;
}
.b-header-pos {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.header-logo {
  flex: 0 0 110px;
}
.header-logo img {
  vertical-align: middle;
  max-width: 100%;
}

.icon-box span {
  font-size: 25px;
  cursor: pointer;
}
.icon-box,
.header-logo {
  min-height: 130px;
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
.list-item:hover .bottom-line::after {
  width: 100%;
}
.modal {
  background: rgba(255, 255, 255, 0.4);
}
.modal-body span {
  font-size: 30px;
  padding: 0 15px;
  cursor: pointer;
}
</style>
