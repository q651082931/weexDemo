<template>
<div>
  <div class="titleContent">
<text class="title">{{mainTitle}}</text>
<div class="titleBottomLine"></div>
  </div>
<singleImageContent :firstLists = "firstLists" class="singleImageContent"></singleImageContent>
<doubleImageContent :secondLists = 'secondLists' class="doubleImageContent"></doubleImageContent>
</div>
</template>


<style scoped>
/* .titleContent{
  background-color: blue;
  } */
 .title{
   font-size: 40px;
   color: black;
   text-align: center;
   margin-top: 40px;
 }
 .titleBottomLine{

  background-color: black;
  height: 2px;
  margin-top: 1px;
  width: 200px;
  margin-left: 0px;
  margin-right: 0px;
  align-self: center;
  flex-grow: 1;
 }
 .singleImageContent{
   margin-top: 60px;
   margin-left:10px;
   margin-right:10px;
   height: 300px;
 }
 .doubleImageContent{
   margin-top: 40px;
   margin-left: 10px;
   margin-right: 10px;
   height: 600px;

 }
</style>


<script>
import singleImageContent from './components/singleImageContent.vue'
import doubleImageContent from './components/doubleImageContent.vue'
export default {
  components:{
    singleImageContent,
    doubleImageContent
  },
  data () {
    return {
     mainTitle : "回头客推荐",
     firstLists:[{
          title: '就造专属感',
          subTitle: '犹记得儿时',
          picture: 'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg'
        }, {
          title: '睡袍穿不对！',
          subTitle: '我讨厌我的睡袍',
          picture:'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
        }],
     secondLists:[{
          title: '就造专属感',
          subTitle: '犹记得儿',
          pictures: [
            'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ]
        }, {
          title: '睡袍穿不对媚！',
          subTitle: '“Ihatemynightgown',
          pictures: [
            'https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ] 
        }, {
          title: '上天入海',
          subTitle: '现如今相机',
          pictures: [
            'https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg',
            'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ] 
        }, {
          title: '关于培根的那',
          subTitle: '培根一直',
          pictures: [
            'https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'
          ] 
        }]
    }
  }
}
</script>

