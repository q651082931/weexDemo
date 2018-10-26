<template>
    <slider class = "slider" interval = "3000" auto-play = "true">
    <div class = "sliderFrame" v-for = "img in dataJson.imgList" :key= "img">
      <image class="image" resize = "cover" :src = "img"> </image>
    </div>
  </slider>
</template>

<style scoped>
.sliderFrame {
    width: 750px;
    height: 600px;
    flex-grow: 1;
    background-color:bisque;
  }
.image {
    width: 750px;
    height: 600px;
    flex-grow: 1;
    background-color: blue;
  }
</style>
<script>
export default {
  props: ['dataJson']

}

</script>
