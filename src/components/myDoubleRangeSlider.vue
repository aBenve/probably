<template>
  <div>
    <div class="middle my-5" >
      <div class="multi-range-slider">

        <input
            type="range"
            :step="step"
            :min="minValue"
            :max="maxValue"
            v-model="sliderMin"
            @mouseover="this.$refs['thumb-left'].classList.add('hover')"
            @mouseleave="this.$refs['thumb-left'].classList.remove('hover')"
        >
        <input
            type="range"
            :step="step"
            :min="minValue"
            :max="maxValue"
            v-model="sliderMax"
            @mouseover="this.$refs['thumb-right'].classList.add('hover')"
            @mouseleave="this.$refs['thumb-right'].classList.remove('hover')"
        >

        <div class="slider">
          <div class="track"></div>
          <div class="range" :style="
            {
              left: coveredAreaLeft - 1 + '%',
              right: (100 - coveredAreaRight - 2)  + '%'
            }">
          </div>
          <div ref="thumb-left" class="thumb left" :style="{left: coveredAreaLeft + '%'}"></div>
          <div ref="thumb-right" class="thumb right" :style="{right: (100 - coveredAreaRight) + '%'}"></div>
        </div>

      </div>
    </div>
    <div class="flex flex-row w-full justify-between  ">
      <div class="text-lg font-bold num-data px-5 py-3 rounded-full mx-6">
        <input type="number" min="0" :max="maxValue" v-model="sliderMin" class=" focus:outline-none bg-transparent w-full">
      </div>
      <div class="text-lg font-bold num-data px-5 py-3 rounded-full mx-6 ">
        <input type="number" min="0" :max="maxValue" v-model="sliderMax" class=" focus:outline-none bg-transparent w-full">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "myDoubleRangeSlider",
  props:{
    maxValue:Number,
    minValue:Number,
    step:Number
  },
  data: () => ({
    sliderMin: 0,
    sliderMax: 0,
    coveredAreaLeft:0,
    coveredAreaRight:0,
  }),
  watch:{
    sliderMin: function (){

      this.sliderMin = Math.min(this.sliderMin, this.sliderMax  )
      this.coveredAreaLeft = (( this.sliderMin - this.minValue) / (this.maxValue - this.minValue)) * 100
      this.$emit("value-changed", [this.sliderMin.valueOf(), this.sliderMax.valueOf()])
    },
    sliderMax: function (){
      this.sliderMax = Math.max(this.sliderMax, this.sliderMin)
      this.coveredAreaRight = ((this.sliderMax - this.minValue) / (this.maxValue - this.minValue)) * 100
      this.$emit("value-changed", [this.sliderMin.valueOf(), this.sliderMax.valueOf()])
    }
  },
}
</script>

<style scoped>
.num-data{
  background-color: #252525;
  color: var(--accent-color, red);
  width: 5.5rem;
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
.middle {
  position: relative;
  width: 100%;

}

.slider {
  position: relative;
  z-index: 1;
  height: 25px;
  margin: 0 10px;

}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background-color: var(--gray-bg);
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background-color: var(--accent-color, red);
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 25px;
  height: 25px;
  background: radial-gradient(circle, var(--gray-bg) 50%,var(--accent-color, red) 55%);
  border-radius: 100%;
  box-shadow: 0 0 0 0 rgba(98,0,238,0.1);
  transition: box-shadow .3s ease-in-out;
}
.slider > .thumb.left {
  left: 0;
  transform: translate(-8px, 0px);
}
.slider > .thumb.right {
  right: 0;
  transform: translate(17px, 0px);
}
.slider > .thumb.hover {
  box-shadow: 0 0 0 20px rgba(98,0,238,.5);
}


input[type=range] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  top: 7px;
  opacity: 0;
}
input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none;
}


</style>