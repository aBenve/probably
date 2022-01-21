<template>
  <div class=" flex flex-col " >
    <div class="text-white font-bold">
      <div class="mb-10 text-4xl" :style="{color:distribution.color} ">
        {{ distribution.name }}
      </div>
      <div v-if="distribution.inputs.length === 1">
        <MySliderInput

          :label="distribution.inputs[0].label"
          :max-value="distribution.inputs[0].max"
          :step="distribution.inputs[0].step"
          :top-add="distribution.inputs[0].step * 5"
          :small-add="distribution.inputs[0].step"
          :top-subs="distribution.inputs[0].step * 5"
          :small-subs="distribution.inputs[0].step"

          :style="accentColor"

          @value-changed="valueChanged"

        />
      </div>

      <div v-else-if="distribution.inputs.length === 2">
        <DoubleSlider
            :first-label="distribution.inputs[0].label"
            :first-max-value="distribution.inputs[0].max"
            :first-step="distribution.inputs[0].step"
            :first-top-add="distribution.inputs[0].step * 5"
            :first-small-add="distribution.inputs[0].step"
            :first-top-subs="distribution.inputs[0].step * 5"
            :first-small-subs="distribution.inputs[0].step"

            :second-max-value="distribution.inputs[1].max"
            :second-label="distribution.inputs[1].label"
            :second-step="distribution.inputs[1].step"
            :second-top-add="distribution.inputs[1].step * 5"
            :second-small-add="distribution.inputs[1].step"
            :second-top-subs="distribution.inputs[1].step * 5"
            :second-small-subs="distribution.inputs[1].step"

            :style="accentColor"

            :related-sliders="distribution.related"

            @value-changed="valueChanged"

        />
      </div>

      <div v-else-if="distribution.inputs.length === 3">
        <TripleSlider
            :first-label="distribution.inputs[0].label"
            :max-value="distribution.inputs[0].max"
            :first-step="distribution.inputs[0].step"
            :first-top-add="distribution.inputs[0].step * 5"
            :first-small-add="distribution.inputs[0].step"
            :first-top-subs="distribution.inputs[0].step * 5"
            :first-small-subs="distribution.inputs[0].step"

            :second-label="distribution.inputs[1].label"
            :second-step="distribution.inputs[1].step"
            :second-top-add="distribution.inputs[1].step * 5"
            :second-small-add="distribution.inputs[1].step"
            :second-top-subs="distribution.inputs[1].step * 5"
            :second-small-subs="distribution.inputs[1].step"

            :style="accentColor"

        />
      </div>
    </div>
  </div>
</template>

<script>
import DoubleSlider from "./DoubleSlider";
import MySliderInput from "./MySliderInput";
import TripleSlider from "./TripleSlider";

export default {
  name: "InputArea",
  components: { MySliderInput, DoubleSlider, TripleSlider},

  props:{
    distribution:Object
  },

  methods:{
    valueChanged: function (a){
      this.$emit('value-changed', a)
    },
  },
  computed:{
    accentColor(){
      return{
        '--accent-color': this.distribution.color,
        '--accent-color-lighter': this.distribution.accentColor
      }
    },
  },
}
</script>

<style scoped>
.data{
  background-color: #272A2E;
}
</style>