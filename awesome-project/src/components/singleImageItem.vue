<template>
  <div class="content">
  <text class="title">{{model.title}}</text>
  <text class="subTitle">{{model.subTitle}}</text> 
  <image class="image" :src = "model.picture"/>
  </div>
</template>

<style scoped>
.content {
 flex-flow: column;
 background-color: aqua;
 flex: 1;
}
.title{
   font-size: 40px;
   color: black;
   text-align: left;
   align-self: left;
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
   
 }
.subTitle{
    font-size: 28px;
    color:gray;
    text-align: left;
}
.image{
   flex-grow: 1;
   margin-left: 0px;
   margin-right: 0px;
   margin-top: 20px;
   margin-bottom: 0px;
   align-self: left;

}
</style>
<script>
export default {
  props :['model'],
}
</script>
