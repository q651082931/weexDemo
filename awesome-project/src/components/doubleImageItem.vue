<template>
  <div class="content">
  <text class="title">{{model.title}}</text>
  <text class="subTitle">{{model.subTitle}}</text>
  <div class="images">
  <image class="image" :src= "source" v-for= "(source ,i) in model.pictures" :key = "i"/>
  </div>
  </div>
</template>

<style scoped>
.content {
  flex: 1;
  flex-flow: column;
 /* background-color: aqua; */
}
.images{
  flex-grow: 1;
  flex-flow: row;
}
.title{
   font-size: 28px;
   color: black;
   text-align: left;
   align-self: left;
 }
.subTitle{
    font-size: 18px;
    color:gray;
    text-align: left;
}
.image{
   flex-grow: 1;
   flex: 1;
   margin-left: 0px;
   margin-right: 0px;
   margin-top: 20px;
   margin-bottom: 0px;
   align-self: left;

}
</style>
<script>
export default {
  props: ['model']
}
</script>
