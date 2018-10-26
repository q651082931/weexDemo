<template>
    <slider class = "slider" interval = "3000" auto-play = "true">
    <div class = "sliderFrame" v-for = "img in dataJson.imgList" :key= "img">
      <image class="image" resize = "cover" :scr = "img"> </image>
    </div>
  </slider>
</template>

<style scoped>
.image {
    width: 750px;
    height: 600px;
    background-color: blue;
  }
</style>
<script>
export default {
  props: ['imgList']

}

</script>
