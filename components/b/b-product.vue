<template>
  <div>
    <section class="container py-4 px-4">
      <h3 class="text-center">Weekly Selection </h3>
      <ul class="d-flex justify-content-between py-4 flex-wrap">
        <li class="pro-list-item position-relative" v-for="(item, index) in pro_list" :key="index">
          <a class="img-box w-100">
            <img :src="`/images/a-pro-${item.img}`" alt="">
            <span class="rounded-pill position-absolute discount">-28%</span>
          </a>

          <div class="sale-box yatext py-2 position-relative">
            <h6 style="font-size:12px;">SALE</h6>
            <a class="sale-item-desc">{{item.desc}}</a>
            <div class="d-flex mt-3 d-flex align-items-end sale-item-price-box">
              <span style="color: rgba(208,2,27,1);">{{item.price}}</span>
              <del v-if="item.hot" class="ms-2" style="font-size:12px;color:#999999;">{{item.hot}}</del>
            </div>
          </div>

          <button
            class="buy-btn position-absolute mt-3 lh-lg rounded border border-secondary d-flex align-items-center justify-content-center w-100 yatext">QUICK
            SHOP</button>

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
        { img: '1.jpg', cur: 1, hover_img: '1-hover.jpg', desc: 'Pink halter dress + bronzing embroidered cardigan two-piece set ', price: '$35.99', hot: '$35.99' },
        { img: '2.jpg', cur: 2, hover_img: '2-hover.jpg', desc: 'Gold embroidered dress + baggy cardigan two-piece set ', price: '$35.99', hot: '$35.99' },
        { img: '3.webp', cur: 3, hover_img: '3-hover.jpg', desc: 'White halter dress + embroidered cardigan two-piece set ', price: '$35.99' },
        { img: '4.jpg', cur: 4, hover_img: '4-hover.webp', desc: 'Printing maxi slip dress with cape sleeves short cardigan kaftan set ', price: '$35.99' },
        { img: '5.jpg', cur: 5, hover_img: '5-hover.jpg', desc: 'Beige tube top dress + sequin cardigan two-piece set ', price: '$35.99' },
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
  margin-bottom: 60px;
  .img-box {
    padding-bottom: 150%;
    position: relative;
    .discount {
      font-size: 12px;
      color: white;
      background: black;
      left: 10px;
      top: 10px;
      padding: 2px 4px;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      transition: all 1s;
      border-radius: 10px;
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
  }
  .sale-box {
    .sale-item-price-box {
      line-height: normal;
      span {
        font-weight: 500;
      }
    }
    .sale-item-desc {
      font-size: 12px;
      font-family: Cardo, sans-serif;
      font-style: normal;
      font-weight: 700;
    }
  }
  .buy-btn {
    bottom: -40px;
    &:hover {
      transition: 0.3s;
      background-color: #000;
      color: #fff;
    }
  }
}

@media (min-width: 992px) {
  .pro-list-item {
    flex: 0 0 23%;
  }
  .sale-item-desc {
    font-size: 14px !important;
  }

}
</style>