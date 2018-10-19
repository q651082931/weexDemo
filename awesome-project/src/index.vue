<template>
<div>
<text class="title">{{mainTitle}}</text>
<div class="titleBottomLine"></div>
<singleImageContent :firstLists = "firstLists" class="singleImageContent"></singleImageContent>
<doubleImageContent :secondLists = 'secondLists' class="doubleImageContent"></doubleImageContent>
</div>
</template>


<style scoped>
  
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
  align-self: center;
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
          subTitle: '犹记得儿时的风筝带着斑斓的色彩',
          picture: 'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg'
        }, {
          title: '睡袍穿不对！',
          subTitle: '我讨厌我的睡袍',
          picture:'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
        }],
     secondLists:[{
          title: '就造专属感，给孩子寻个座椅好玩伴',
          subTitle: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
          pictures: [
            'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ]
        }, {
          title: '睡袍穿不对，脱光也不媚！',
          subTitle: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
          pictures: [
            'https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ] 
        }, {
          title: '上天入海？运动相机帮你搞定',
          subTitle: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
          pictures: [
            'https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg',
            'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg',
            'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'
          ] 
        }, {
          title: '关于培根的那些事，教你吃得门清',
          subTitle: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
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

