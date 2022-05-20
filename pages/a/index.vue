<template>
  <div>
    <Header />
    <Banner />
  </div>
</template>

<script>
export default {
  name: "a-index",
  components: {
    Header: () => import('~/components/a/a-header'),
    Banner: () => import('~/components/a/a-banner'),
  }
}
</script>
