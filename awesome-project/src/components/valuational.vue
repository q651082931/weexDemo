<template>
    <div>
        <div class="header">
         <text class= "common">评价</text>

        </div>
      <text class="title">商品评价 ({{dataJson.onSellGoodsInfo.onsellCount}}) </text>
      <div class="content">
          <image class="icon" :src = "dataJson.onSellGoodsInfo.recommendProducts[0].imageUrl"></image>
          <text class="subTitle">{{dataJson.onSellGoodsInfo.recommendProducts[0].salePoint}}</text> -->
      </div>
    </div>
</template>
<style scoped>
.header{
    flex-grow: 1;
    background-color:aliceblue;
    height: 50px;
}
.common{
    align-self: center;
}
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
.content{
  flex-direction: row;
}
.icon{
    margin-top: 20px;
    width: 60px;
    height: 60px;
}
.subTitle{
    font-size: 18px;
    color:gray;
    text-align: left;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
    /* max-width: 600px; */
    flex-grow: 1;
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
