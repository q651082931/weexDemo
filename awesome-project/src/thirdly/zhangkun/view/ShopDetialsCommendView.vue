<template>
    <div>
        <div class="shopDetalsCommentStyle frameWidth"></div>
        <RecommendShopsView />
    </div>
</template>

<script>
import RecommendShopsView from '../../../lessons/second/ryan/index.vue'
export default {
  components: {
    // HelloWorld,
    RecommendShopsView
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.frameWidth {
  width: 750px;
  height: 200px;
}
.shopDetalsCommentStyle {
  background-color: green;
}
</style>
