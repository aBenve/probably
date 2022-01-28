<template>
  <div>
    <Slider v-model="test.value" v-bind="test" :tooltips="false"/>
  </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      test: {
        value:[1,6],
      }
    }
  }
}
</script>

<style  src="@vueform/slider/themes/default.css">
:root{
  --slider-connect-bg: #a594fe;
  --slider-bg: #252525;
  --slider-height: 20px;
  --slider-handle-width: 20px;
  --slider-handle-height: 20px;
  --slider-handle-bg: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(165,148,254,1) 60%);
  --slider-tooltip-bg: #a594fe;

  --slider-handle-ring-width: 3px;
  --slider-handle-ring-color: #a594fe30;
}
</style>