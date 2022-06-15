<template>
  <div class="featured mt-4 pt-4 border-top">
    <section class="container">
      <h2>COLLECTIONS</h2>
      <ul class="mt-3 d-flex flex-wrap justify-content-between">
        <a href="#" v-for="(item, index) in list" :key="index" class="list-item mt-2">
          <div class="img-box position-relative ">
            <img
              class="position-absolute tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-object-contain tw-block lazyautosizes lazyloaded"
              style="padding: 15px;" :src="'/images/b-featured-'+item.id+'.jpg'">
          </div>
          <h6 class="list-item-text  text-center mt-2">{{item.name}}</h6>
        </a>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      list: [{ id: 1, name: 'EVENING GOWNS' },
      { id: 2, name: 'MINI DRESSES' },
      { id: 3, name: 'JUMPSUITSS' },
      { id: 4, name: 'WEDDING DRESSES' }]
    }
  },
}
</script>

<style lang="scss" scoped >
.featured {
  .list-item {
    flex: 0 0 50%;
    .img-box {
      width: 100%;
      padding-bottom: 150%;
      background-color: #fff;
      &:hover {
        background-color: #fff;
        transition: all 0.3s;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
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
    flex: 0 0 24% !important;
  }
}
</style>