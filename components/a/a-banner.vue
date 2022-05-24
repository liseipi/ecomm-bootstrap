<template>
  <div class="a-banner">
    <img class="w-100" src="../../static/images/a-banner-img.png" alt="">
  </div>
</template>

<script>
export default {
  name: "a-banner",
  data() {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../assets/css/a.scss';

.a-banner {
  height: 20000px;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.bottom-menu {
  top: 100%;
  right: 0;
  /* transform: translateY(100%); */
}
</style>
