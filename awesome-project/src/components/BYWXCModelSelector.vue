<template>
    <bywxcModelSelector ref='bywxcModelSelector' />
</template>

<script>
let productDetailJson = require('./product-detail.json')
export default {
  data: () => ({
    data: productDetailJson.data
  }),
  methods: {
    toast () {
      this.$refs.bywxcModelSelector.toast(resultData => {
        this.$emit('EModelSelected', resultData.data1)
      })
    },
    display () {
      this.$refs.bywxcModelSelector.display(this.data, resultData => {
        this.$emit('EModelSelected', resultData)
      })
    }
  }
}
</script>
