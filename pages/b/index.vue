<template>
  <div>
    <Header />
    <Banner />
  </div>
</template>

<script>
export default {
  name: "b-index",
  components: {
    Header: () => import('~/components/b/b-header'),
    Banner: () => import('~/components/b/b-banner'),
  }
}
</script>
