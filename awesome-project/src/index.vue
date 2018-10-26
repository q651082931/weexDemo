<template>
<div class="wrapper">
<scroller class="scroller">
<!-- <BYSlider class="BYSlider" :imgList = "dataJson.imgList"> -->
<price class="price"></price>
 </BYSlider>
</scroller>
</div>
</template>
<style scoped>

.scroller{
 flex : 1;
 height: 667px;
 /* background-color: red; */
}
.BYSlider{
  /* flex-grow: 1; */
  height: 600px;
  width: 750px;
  background-color: aqua;

}
</style>

<script>
import BYSlider from './components/BYSlider.vue'
import price from './components/price.vue'

let dataJsonFile = require('./components/product-detail.json')
export default {
  components: {
    BYSlider,
    price

  },
  data () {
    return {
      dataJson: dataJsonFile.mdata
    }
  }

}
</script>
