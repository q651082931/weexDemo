<template>
  <div class="wrapper">
      <text>{{title}}</text>
  <BYWXCModelSelector ref='bywxcModelSelector' @EModelSelected='onModelSelected'/>
  <BYSelector :isShow="isShowModelSelector" @EModelSelectorClose="onModelSelectorClose"> </BYSelector>
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
import BYSelector from './BYSelector.vue'
import BYWXCModelSelector from './BYWXCModelSelector'

let dataJsonFile = require('./product-detail.json')
export default {
  components: {
  },
  data () {
    return {
      dataJson: dataJsonFile.data,
      title: '',
      isShowModelSelector: false,
      BYSelector,
      BYWXCModelSelector
    }
  },
  methods: {
    addShoppingCart () {
      this.$refs.bywxcModelSelector.display()
    },
    buyImediately () {
      this.isShowModelSelector = true
    },
    onModelSelectorClose () {
      this.isShowModelSelector = false
    },
    onModelSelected (model) {
      this.title = this.title + model
    }
  }
}
</script>
