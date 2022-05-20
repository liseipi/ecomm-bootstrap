<template>
  <div>
    <Nav />
    <nuxt keep-alive />
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
