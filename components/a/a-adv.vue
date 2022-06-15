<template>
  <transition enter-active-class="animate__animated animate__slideInUp" leave-active-class="animate__animated animate__slideOutDown">
    <div class="a-adv position-fixed" v-show="flat">
      <div class="box-link d-flex rounded p-3 bg-dark position-relative pe-4">
        <div class="adv-img">
          <img src="/images/adv1.jpeg" alt="">
        </div>
        <div class="adv-right ms-2 d-flex flex-column justify-content-between">
          <h6 class="mb-0">S***e in Dubai purchased</h6>
          <p class="lh-base mb-0">Red plants pattern loose kaftan dress Dubai purchased</p>
          <span>2 hours ago</span>
        </div>
        <span @click.stop="close" class="iconfont icon-close position-absolute" style="right: 20px;top:10px;"></span>
      </div>
    </div>
  </transition>

</template>

<script>

let that
export default {
  // 定义属性
  data () {
    return {
      flat: false,
      advList: [{ img: 'adv1.jpeg', title: 'S***e in Dubai purchased', desc: 'Red plants pattern loose kaftan dress', time: '2 hours ago' },
      { img: 'adv2.jpg', title: 'S***e in Dubai purchased', desc: 'Red plants pattern loose kaftan dress', time: '1 hours ago' },]
    }
  },
  mounted() {
    that = this
    setInterval(() => {
      that.flat = true;
      setTimeout(() => {
        console.log('nav');
        that.flat = false
      }, 5000)
    }, 10000)
  },
  methods: {
    close () {
      this.flat = false
    }
  }
}
</script>

<style lang="scss" scoped>
.a-adv {
  cursor: pointer;
  left: 10px;
  bottom: 10px;
  color: #fff;
  .box-link {
    .adv-img {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .adv-right {
      width: 180px;
      font-size: 12px;
      h6,
      span {
        color: rgba(255, 255, 255, 0.8);
      }
      h6 {
        font-size: 12px;
      }
      p {
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .icon-close {
      cursor: pointer;
    }
  }
}
</style>