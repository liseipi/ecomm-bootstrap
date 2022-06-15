<template>
  <div>
    <footer class="contaniner py-5 d-flex flex-column justify-content-center align-items-center text-center">

      <h3 class="fw-normal">Sign up and save</h3>
      <p class="mt-4 ">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
      <div class="d-flex w-100 input-box">
        <div class="p-2 bg-white border foot-input">
          <input class="w-100" type="text" placeholder="Enter your email">
        </div>
        <div class="py-2 px-4 sub-btn">
          <button class="d-none d-lg-block">Subscribe</button>
          <svg class="sub-icon d-lg-none" width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path d="m14 0 6 3-6 3V4H0V2h14V0z" fill="currentColor"></path></svg>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  background-color: rgba(247, 247, 247, 1);
  padding-inline: 30px;
  font-family: Frank Ruhl Libre, sans-serif;
  font-style: normal;
  font-weight: 400;
  .sub-btn {
    background-color: #314c67;
    button {
      color: white;
    }
  }
  .sub-icon {
    color: white;
  }
  .foot-input {
    flex: 1;
  }
}

@media (min-width: 992px) {
  .input-box {
    width: 40% !important;
  }
}
</style>