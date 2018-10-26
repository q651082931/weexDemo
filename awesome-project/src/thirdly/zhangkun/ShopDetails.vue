<template>
  <list class="wrapper frameWidth">
    <header class="topTabViewStyle frameWidth cellHeight"></header>
    <!-- 首页 -->
    <ShopDetialsView/>
    <!-- 评价 -->
    <ShopDetialsCommendView/>
    <!-- webView -->
    <ShopDetialsWebView/>
    <!-- 推荐 -->
    <ShopDetialsRecommendView/>
  </list>
</template>

<script>

import ShopDetialsView from './view/ShopDetialsView.vue'
import ShopDetialsWebView from './view/ShopDetialsWebView.vue'
import ShopDetialsRecommendView from './view/ShopDetialsRecommendView.vue'
import ShopDetialsCommendView from './view/ShopDetialsCommendView.vue'
import RecommendShopsView from '../../lessons/second/ryan/index.vue'
export default {

  components: {
    // HelloWorld,
    ShopDetialsView,
    RecommendShopsView,
    ShopDetialsWebView,
    ShopDetialsRecommendView,
    ShopDetialsCommendView
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: flex-start;
    align-items: flex-start;
  }
  .topTabViewStyle {
    background-color: aqua;
  }
  .frameWidth {
    width: 750px;
  }
  .cellHeight {
    height: 80px;
  }

</style>
