<template>
  <div class="mt-5">
    <div class="flex flex-row items-center justify-between mb-5">
      <div class="text-lg font-medium">
        {{ label }}
      </div>
      <div class="text-lg font-bold num-data px-5 py-3 rounded-full ">
        <input type="number" :min="minValue" :max="maxValue" v-model="value" class="num-input focus:outline-none bg-transparent w-full">
      </div>
    </div>
    <div class="has-tooltip relative">
      <span class="tooltip rounded shadow-lg text-sm p-1 text-white p-3 flex flex-row opacity-80">
        <button @click="increaseValue(topAdd)" class="mr-5 change-value-buttons">
          +{{ topAdd }}
        </button>
         <button @click="increaseValue(smallAdd)" class="mr-5 change-value-buttons">
          +{{smallAdd}}
        </button>
        <button @click="decreaseValue(smallSubs)" class="mr-5 change-value-buttons">
          -{{smallSubs}}
        </button>
        <button @click="decreaseValue(topSubs)" class="change-value-buttons">
          -{{topSubs}}
        </button>
      </span>
      <input type="range" :step="step" class="w-full cursor-pointer slider mb-5 tap:transition duration-1000 ease-in-out" :min="minValue" :max="maxValue" v-model="value"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mySliderInput',

  data: function (){
    return{
      value: this.prevValue
    }
  },

  props:{
    label:String,
    maxValue:Number,
    step:Number,
    topAdd:Number,
    smallAdd: Number,
    topSubs:Number,
    smallSubs:Number,
    minValue:{
      default:0,
      type:Number
    },
    prevValue: {
      type:Number,
      default: 0
    },
  },

  methods:{
    increaseValue(n){
      // todo: Tiene algunos problemas. Hay veces que suma strings!!
      if(this.value === "0")
        this.value = 0
      if(+this.value + +n > this.maxValue)
        return
      this.value = +this.value +  +n
    },
    decreaseValue(n){
      if(this.value === "0")
        this.value = 0
      if(+this.value - +n < 0)
        return
      this.value = +this.value -  +n
    }
  },

  watch: {
    value: function() {
      this.$emit("value-changed", [+this.value])
    },
    maxValue: function (){
      if(this.value > this.maxValue)
        this.value = this.maxValue
    },
    prevValue: function (){
      return this.value = this.prevValue
    }
  }
}
</script>
<style scoped>

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
  outline: none;
}
.change-value-buttons{
  transition: 0.2s ease-in-out;
}
.change-value-buttons:hover {
  color: var(--accent-color, red)
}
.tooltip {
  @apply invisible absolute;
  background-color: rgba(0,0,0,0.5);
  opacity: 0;
  transition: 0.2s ease-in;
  position: absolute;
  right: 0;
  bottom: -2rem;
}

.has-tooltip:hover .tooltip {
  @apply visible z-50;
  opacity: 1;

}
.slider {
  -webkit-appearance: none;
  outline: none;
  border-radius: 50px;
  background: #252525;

}
.num-data{
  background-color: #252525;
  color: var(--accent-color);
  width: 5.5rem;
  box-shadow: inset 0 0 0 0px var(--accent-color);
  transition: 0.2s ease-in-out;
}

.num-data:hover{
  box-shadow: inset 0 0 0 2px var(--accent-color);
}

.slider::-webkit-slider-runnable-track:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid var(--accent-color);
  background: #252525;
  cursor: pointer;
  box-shadow: -510px 0 0 500px var(--accent-color);
  transition: 0.5s ease-in-out;
}

.slider::-webkit-slider-thumb:hover {
  border: 3px solid var(--accent-color-lighter);
  box-shadow: -510px 0 0 500px var(--accent-color-lighter);

}

.slider::-webkit-slider-runnable-track {
  overflow: hidden;
  border-radius: 50px;
}

</style>