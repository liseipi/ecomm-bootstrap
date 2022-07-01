<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "a-index",
  components: {
    Header: () => import('~/components/a/a-header'),
    Footer: () => import('~/components/a/a-footer'),
  }
}
</script>
