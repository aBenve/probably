<template>
  <Slider
      v-model="sliderObj.values"
      v-bind="sliderObj"
      :step="type"
      :max="maxValue"
      :min="minValue"
      :lazy="false"
      :options="options"
      @update="this.$emit('slider-changed', [sliderObj.values[0], sliderObj.values[1]])"
  />
  {{sliderObj.values}}
  {{maxValue}}
  {{minValue}}
  <div class="flex flex-row w-full justify-between  ">
    <div class="text-lg font-bold num-data px-3 py-3 rounded-full ">
      <input type="number" :min="minValue" :max="maxValue" v-model="sliderObj.values[0]" class=" focus:outline-none bg-transparent w-full">
    </div>
    <div class="text-lg font-bold num-data px-3 py-3 rounded-full ">
      <input type="number" :min="minValue" :max="maxValue" v-model="sliderObj.values[1]" class=" focus:outline-none bg-transparent w-full" >
    </div>
  </div>
</template>

<script>

import Slider from "@vueform/slider";

export default {
  name: "DoubleSliderLibrary",
  components:{Slider},
  data : function (){
    return{
      sliderObj:{
        values:[0,0],
      },
      options:{
        step:this.step,
        behaviour: 'drag',
      },
    }
  },
  props:{
    maxValue:Number,
    minValue:Number,
    step:Number,
    type:Number,
  },
  emits: ['slider-changed'],
  watch:{
    maxValue:function (){
      this.sliderObj.values[1] = this.maxValue
    },
    minValue: function (){
      this.sliderObj.values[0] = this.minValue
    },
  }
}
</script>

<style scoped>
.num-data{
  background-color: var(--black-darker);
  color: var(--accent-color, red);
  width: 6rem;
  box-shadow: inset 0 0 0 0px var(--accent-color, red);
  transition: 0.2s ease-in-out;
}

.num-data:hover{
  box-shadow: inset 0 0 0 2px var(--accent-color, red);
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
  outline: none;
}
</style>