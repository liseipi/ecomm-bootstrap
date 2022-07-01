<template>
  <div class="b-banner">
    <div class="b-title bg-black bar d-flex justify-content-center">
      <h4 href="#" class="d-flex flex-md-row flex-column align-items-center">
        Free shipping <u class="ms-md-2">on orders over $99</u></h4>
    </div>
    <div class="b-banner-img">
      <img src="../../static/images/b-banner-img.webp" alt="">
    </div>


  </div>
</template>

<script>
export default {
  name: "a-banner"
}
</script>

<style scoped>
.b-banner {
  width: 100%;
}
.b-title {
  padding: 10px 0;
}
.bar h4 {
  color: #fff;
  font-size: 14px;
  margin-bottom: 0;
}
.b-banner-img {
  width: 100%;
  overflow: hidden;
}
.b-banner-img img {
  width: 100%;
  height: auto;
  animation: scalelimg 1.5s linear;
}

@keyframes scalelimg {
  0% {
    transform: scale(120%);
  }
  100% {
    transform: scale(100%);
  }
}
</style>
