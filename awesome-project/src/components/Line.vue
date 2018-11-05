<template>
      <div class="div-spec-wrapper">
        <wxc-button class="button-spec" :text="spec" type="white" size="small" v-for="(spec, i) in specs" :key="i" />
      </div>
</template>

<script>
import { WxcButton } from 'weex-ui'
export default {
  props: ['specs'],
  components: {
    WxcButton
  }
}
</script>

<style scoped>
.div-spec-wrapper {
  flex-wrap: wrap;
  flex-direction: row;
}
.button-spec {
  width: 100px;
  height: 50px;
  margin-left: 25px;
  margin-right: 25px;
}
</style>
