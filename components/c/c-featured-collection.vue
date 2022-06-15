<template>
  <div class="featured mt-4 pt-4 border-top">
    <section class="container">
      <h2>COLLECTIONS</h2>
      <ul class="mt-3 d-flex flex-wrap justify-content-between">
        <a href="#" v-for="(item, index) in list" :key="index" class="list-item mt-2 position-relative overflow-hidden">
          <div class="img-box position-relative">
            <img
              class="pos-img position-absolute"
              :src="'/images/c-featured-'+item.id+'.jpg'">
            <h4 :data-index="index" class="pos-img-name d-flex align-items-center justify-content-center list-item-text mt-2 position-absolute">
              {{item.name}}</h4>
          </div>
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
      list: [{ id: 1, name: 'Hip Hop Pants' },
      { id: 2, name: 'Hip Hop Sunglasses' },
      { id: 3, name: 'Hip Hop Cap' },
      { id: 4, name: 'Hip Hop Hat' }]
    }
  },
  mounted() {
    this.hover()
  },
  methods: {
    hover() {
      let pos = document.querySelectorAll('.pos-img-name');
      let img = document.querySelectorAll('.pos-img')
      pos.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
          let index = e.target.dataset.index
          img[index].classList.add("img-scale")
        })
        item.addEventListener('mouseout', function(e) {
          let index = e.target.dataset.index
          img[index].classList.remove("img-scale")
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped >
.featured {
  .list-item {
    flex: 0 0 50%;
    .img-box {
      width: 100%;
      padding-bottom: 100%;
      background-color: #e9edf0;
      img {
        transition: all .3s;
        object-fit: contain;
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    .list-item-text {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
}


.img-scale {
  transform: scale(110%) !important;
}

@media screen and (min-width: 992px) {
  .list-item {
    flex: 0 0 24% !important;
  }
}
</style>