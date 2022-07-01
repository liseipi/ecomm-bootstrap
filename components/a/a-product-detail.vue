<template>
  <div class="container">
    <div class="d-flex p-4 justify-content-between">
      <div style="width:45%">
        <div id="carouselExampleCaptions" ref="swiper" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item img-box position-relative" :class="index == 0 ? 'active':''"
              v-for="(item,index) in swiper_img" :key="index">
              <img :src="`/images/${item}`" class="d-block position-absolute" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="position-relative mt-2 w-100">
          <ul class="img-select-list d-flex flex-center">
            <li @click="getImg(index)" v-for="(item,index) in swiper_img" :key="index"
              :class="index == swiper_index ? 'li-active':''">
              <img :src="`/images/${item}`" alt="...">
            </li>
          </ul>
          <div @click="next" class="do-icon position-absolute flex-center" style="right:0;top:50%;padding-right: 5px;">
            <span class="iconfont icon-gengduo1"></span>
          </div>
          <div @click="prev" class="do-icon position-absolute flex-center" style="left:0;top:50%;padding-left: 5px;">
            <span class="iconfont icon-zuo"></span>
          </div>
        </div>

      </div>

      <div style="width:50%">
        <div>
          <h3 class="fw-normal">Pigeon Print Men's Loose Basketball Outdoor Summer Shorts</h3>
          <div class="mb-4 mt-4" style="color:rgba(172, 16, 31, 1); font-size:25px;">
            <span>$54.99</span>
          </div>

          <div class="pt-3 mb-2">
            <span>color</span>
            <ul class="d-flex mt-2">
              <li v-for="(item, index) in color_list" :key="index" class="position-relative me-2">
                <div @click="handlerColor(index)" class="select-li"
                  :style="index == color_index ? 'border:2px solid #000;':''">
                  {{item}}
                </div>
                <div class="select-active" v-if="index == color_index">
                  <span class="iconfont icon-selected"></span>
                </div>
              </li>
            </ul>
          </div>

          <div class="mb-2">
            <div class="d-flex justify-content-between mb-2">
              <span class="">size</span>
              <span style="text-decoration: underline;">Size Guide</span>
            </div>
            <ul class="d-flex mt-2">
              <li v-for="(item, index) in size_list" :key="index" class="position-relative me-2">
                <div @click="handlerSize(index)" class="select-li"
                  :style="index == size_index ? 'border:2px solid #000;':''">
                  {{item}}
                </div>
                <div class="select-active" v-if="index == size_index">
                  <span class="iconfont icon-selected"></span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <span>Qty</span>
            <div class="mt-2 d-flex num-box">
              <div class="flex-center" :class="num == 1 ? 'no-do':''" @click="num_sub">
                <span class="iconfont icon-jianhao"></span>
              </div>
              <div class="ms-2 me-2 ps-3 pe-3 flex-center" style="width:auto;">
                {{num}}
              </div>
              <div class="flex-center" @click="num_add">
                <span class="iconfont icon-jiahao1"></span>
              </div>
            </div>
          </div>

          <div class="mt-4 w-75">
            <div class="buy-btn d-flex justify-content-between">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal"
                class="flex-center pt-3 pb-3 border border-dark fw-bold" style="width:48%;font-size:14px;">
                Add to Cart
              </div>
              <div class="flex-center pt-3 pb-3 border border-dark fw-bold bg-dark"
                style="color:white;width:48%;font-size:14px;">
                Buy Now
              </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                    <span class="iconfont icon-chahao cur-poi flex-center" style="width:30px;height:30px;font-size:25px" data-bs-dismiss="modal" aria-label="Close"></span>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button class="" data-bs-dismiss="modal">Close</button>
                    <button class="">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="pt-3 pb-3 flex-center rounded fw-bold mt-4 cur-poi" style="background-color:#ffc439;">PayPel
              </div>
            </div>

            <div>
              <img class="w-100" src="/images/a-product-us.webp" alt="">
              <div class="d-flex mt-4">
                <div style="flex:1;" class="flex-center">
                  <span class="iconfont icon-facebook me-3"></span>
                  <span>Share</span>
                </div>
                <div style="flex:1;" class="flex-center">
                  <span class="iconfont icon-twitter me-3"></span>
                  <span>Tiwitter</span>
                </div>
                <div style="flex:1;" class="flex-center">
                  <span class="iconfont icon-linkedin me-3"></span>
                  <span>Pint in</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle'


