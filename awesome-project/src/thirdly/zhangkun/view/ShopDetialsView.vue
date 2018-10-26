<template>
    <div wrapper frameWidth>
        <SlideView />
        <div class="shopDetailsStyle frameWidth"></div>
        <div class="shopDetailsTagStyle frameWidth"></div>
        <div class="shopDetailsTagCellStyle frameWidth cellHeight"></div>
        <div class="shopDetalsAddressCellStyle frameWidth cellHeight"></div>
        <div class="shopDetalsSizeCellStyle frameWidth cellHeight"></div>
    </div>
</template>

<script>
import SlideView from '../components/SlideView.vue'
import RecommendShopsView from '../../../lessons/second/ryan/index.vue'
export default {
  components: {
    // HelloWorld,
    SlideView,
    RecommendShopsView
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: flex-start;
  align-items: flex-start;
}
.shopDetailsStyle {
  height: 192px;
  background-color: red;
}
.shopDetailsTagStyle {
  height: 66px;
  background-color: yellow;
}
.shopDetailsTagCellStyle {
  background-color: beige;
}
.shopDetalsAddressCellStyle {
  background-color: blue;
}
.shopDetalsSizeCellStyle {
  background-color: pink;
}

.frameWidth {
  width: 750px;
}
 .cellHeight {
    height: 80px;
  }
</style>
