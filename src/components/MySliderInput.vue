<template>
  <div class="mt-5" >
    <div class="flex flex-row items-center justify-between mb-5">
      <div class="text-lg font-medium">
        {{ label }}
      </div>
      <div class="text-lg font-bold num-data px-4 py-3 rounded-full flex ">
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

      <input type="range" :step="step" class="w-full cursor-pointer slider mb-5 transition duration-1000 ease-in-out" :min="minValue" :max="maxValue" v-model="value"/>
      <!--

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
            -->

    </div>
  </div>
</template>
<script>
//import Slider from '@vueform/slider'
import {mapGetters} from "vuex";

export default {
  name: 'mySliderInput',
  components: {},
  data: function (){
    return{
      value: this.prevValue,
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


  computed:{
    ...mapGetters([
      'getCurrentOption',
    ]),

  },

  methods:{
    increaseValue(n){
      if(this.value === "0")
        this.value = 0
      if(+this.value + +n > this.maxValue)
        return
      this.value = (+this.value +  +n).toFixed(3)
    },
    decreaseValue(n){
      if(this.value === "0")
        this.value = 0
      if(+this.value - +n < 0 || +this.value - +n < this.minValue)
        return
      this.value = (+this.value -  +n).toFixed(3)
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
    minValue:function (){
      if(this.value < this.minValue)
        this.value = this.minValue
    },
    prevValue: function (){
      return this.value = this.prevValue
    }
  }
}
</script>

<style src="@vueform/slider/themes/default.css">

</style>
<style>
/*
  Fue bastante raro y dificil ponerle los colores al slider de la libreria. todo: Habria que arreglar el tema del accent-color que esta por todos lados bastante mal.
 */
.slider-connect:hover{
  background-color: var(--accent-color-lighter);
}
</style>
<style scoped>


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
.num-input{
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
  min-width: 5.5rem;
  max-width: 5.5rem; /* todo: may be changed */
  box-shadow: inset 0 0 0 0px var(--accent-color);
  transition: 0.2s ease-in-out;
}

.num-data:hover{
  box-shadow: inset 0 0 0 2px var(--accent-color);
}


.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid var(--accent-color);
  background: var(--black-darker);
  cursor: pointer;
  /*transform: translate(0,-7.5px);*/
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
  /*height: 10px;*/
  transition: 0.5s ease-in-out;
}

.slider::-webkit-slider-runnable-track:hover {
  opacity: 1;
}


.slider::-moz-range-thumb {
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

.slider::-moz-range-thumb:hover {
  border: 3px solid var(--accent-color-lighter);
  box-shadow: -510px 0 0 500px var(--accent-color-lighter);

}

.slider::-moz-range-track {
  overflow: hidden;
  border-radius: 50px;
}

.slider::-moz-range-track:hover {
  opacity: 1;
}

</style>