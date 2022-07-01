<template>
  <div class="add-to-cart position-fixed w-100 bg-white" style="z-index:999;bottom:0;box-shadow: 0 -2px 4px 0 #0000000f;">
    <div class="d-flex justify-content-between" style="padding:7px 60px;">
      <div class="flex-center">
        <div class='' style="width:60px;height:60px;">
          <img style="width:100%;height:100%;object-fir:cover;" :src="`/images/${swiper_img[color_index]}`" alt="">
        </div>
        <div class="ms-4">
          <h6 class="fw-normal">{{name}}</h6>
        </div>
        <div class="ms-4" style="color:rgba(172, 16, 31, 1); font-size: 16px;">
          <h6>{{price}}</h6>
        </div>
      </div>

      <div class="flex-center right-btns">

        <div >
          <div class="btn-group dropup">
            <button type="button" class="border dropdown-toggle pt-2 pb-2 ps-3 pe-3"  style="font-size:12px;min-width:100px" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-offset="0,10">
              {{color_list[color_index]}}
            </button>
            <ul class="dropdown-menu drop-ul" style="box-shadow: 0 0 8px 0 rgba(0,0,0,0.15);">
              <li v-for="(item,index) in color_list" :key="index" @click="handlerColor(index)">
                <a class="dropdown-item" :class="index == color_index ? 'active disabled':''" href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div >
          <div class="btn-group dropup">
            <button type="button" class="border dropdown-toggle pt-2 pb-2 ps-3 pe-3"  style="min-width:80px;font-size:12px" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-offset="0,10">
              {{size_list[size_index]}}
            </button>
            <ul class="dropdown-menu drop-ul" style="box-shadow: 0 0 8px 0 rgba(0,0,0,0.15);">
              <li @click="handlerSize(index)" v-for="(item,index) in size_list" :key="index">
                <a class="dropdown-item" :class="index == size_index ? 'active':''" href="#">{{item}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex-center border add-num">
          <div @click="num_sub" :class="num == 1 ? 'no-do':''" class="iconfont icon-jianhao pt-2 pb-2 ps-3 pe-3"></div>
          <div class="p-2">{{num}}</div>
          <div @click="num_add" class="iconfont icon-jiahao1 pt-2 pb-2 ps-3 pe-3"></div>
        </div>

        <div>
          <div class="pt-2 pb-2 ps-3 pe-3 fw-bold rounded cur-poi buy-btn" style="color:#fff;background-color:#FF5A00">Add to Cart</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let that
export default {
  props: {
    showHeight: null,
    product_data: {}
  },
  
  // 定义属性
  data () {
    return {
      name: '',
      price: '',
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
      handler() {
        that.init()
      },
      deep: true
    }
  },
  created() {
    this.init()
    that = this
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

    handlerColor(index) {
      this.$emit('handlerColor', index)
    },

    num_add () {
      this.$emit('handlerNum', 1)
    },
    num_sub () {
      if (this.num == 1) return
      this.$emit('handlerNum', 0)
    },

    handlerSize(index) {
      this.$emit('handlerSize', index)
    }
  }
}
</script>

<style lang="scss">
.dropdown-item.active, .dropdown-item:active {
  background-color: #eee !important;
}
.right-btns {
  >div {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
.drop-ul {
  border-radius: 10px !important;
  overflow: hidden;
  font-size: 12px !important;
  line-height: 30px;
  min-width: 100px !important;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width:0;
    height: 0;
    border: 10px solid rgba(0, 0, 0, 0);
    border-top: 10px solid #fff;
    transform: translateY(-100%);
    left: 50%;
    transform: translateX(-50%);
  }
}
.add-num {
  div {
    font-size: 12px;
    &:not(:nth-child(2)) {
      &:hover {
        background-color: #eee;
        cursor: pointer;
      }
    }
  }
}
.buy-btn {
  &:hover {
    opacity: .9;
  }
}
.no-do {
    cursor: no-drop !important;
    background: #efefef;
  }
</style>