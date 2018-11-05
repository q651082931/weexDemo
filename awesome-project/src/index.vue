<template>
  <div class="wrapper">
  <ProductDetail class="ProductDetail"> </ProductDetail>
  </div>
</template>
<style scoped>
.wrapper{
  background-color: aquamarine;
}
</style>

<script>
import ProductDetail from './components/ProductDetail.vue'

// console.log(dataJsonFile.mdata)
export default {
  components: {
    ProductDetail

  },
  data () {
    return {
    }
  },
  methods: {
    logdata () {
      console.log(this.dataJson)
    }
  }
}
</script>
