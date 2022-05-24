<template>
  <div>
    <Header></Header>
    <Banner></Banner>
  </div>
</template>

<script>

export default {
  name: 'c-index',
  components: {
     Header: () => import('~/components/c/c-header'),
     Banner: () => import('~/components/c/c-banner')
  }
}
</script>

<style>
</style>