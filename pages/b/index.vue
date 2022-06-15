<template>
  <div>
    <Header />
    <Banner />
    <Collection />
    <Product />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "b-index",
  components: {
    Header: () => import('~/components/b/b-header'),
    Banner: () => import('~/components/b/b-banner'),
    Collection: () => import('~/components/b/b-featured-collection'),
    Footer: () => import('~/components/b/b-footer'),
    Product: () => import('~/components/b/b-product'),
  }
}
</script>
