<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <Collection />
    <Product />
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'c-index',
  components: {
    Header: () => import('~/components/c/c-header'),
    Banner: () => import('~/components/c/c-banner'),
    Collection: () => import('~/components/c/c-featured-collection'),
    Footer: () => import('~/components/c/c-footer'),
    Product: () => import('~/components/c/c-product'),
  }
}
</script>

<style>
</style>