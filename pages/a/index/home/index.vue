<template>
  <div>
    <Banner />
    <Collection />
    <Product :products="products" v-if="products"/>
    <Adv />
  </div>
</template>

<script>


export default {
  name: "home-index",
  components: {
    Banner: () => import('~/components/a/a-banner'),
    Collection: () => import('~/components/a/a-featured-collection'),
    Product: () => import('~/components/a/a-product'),
    Adv: () => import('~/components/a/a-adv')
  },
  async asyncData({app}) {
    const products = await app.api.getProducts()
    return {products}
  },
  data() {
    return {
      
    }
  }
}
</script>
