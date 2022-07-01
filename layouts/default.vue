<template>
  <div>
    <Nav />
    <nuxt />
  </div>
</template>

<script>
  export default {
    name: 'default',
    components: {
      Nav: () => import('~/components/nav'),
    },
  }
</script>
