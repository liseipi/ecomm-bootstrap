<template>
  <div>
    <Header />
    <Banner />
    <Collection />
    <Product />
    <Footer />
    <Adv />
  </div>
</template>

<script>
export default {
  name: "a-index",
  components: {
    Header: () => import('~/components/a/a-header'),
    Banner: () => import('~/components/a/a-banner'),
    Collection: () => import('~/components/a/a-featured-collection'),
    Footer: () => import('~/components/a/a-footer'),
    Product: () => import('~/components/a/a-product'),
    Adv: () => import('~/components/a/a-adv')
  }
}
</script>
