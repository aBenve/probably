<template>
  <div>
    <Slider
        v-model="test.value"
        v-bind="test"
        :tooltips="false"/>
  </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {

  props:{

  },

  components: {
    Slider,
  },
  data() {
    return {
      test: {
        value:1,
      }
    }
  }
}
</script>

<style  >
:root{
  --slider-connect-bg: #a594fe;
  --slider-bg: #252525;
  --slider-height: 10px;
  --slider-handle-width: 25px;
  --slider-handle-height: 25px;
  --slider-handle-bg: radial-gradient(circle, rgba(37,37,37,1) 50%, rgba(165,148,254,1) 55%);
  --slider-tooltip-bg: #a594fe;

  --slider-handle-ring-width: 3px;
  --slider-handle-ring-color: #a594fe30;
}
</style>

<style src="@vueform/slider/themes/default.css">

</style>