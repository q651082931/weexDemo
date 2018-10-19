<template>
    <div class="content" style="justify-content:space-around;flexDirection:row" >
 
    </div>
</template>

<style scoped>
.content{
  background-color:blueviolet;
}
 
</style>

<script>

import singleImageItem from './singleImageItem.vue'
export default {
  components:{
    singleImageItem

  },
  props :['secondLists'],

  
}

</script>

