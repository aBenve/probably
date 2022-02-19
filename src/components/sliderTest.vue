<template>
  <div>
    <Slider
        :step="step"
        :lazy="false"
        v-model="value"
        :min="minValue"
        :max="maxValue"
        :tooltips="false"

        style="{
            --slider-handle-ring-width: 3px;

            --slider-connect-bg: var(--accent-color, red);
            --slider-bg: #252525;
            --slider-height: 15px;
            --slider-handle-width: 25px;
            --slider-handle-height: 25px;
            --slider-handle-bg: radial-gradient(circle, rgba(37,37,37,1) 50%, var(--accent-color, red) 55%);

            --slider-handle-ring-color: #00000030
          }"
    />
  </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {

  props:{
      step:Number,
      preValue:[Number, Array],
      minValue: Number,
      maxValue: Number
  },

  components: {
    Slider,
  },
  data() {
    return {
      value: this.preValue
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