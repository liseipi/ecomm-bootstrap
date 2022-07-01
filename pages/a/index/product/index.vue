<template>
  <div>
    <ProductDetail :product_data="product_data" :new_data="data"  @handlerColor="handlerColor" @handlerNum="handlerNum"
      @handlerSize="handlerSize" />
    <ProductAddcart :product_data="product_data" @handlerColor="handlerColor" @handlerNum="handlerNum"
      @handlerSize="handlerSize" />
  </div>
</template>

<script>
export default {

  async asyncData({app}) {
    const data = await app.api.getProducts()
    return {data}
  },


  name: "a-product",
  components: {
    ProductDetail: () => import('~/components/a/a-product-detail'),
    ProductAddcart: () => import('~/components/a/a-product-addcart'),
  },
  data () {
    return {
      product_data: {
        name: `Pigeon Print Men's Loose Basketball Outdoor Summer Shorts`,
        price: '$54.99',
        size_list: ['M', 'L', 'XL', 'XXL', 'XXXl'],
        color_list: ['black', 'navy blue', 'gray'],
        swiper_img: ['a-featured-1.jpg', 'a-featured-2.jpg', 'a-featured-3.jpg'],
        color_index: 0,
        num: 1,
        size_index: 0,
      }
    }
  },
  created() {
    // console.log(this);
  },
  methods: {
    handlerColor (index) {
      this.product_data.color_index = index
    },
    handlerNum (num) {
      num ? this.product_data.num++ : this.product_data.num--
    },
    handlerSize (index) {
      this.product_data.size_index = index
    }
  }
}

</script>

