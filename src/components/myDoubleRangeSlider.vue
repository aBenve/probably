<template>
  <div>
    <div class="middle my-5" >
      <div class="multi-range-slider">

        <input type="range" id="input-left" min="0" :max="maxValue" v-model="sliderMin">
        <input type="range" id="input-right" min="0" :max="maxValue" v-model="sliderMax">

        <div class="slider">
          <div class="track"></div>
          <div class="range"></div>
          <div class="thumb left"></div>
          <div class="thumb right"></div>
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

  },
  data: () => ({
    sliderMin:0,
    sliderMax:0,
    maxValue:100
  }),
  watch:{
    sliderMin: function (){
      this.$emit("value-changed", [this.sliderMin.valueOf(), this.sliderMax.valueOf()])
    },
    sliderMax: function (){
      this.$emit("value-changed", [this.sliderMin.valueOf(), this.sliderMax.valueOf()])
    }
  }
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
  height: 10px;
  margin: 0 15px;
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: var(--gray-bg);
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: var(--accent-color, red);
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  background-color: var(--accent-color, red);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(98,0,238,0.1);
  transition: box-shadow .3s ease-in-out;
}
.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}
.slider > .thumb.right {
  right: 25%;
  transform: translate(15px, -10px);
}
.slider > .thumb.hover {
  box-shadow: 0 0 0 20px rgba(98,0,238,.1);
}
.slider > .thumb.active {
  box-shadow: 0 0 0 40px rgba(98,0,238,.2);
}

input[type=range] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
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