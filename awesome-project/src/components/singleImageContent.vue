<template>
    <div class="content" style="justify-content:space-around;flexDirection:row" >
    <singleImageItem :model = "firstLists[0]" class = "singleImageItemLeft"> </singleImageItem>
    <singleImageItem :model = "firstLists[1]" class = "singleImageItemRight"> </singleImageItem>
    </div>
</template>

<style scoped>
.content{
  background-color: bisque;
}
.singleImageItemLeft{

  margin-right: 20px;
  flex-grow: 1;
}
.singleImageItemRight{
  flex-grow: 1;
}
</style>

<script>

import singleImageItem from './singleImageItem.vue'
export default {
  components:{
    singleImageItem

  },
  props :['firstLists'],

  
}

</script>

