<template>
  <div>
    <section class="container py-4 px-4">
      <h3>What 's Hot</h3>
      <ul class="d-flex justify-content-between py-4 flex-wrap">
        <li class="pro-list-item mb-5 position-relative" v-for="(item, index) in pro_list" :key="index">
          <nuxt-link :to="{name: 'a-index-product', query:{id: item.id}}">
            <a class="img-box w-100" @mouseenter="showImg(index)" @mouseleave="hideImg(index)">
              <transition name="ho" enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
                <img :key="item.cur"
                  :src="img_active == index ? item.img.url : item.hover_img.url">
              </transition>
              <div class="todo-box d-none d-lg-block" :class="index === img_active ? 'todo-box-active' : ''">
                <div class="rounded-circle iconfont icon-gouwuche "></div>
                <div class="rounded-circle iconfont icon-sousuo mt-2"></div>
              </div>
              <span v-if="item.hot" class="hot position-absolute px-2" style="lefft: 0;bottom: 0;">sale</span>

              <!-- mobile -->
              <span
                class="d-flex d-lg-none position-absolute todo-box-mob iconfont icon-gouwuche rounded-circle"></span>
              <!-- mobile -->
            </a>

            <div class="sale-box py-2">
              <a class="sale-item-desc two-line-hidden">{{item.desc}}</a>
            </div>

            <div class="d-flex mt-2 align-items-end price-box">
              <span>{{item.price}}</span>
              <del v-if="item.hot" class="ms-2" style="font-size:12px;">{{item.hot}}</del>
            </div>
          </nuxt-link>
        </li>
      </ul>

    </section>
  </div>
</template>

<script>

export default {


  props: {
    products: {}
  },
  // 定义属性
  data () {
    return {
      img_active: -1,
      curIndex: 0,
      pro_list: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.pro_list = this.products.products.slice(0,6).map(item => {
        return {
          id: item.id,
          img: item.images[0],
          hover_img: item.images[1],
          cur: 0,
          desc: item.description
        }
      })
    },
    showImg (index) {
      this.img_active = index
      this.pro_list[index].cur++ //控制图片切换
    },
    hideImg (index) {
      this.img_active = -1
      this.pro_list[index].cur-- //控制图片切换
    },
    toDetail () {

    }
  }
}
</script>

<style lang="scss" scoped>
.pro-list-item {
  flex: 0 0 46%;
  .img-box {
    padding-bottom: 150%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      transition: all 1s;
    }
    .todo-box {
      position: absolute;
      right: 0;
      transform: translate(50%, -20%);
      opacity: 0;
      transition: all 0.3s;
      div {
        background-color: black;
        color: white;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .todo-box-active {
      opacity: 100;
    }
    .todo-box-mob {
      background-color: black;
      color: white;
      width: 26px;
      height: 26px;
      font-size: 12px;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hot {
      background-color: #ba4444;
      color: #fff;
    }
  }
  .sale-box {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    text-align: end;
    .sale-item-desc {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5) !important;
    }
  }
  .price-box {
    position: absolute;
    bottom: -20px;
    line-height: normal;
    span {
      font-weight: 500;
    }
  }
}

@media (min-width: 992px) {
  .pro-list-item {
    flex: 0 0 18%;
  }
  .sale-item-desc {
    font-size: 14px !important;
  }
}
</style>