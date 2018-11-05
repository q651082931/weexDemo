<template>
<wxc-popup class="selector" :show = "isShow" @wxcPopupOverlayClicked = "popupOverlayBottomClick">
    <div style="flex: 1;">
      <div style="flex-direction: row;">
        <image class="image-product" src="http://bfs.biyao.com/group1/M00/5D/B4/rBACVFu66JyAVJiNAAB7IYWU6uY968_400x400.jpg" />
        <div class="div-price">
          <text class="text-price">￥ 4389</text>
          <text class="text-period">生产周期：30天</text>
          <text class="text-selected">已选择：中青,S,3件</text>
        </div>
        <image class="image-close" />
      </div>
      <div class="div-divider" />
      <specs-table :specs="specsData" />
      <div class="div-divider" style="width: 700px" />
      <div class="div-count">
        <text class="text-count">购买数量</text>
        <wxc-stepper min="1" max="99" />
      </div>
      <div style="flex: 1" />
      <div class="div-divider" />
      <div class="div-button-bottom">
        <wxc-button :btn-style="buttonShoppingCartStyle" :text-style="textShoppingCartStyle" text="加入购物车" />
        <wxc-button :btn-style="buttonBuyImediatelyStyle" :text-style="textBuyImediatelyStyle" text="立即购买" />
      </div>
    </div>
</wxc-popup>
</template>
<style scoped>
.selector {
  width: 750px;
  height: 940px;
}
.div-divider {
  background-color: #e4e4e4;
  width: 750px;
  height: 2px;
  align-self: center;
}
.image-product {
  margin-left: 20px;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  position: relative;
  top: -20px;
}
.div-price {
  flex: 1;
  padding-left: 25px;
  padding-top: 25px;
}
.text-price {
  font-size: 28px;
  color: #ff3131;
}
.text-period {
  font-size: 22px;
  color: #868686;
  margin-top: 25px;
}
.text-selected {
  font-size: 22px;
  color: #373737;
  margin-top: 20px;
}
.image-close {
  width: 40px;
  height: 40px;
  background-color: red;
  margin-right: 20px;
  margin-top: 20px;
}
.div-count {
  margin-left: 25px;
  margin-top: 25px;
  margin-right: 25px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.text-count {
  font-size: 26px;
  color: #1f1f1f;
}
.div-button-bottom {
  flex-direction: row;
  width: 750px;
}
</style>
<script >
import { WxcPopup, WxcStepper, WxcButton } from 'weex-ui'
export default {
  props: ['isShow'],
  components: {
    WxcPopup,
    WxcStepper,
    WxcButton
  },
  data: () => ({
    specsData: [
      { type: '颜色', specs: ['中灰', '藏青', '蓝'] },
      { type: '尺寸', specs: ['S', 'M', 'L'] }
    ]
  }),
  methods: {
    popupOverlayBottomClick () {

    }
  },
  computed: {
    buttonShoppingCartStyle: function () {
      return {
        backgroundColor: 'white',
        borderRadius: '0px',
        width: '375px',
        height: '90px'
      }
    },
    textShoppingCartStyle: function () {
      return {
        backgroundColor: 'white',
        borderRadius: '0px',
        width: '375px',
        height: '90px'
      }
    },
    buttonBuyImediatelyStyle: function () {
      return {
        backgroundColor: 'white',
        borderRadius: '0px',
        width: '375px',
        height: '90px'
      }
    },
    textBuyImediatelyStyle: function () {
      return {
        backgroundColor: 'white',
        borderRadius: '0px',
        width: '375px',
        height: '90px'
      }
    }

  }
}
</script>
