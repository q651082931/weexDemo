<template>
  <div class="wrapper" @click="logdata">
    <scroller class="scroller">
      <BYSlider class="BYSlider" :dataJson = "dataJson">
      </BYSlider>
      <price :dataJson = "dataJson" class="price"></price>
      <valuational :dataJson = "dataJson"> </valuational>
      <!-- 推荐 -->
      <RecommendView></RecommendView>
      <!-- webview -->
      <WebView/>
    </scroller>
  </div>
</template>
<style scoped>
.scroller {
  flex: 1;
  height: 667px;
  /* background-color: red; */
}
.BYSlider {
  flex-grow: 1;
  height: 600px;
  /* width: 750px; */
  background-color: aqua;
}
</style>

<script>
import BYSlider from './components/BYSlider.vue'
import price from './components/price.vue'
import valuational from './components/valuational.vue'
import RecommendView from './components/RecommendView.vue'
import WebView from './components/WebView.vue'

let dataJsonFile = require('./components/product-detail.json')
console.log(dataJsonFile.mdata)
export default {
  components: {
    BYSlider,
    price,
    valuational,
    RecommendView,
    WebView
  },
  data () {
    return {
      dataJson: dataJsonFile.mdata
    }
  },
  methods: {
    logdata () {
      console.log(this.dataJson)
    }
  }
}
</script>
