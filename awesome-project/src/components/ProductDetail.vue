<template>
  <div class="wrapper">
      <text>{{title}}</text>
  <div class="bottomView">
      <text class="shoppingText" @click="addshoppingCart">加入购物车</text>
      <text class="buyText" @click="buyImediately">立即购买</text>
  </div>
  </div>
</template>

<style scoped>
.wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    flex-grow: 1;
}
.shoppingText{
  height: 90px;
  flex-grow: 1;
  font-size: 32px;
  background-color: red;
  color: #7f4395;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.buyText{
  height: 90px;
  flex-grow: 1;
  font-size: 32px;
  background-color: green;
  color: #7f4395;
  text-align: center;
  align-items: center;
}
.bottomView{
flex-direction: row;
position: absolute;
bottom: 0px;
left: 0px;
right:0px;
}
</style>

<script>
let dataJsonFile = require('./product-detail.json')
export default {
  components: {
  },
  data () {
    return {
      dataJson: dataJsonFile.data,
      title: '',
      isShowModelSelector: false
    }
  },
  methods: {
    addShoppingCart () {
    },
    buyImediately () {
      this.isShowModelSelector = true
    }
  }
}
</script>
