<template>
    <div>
      <text class="title">{{dataJson.goodsName}} </text>
      <text class="subTitle">{{dataJson.shortGoodsName}}</text>
      <text class="price">79</text>
      <text class="bottomTitle">joules制造商直供</text>
    </div>
</template>
<style scoped>
.title{
   font-size: 38px;
   color: black;
   text-align: left;
   align-self: left;
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
   margin-left: 20px;
 }
.subTitle{
    font-size: 18px;
    color:gray;
    text-align: left;
    margin-left: 20px;
    margin-top: 20px;
}
.price{
    font-size: 50px;
    color:red;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
}
.bottomTitle{
    font-size: 18px;
    color:orange ;
    /* background-color: coral; */
    margin-left: 20px;
    margin-top: 10px;
}
</style>
<script>
export default {
  props: ['dataJson']
}
</script>
