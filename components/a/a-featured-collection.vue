<template>
  <div class="featured mt-4 pt-4 border-top">
    <section class="container">
      <h2>为你推荐</h2>
      <ul class="mt-3 d-flex flex-wrap justify-content-between">
        <li v-for="(item, index) in list" :key="index"
            class="list-item mt-2" >
          <div class="img-box rounded-circle position-relative ">
            <img class="position-absolute tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-object-contain tw-block lazyautosizes lazyloaded" style="padding: 14%;" :src="'/images/a-featured-'+item.id+'.jpg'">
          </div>
          <h6 class="list-item-text fw-bolder text-center mt-2">{{item.name}}</h6>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  // 定义属性
  data() {
    return {
      list: [ {id:1, name: '热卖'},
              {id:2, name: '长袍'},
              {id:3, name: '男士时装'},
              {id:4, name: '连身裤'},
              {id:5, name: '配件'},
              {id:6, name: '孩子们'}]
    }
  },
}
</script>

<style lang="scss" scoped >
.featured {
  .list-item {
    flex: 0 0 30%;
    padding-bottom: 100%;
    .img-box {
      width: 100%;
      padding-bottom: 100%;
      background-color: #f8f8f8;
      &:hover {
        background-color: #fff;
        transition: all .15s;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
        transform: translateY(-3%);
      }
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    .list-item-text {
      font-size: 12px;
    }
  }
}

@media screen and (min-width: 992px) {
  .list-item {
    flex: 0 0 15% !important;
  }
}
</style>