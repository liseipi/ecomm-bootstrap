


//备注：上传照片api在页面请求，非统一处理
const url = {
  getProducts: '/products', //商品列表
  getProductDetail: '/products/', //商品详情
}

const Apis = {
  getProducts: {
    url: url.getProducts,
    method: 'get'
  },
  getProductDetail: {
    url: (id) => {
      return url.getProductDetail + `/${id}`
    },
    method: 'get'
  }
}

export default Apis
