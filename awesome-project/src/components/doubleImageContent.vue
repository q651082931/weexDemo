<template>
    <list class="list">
      <cell> 
      <doubleImageItem :model = "secondLists[0]"></doubleImageItem>
      </cell>
      <cell> 
      <doubleImageItem :model = "secondLists[1]"></doubleImageItem>
      </cell>
    </list>
</template>

<style scoped>
.list{
  background-color:blueviolet;
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

