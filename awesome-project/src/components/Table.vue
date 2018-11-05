<template>
    <div>
        <div v-for="(singleSpecData, i) in specs" :key="i">
            <text class="text-spec">{{singleSpecData.type}}</text>
            <specs-line class="div-spec-wrapper" :specs='singleSpecData.specs' />
        </div>
    </div>
</template>

<script>
import SpecsLine from './SpecsLine'
export default {
  props: ['specs'],
  components: {
    SpecsLine
  }
}
</script>

<style scoped>
.text-spec {
  font-size: 28px;
  margin-top: 30px;
  margin-left: 25px;
  color: #1f1f1f;
}
.div-spec-wrapper {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
