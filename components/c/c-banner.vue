<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXx8fH///8wmV1OAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg=="
          data-srcs="//imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_{width}x.jpg,//imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_{width}x.jpg"
          data-sizes="auto" style="object-position: center center;" alt=""
          srcset="//imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_48x.jpg 48w, //imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_180x.jpg 180w, //imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_360x.jpg 360w, //imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_540x.jpg 540w, //imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_720x.jpg 720w, //imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_900x.jpg 900w, //imgv2.staticdj.com/c788e278ce2780062b693cf8ba93d812_1024x.jpg 1024w"
          size="1199px" sizes="1199px">
      </div>
      <div class="carousel-item">
        <img 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXx8fH///8wmV1OAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg=="
          data-srcs="//imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_{width}x.jpg,//imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_{width}x.jpg"
          data-sizes="auto" style="object-position: center center;" alt=""
          srcset="//imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_48x.jpg 48w, //imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_180x.jpg 180w, //imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_360x.jpg 360w, //imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_540x.jpg 540w, //imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_720x.jpg 720w, //imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_900x.jpg 900w, //imgv2.staticdj.com/ef84f46788ba38100fff15efa1046ca2_1024x.jpg 1024w"
          size="1125px" sizes="1125px">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "c-banner"
}
</script>

<style scoped>
.carousel-item img {
  width: 100%;
  height: 100%;
}
</style>