let that, myswiper
export default {
  props: {
    product_data: {},
    new_data: {}
  },
  // 定义属性
  data () {
    return {
      swiper: null,
      name: '',
      price: '',
      swiper_index: 0,
      color_index: 0,
      size_index: 0,
      swiper_img: [],
      color_list: [],
      size_list: [],
      num: 1,
    }
  },
  watch: {
    product_data: {
      handler (newdata) {
        that.init()
        newdata.color_index == that.swiper_index ? '' : that.getImg(newdata.color_index)
      },
      deep: true
    }
  },
  created () {
    this.init()
  },
  mounted () {
    that = this
    console.log(this.new_data);
    this.swiper = document.querySelector('#carouselExampleCaptions')
    myswiper = new Carousel(this.swiper, { interval: false, touch: true })
    this.swiper.addEventListener('slide.bs.carousel', function (e) {
      that.swiper_index = e.to
      that.$emit('handlerColor', e.to)
    })
  },
  methods: {
    init () {
      this.swiper_img = this.product_data.swiper_img
      this.color_list = this.product_data.color_list
      this.size_list = this.product_data.size_list
      this.name = this.product_data.name
      this.price = this.product_data.price
      this.color_index = this.product_data.color_index
      this.num = this.product_data.num
      this.size_index = this.product_data.size_index
    },
    // 轮播
    prev () {
      myswiper.prev()
    },
    next () {
      myswiper.next()
    },
    getImg (index) {
      myswiper.to(index)
    },
    // 总数1：增加，0：减少
    num_add () {
      this.$emit('handlerNum', 1)
    },
    num_sub () {
      if (this.product_data.num == 1) return
      else this.$emit('handlerNum', 0)
    },

    // 尺寸选择
    handlerSize (index) {
      this.$emit('handlerSize', index)
    },
    // 颜色选择
    handlerColor (index) {
      this.getImg(index)
      this.$emit('handlerColor', index)
    },
    // 更新购物车
    handlerAdd () {






    }
  }
}
</script>

<style lang='scss'>
.img-box {
  padding-bottom: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img-select-list {
  li {
    width: 70px;
    height: 70px;
    margin: 0 5px;
    &.li-active {
      border: 2px solid #000;
    }
    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.do-icon {
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 20px;
  transform: translateY(-50%);
  cursor: pointer;
}
.select-li {
  border: 2px solid #e2e2e2;
  font-size: 12px;
  padding: 5px 20px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
}
.select-active {
  position: absolute;
  right: 2px;
  bottom: 2px;
  border: 10px solid #fff;
  border-bottom: 10px solid #000;
  border-right: 10px solid #000;
  font-weight: 700;
  color: #fff;
  span {
    position: absolute;
    bottom: -17px;
    right: -12px;
  }
}

.num-box {
  div {
    border: 1px solid #e2e2e2;
    width: 35px;
    height: 35px;
    &:first-child,
    &:last-child {
      cursor: pointer;
    }
  }
  .no-do {
    cursor: no-drop !important;
    background: #efefef;
  }
}
.buy-btn {
  div {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}

.modal-backdrop {
  background-color: #000;
  opacity: 0.2 !important;
}

.modal.fade .modal-dialog {
  transform: translate(50px, -50px);
}

.modal-dialog {
  margin: 0 0 0 auto !important;
  height: 100%;
  .modal-content {
    height: 100%;
  }
}
</style>