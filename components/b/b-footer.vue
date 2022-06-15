<template>
  <div style="background-color: black;">
    <footer class="container py-3 py-md-4">
      <div class="row">
        <!-- follow -->
        <div class="text-center text-md-start col-md-3">
          <h5 style="font-weight:400 !important;font-size:16px;">FOLLOW US</h5>
          <div>
            <ul class="d-flex justify-content-center justify-content-md-start mt-3" style="color:white;">
              <li class="icon-list-item" v-for="(item, index) in foot_svg" :key="index">
                <img class="icon_svg" :src="'/images/b-footer-'+item.id+'.svg'" alt="">
              </li>
            </ul>
          </div>
        </div>
        <!-- follow -->

        <!-- support -->
        <div class="text-center text-md-start col-md-3 pt-2 pt-md-0">
          <h5 style="font-weight:400 !important;font-size:16px;">SUPPORT</h5>
          <ul>
            <li class="support-list-item" v-for="(item, index) in support_list" :key="index">
              <a href="">{{item}}</a>
            </li>
          </ul>
        </div>
        <!-- support -->

        <dic class="col-md-3 text-center py-4 py-md-0">
          <img class="footer-img" src="/images/a-footer-img.webp" alt="">
        </dic>

        <!-- newsletter -->
        <div class="text-center text-md-start col-md-3 pt-2 pt-md-0">
          <h5 style="font-weight:400 !important;font-size:16px;">Newsletter</h5>
          <p class="pt-2" style="color: rgba(172, 172, 172, 1) !important;font-size:14px;">Subscribe to be the first one
            to get news and get an extra 10% OFF</p>
          <div class=" w-100">
            <input class="px-3 w-100 py-1" type="text" placeholder="Email">
          </div>
          <button class="sub-btn mt-3">Subscribe</button>
        </div>
        <!-- newsletter -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      foot_svg: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4', }],
      support_list: ['About Us', 'Shipping Policy', 'Returns & Exchanges', 'Payment Policy', 'Privacy Policy', 'Terms of Service ', 'FAQs', 'Contact Us：service@zulabox.com']
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  color: white;
  .icon-list-item {
    position: relative;
    padding-right: 30px !important;
    &:last-child {
      padding: 0 !important;
    }
    .icon_svg {
      width: 16px;
      height: auto;
      vertical-align: unset;
    }
    &:not(:last-child):after {
      content: "/";
      position: absolute;
      color: rgba(172, 172, 172, 1);
      top: 0;
      left: 60%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
    }
  }
  .support-list-item {
    a {
      color: rgba(172, 172, 172, 1) !important;
      font-size: 14px;
      &:hover {
        text-decoration: underline !important;
      }
    }
  }
  .footer-img {
    max-width: 145px;
    height: auto;
    color: #fff;
  }
  .sub-btn {
    padding: 10px 16px;
    color: #fff;
    background-color: rgba(34, 34, 33, 1) !important;
  }
}
</style>