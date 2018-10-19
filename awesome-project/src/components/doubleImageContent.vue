<template>
    <list class="list">
      <cell  class="content"> 
      <doubleImageItem :model = "secondLists[0]"></doubleImageItem>
      <doubleImageItem :model = "secondLists[0]"></doubleImageItem>
      </cell>
      <cell class="content"> 
      <doubleImageItem :model = "secondLists[1]"></doubleImageItem>
      <doubleImageItem :model = "secondLists[0]"></doubleImageItem>
      </cell>
    </list>
</template>

<style scoped>
.list{
  background-color:blueviolet;
  height: 600px;
}
.content{
  flex-direction: row;
  height: 300px;
}

</style>

<script>

import doubleImageItem from './doubleImageItem.vue'
export default {
  components:{
    doubleImageItem

  },
  props :['secondLists'],

  
}

</script>

