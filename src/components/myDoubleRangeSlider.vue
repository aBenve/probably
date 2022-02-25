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
            @mouseover="this.$refs['thumb-left'].classList.add('hover'); this.$refs['range'].classList.add('hover')"
            @mouseleave="this.$refs['thumb-left'].classList.remove('hover'); this.$refs['range'].classList.remove('hover')"
            @mousedown="this.$refs['thumb-left'].classList.add('active');"
            @mouseup="this.$refs['thumb-left'].classList.remove('active');"
        >
        <input
            type="range"
            :step="step"
            :min="minValue"
            :max="maxValue"
            v-model="sliderMax"
            @mouseover="this.$refs['thumb-right'].classList.add('hover'); this.$refs['range'].classList.add('hover')"
            @mouseleave="this.$refs['thumb-right'].classList.remove('hover'); this.$refs['range'].classList.remove('hover')"
            @mousedown="this.$refs['thumb-right'].classList.add('active');"
            @mouseup="this.$refs['thumb-right'].classList.remove('active');"
        >

        <div class="slider">
          <div class="track"></div>
          <!-- <div @drag="draggingRange" @dragstart="dragStarted" @dragend="dragEnded" ref="range" class="range" :style=" -->
          <div  ref="range" class="range" :style="
            {
              left: coveredAreaLeft - +adjustPercentage + '%',
              right: (100 - coveredAreaRight - +adjustPercentage)  + '%'
            }">
          </div>
          <div ref="thumb-left" class="thumb left" :style="{left: coveredAreaLeft + '%'}"></div>
          <div ref="thumb-right" class="thumb right" :style="{right: (100 - coveredAreaRight) + '%'}"></div>
        </div>

      </div>
    </div>
    <div class="flex flex-row w-full justify-between ">
      <div class="text-lg font-bold num-data px-3 py-3 rounded-full ">
        <input type="number" :min="minValue" :max="maxValue" v-model="sliderMin" class=" focus:outline-none bg-transparent w-full" @input="checkBottom">
      </div>
      <div class="text-lg font-bold num-data px-3 py-3 rounded-full ">
        <input type="number" :min="minValue" :max="maxValue" v-model="sliderMax" class=" focus:outline-none bg-transparent w-full" @input="checkTop">
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
    step:Number,
  },
  data: () => ({
    sliderMin: 0,
    sliderMax: 0,
    coveredAreaLeft:0,
    coveredAreaRight:0,
    windowWidth: window.innerWidth,

    mouseXPosition:0

  }),
  mounted(){
    window.addEventListener("resize", ()=> this.windowWidth = window.innerWidth);
  },
  unmounted() {
    window.removeEventListener('resize', ()=> this.windowWidth = window.innerWidth);
  },
  computed:{
    adjustPercentage: function (){
      return this.windowWidth < 800 ? 3 : 1
    },
  },
  methods:{
    dragStarted:function(e){
      this.mouseXPosition = e.x
    },
    dragEnded:function (){
      
    },
    draggingRange:function (e){
      e.preventDefault();
      let offset = this.mouseXPosition - e.x
      console.log(offset)
      this.sliderMax = (this.sliderMax - offset/10).toFixed(2)
      this.sliderMin = (this.sliderMin - offset/10).toFixed(2)

      this.checkBottom()
      this.checkTop()

      this.mouseXPosition = e.x
    },
    checkTop: function(){
      if(this.sliderMax > this.maxValue)
        this.sliderMax = this.maxValue
      if(this.sliderMax < this.sliderMin)
        this.sliderMax = this.sliderMin
    },
    checkBottom: function (){
      if(this.sliderMin < this.minValue)
        this.sliderMin = this.minValue
      if(this.sliderMin > this.sliderMax)
        this.sliderMin = this.sliderMax

    }
  },
  watch:{

    maxValue: function(){
        this.sliderMax = this.maxValue
    },
    minValue: function(){
      this.sliderMin = this.minValue
    },
    sliderMin: function (){
      //this.sliderMin = Math.min(this.sliderMin, this.sliderMax  )


      let min = Math.min(this.sliderMin, this.sliderMax  )
      this.coveredAreaLeft = (( min - this.minValue) / (this.maxValue - this.minValue)) * 100
      //console.log( this.coveredAreaLeft)
      this.$emit("value-changed", [+min, this.sliderMax.valueOf()])
    },
    sliderMax: function (){
      //this.sliderMax = Math.max(this.sliderMax, this.sliderMin)

      let max = Math.max(this.sliderMin, this.sliderMax  )
      this.coveredAreaRight = ((max - this.minValue) / (this.maxValue - this.minValue)) * 100
      //console.log( this.coveredAreaRight)

      this.$emit("value-changed", [this.sliderMin.valueOf(), +max])
    }
  },
}
</script>

<style scoped>
.num-data{
  background-color: var(--black-darker);
  color: var(--accent-color, red);
  min-width: 5.5rem;
  max-width: 6.5rem;
  box-shadow: inset 0 0 0 0px var(--accent-color, red);
  transition: 0.2s ease-in-out;
}

.num-data:hover{
  box-shadow: inset 0 0 0 2px var(--accent-color, red);
}


.middle {
  position: relative;
  width: 100%;
}

.slider {
  position: relative;
  z-index: 1;
  height: 25px;
  margin: 0 12px;

}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 999px;
  background-color: var(--black-darker);
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
  transition: background-color .5s ease-in-out;
}
/*

  Todavia no anda el drag

.slider > .range:hover{
  cursor: ew-resize;
}
*/
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 25px;
  cursor: pointer;
  height: 25px;
  background: radial-gradient(circle, var(--black-darker) 50%,var(--accent-color, red) 55%);
  border-radius: 100%;
  box-shadow: 0 0 0 0 rgba(20,20,20,0.1); /* tuve que poner el var(--darker..) en rgb a mano... feo*/
  transition: box-shadow .3s ease-in-out;
}
.slider > .thumb.left {
  transform: translate(-12px, 0px);
}
.slider > .thumb.right {
  right: 0;
  transform: translate(12px, 0px);
}
.slider > .thumb.hover {
  box-shadow: 0 0 0 10px rgba(20,20,20, 0.4)
}
.slider > .thumb.active {
  box-shadow: 0 0 0 20px rgba(20,20,20, 0.4)
}
.slider > .range.hover{
  background-color: var(--accent-color-lighter, red);
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
  width: 25px;
  height: 25px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none;
  cursor: pointer;

}


</style>