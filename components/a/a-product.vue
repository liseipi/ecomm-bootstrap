<template>
  <div>
    <section class="container py-4 px-4">
      <h3>What 's Hot</h3>
      <ul class="d-flex justify-content-between py-4 flex-wrap">
        <li class="pro-list-item mb-5 position-relative" v-for="(item, index) in pro_list" :key="index">
          <a class="img-box w-100" @mouseenter="showImg(index)" @mouseleave="hideImg(index)">
            <transition name="ho" enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut">
              <img :key="item.cur"
                :src="img_active == index ? '/images/a-pro-'+item.img : '/images/a-pro-'+item.hover_img">
            </transition>
            <div class="todo-box d-none d-lg-block" :class="index === img_active ? 'todo-box-active' : ''">
              <div class="rounded-circle iconfont icon-gouwuche "></div>
              <div class="rounded-circle iconfont icon-sousuo mt-2"></div>
            </div>
            <span v-if="item.hot" class="hot position-absolute px-2" style="lefft: 0;bottom: 0;">sale</span>

            <!-- mobile -->
            <span class="d-flex d-lg-none position-absolute todo-box-mob iconfont icon-gouwuche rounded-circle"></span>
            <!-- mobile -->
          </a>

          <div class="sale-box py-2">
            <a class="sale-item-desc">{{item.desc}}</a>
          </div>

          <div class="d-flex mt-2 align-items-end price-box">
            <span>{{item.price}}</span>
            <del v-if="item.hot" class="ms-2" style="font-size:12px;">{{item.hot}}</del>
          </div>
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      img_active: -1,
      curIndex: 0,
      pro_list: [
        { img: '1.jpg', cur: 1, hover_img: '1-hover.jpg', desc: 'Pink halter dress + bronzing embroidered cardigan two-piece set ', price: 'HK$353.10', hot: 'HK$509.75' },
        { img: '2.jpg', cur: 2, hover_img: '2-hover.jpg', desc: 'Gold embroidered dress + baggy cardigan two-piece set ', price: 'HK$384.49', hot: 'HK$509.75' },
        { img: '3.webp', cur: 3, hover_img: '3-hover.jpg', desc: 'White halter dress + embroidered cardigan two-piece set ', price: 'HK$517.60' },
        { img: '4.jpg', cur: 4, hover_img: '4-hover.webp', desc: 'Printing maxi slip dress with cape sleeves short cardigan kaftan set ', price: 'HK$470.51' },
        { img: '5.jpg', cur: 5, hover_img: '5-hover.jpg', desc: 'Beige tube top dress + sequin cardigan two-piece set ', price: 'HK$384.49' },
      ]
    }
  },
  methods: {
    showImg (index) {
      this.img_active = index
      this.pro_list[index].cur++
    },
    hideImg (index) {
      this.img_active = -1
      this.pro_list[index].cur--
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