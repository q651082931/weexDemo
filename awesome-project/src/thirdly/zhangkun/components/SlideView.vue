<template>
    <div class="wraper frame">
        <slider class="frame" interval="3000" auto-play="true" >
            <div class="frame" v-for="(img,i) in imageList" v-bind:key="i">
                <image class="frame" resize="strech" v-bind:src="imageList[i].src"/>
            </div>
            <indicator class="indicator"/>
        </slider>
    </div>
</template>

<script>

export default {
  data () {
    return {
      imageList: [
        {
          src:
            'http://bfs.biyao.com/group1/M00/63/31/rBACW1vITcKAX-wiAADKyOSl6cI589.webp'
        },
        {
          src:
            'http://bfs.biyao.com/group1/M00/61/76/rBACVFvITdmAb7UNAABU86zpaZw373.webp'
        },
        {
          src:
            'http://bfs.biyao.com/group1/M00/61/76/rBACVFvITe6ASjEiAADGWDgPXz4054.webp'
        },
        {
          src:
            'http://bfs.biyao.com/group1/M00/63/2A/rBACYVvIThOAD4YjAACADC065_g026.webp'
        },
        {
          src:
            'http://bfs.biyao.com/group1/M00/63/2A/rBACYVvITkqAVu9jAADlrAV9LmQ237.webp'
        }
      ]
    }
  }
}
</script>

<style scoped>
.wraper {
  align-items: flex-start;
  justify-content: flex-start;
}
.frame {
  width: 750px;
  height: 750px;
}
.text {
  font-size: 28px;
  border-color: #a85695;
  border-width: 1px;
  color: white;
}
.indicator {
  position: absolute;
  right: 30px;
  bottom: 20px;
  item-color: #ffffffff;
  item-selected-color: #a85695;
}

</style>
