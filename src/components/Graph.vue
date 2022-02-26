<template>
  <div class="rounded-2xl graph p-5 w-full flex-col justify-center  overflow-y-auto">
    <!--<SliderTest/> -->
    <ExtraData/>



    <!-- Si armo mas botones, estaria bueno que sea en un componente de menu con todas las opciones disponibles pero deshabilitadas las no permitidas.-->
    <div class="my-2">
      <toggle-button v-if="this.distribution.type === 'Discrete'" tittle="Fix sliders" @triggered="fixSliders = !fixSliders"/>
    </div>

    <div class="">
      <myChart
        v-if="distribution.type === 'Discrete'"

        :chartData="chartDataDiscrete"
        :labels="chartLabelsDiscrete"
        :color="getColoredBars"

      />
      <ContinueChart
          v-if="distribution.type === 'Continuous'"

          :chartData="charDataContinuous"
          :chartDistributionData="chartDistributionDataContinuous"
          :labels="chartLabelsContinuous"
          :border-color="getColoredBars"
          :bg-color="distribution.color"


      />
        <MyDoubleRangeSlider

            v-if="!fixSliders"

            :minValue="minValueSlider"
            :maxValue="maxValueSlider"
            :step="this.distribution.type === 'Discrete' ? 1 : 0.01"

            @value-changed="updateResult"
            class="ml-8"
        />
      <SingleSliderSelector

          v-if="fixSliders"
          :min="minValueSlider"
          :max="maxValueSlider"
          :step="this.distribution.type === 'Discrete' ? 1 : 0.01"
          @value-changed="updateResult"

          class="pl-8 "
      />
    </div>

    <!--
        <DoubleSliderLibrary
          :type="this.distribution.type === 'Discrete' ? 1 : -1"
          :step="this.distribution.type === 'Discrete' ? 1 : 0.01"
          :minValue="minValueSlider"
          :maxValue="maxValueSlider"
          @slider-changed="updateResult"
        />
    -->
    <ResultWithRipple  :result="result" class="my-5"/>

  </div>

</template>

<script>
import {mapGetters} from "vuex";
import myChart from "./myChart";
import ContinueChart from "./ContinueChart";
import MyDoubleRangeSlider from "./myDoubleRangeSlider";
import ExtraData from "./ExtraData";
import ResultWithRipple from "./ResultWithRipple";
import ToggleButton from "./ToggleButton";
import SingleSliderSelector from "./SingleSliderSelector";
//import DoubleSliderLibrary from "./DoubleSliderLibrary";
//import SliderTest from "./sliderTest";
export default {
  name: "Graph",
  components: {
    SingleSliderSelector,
    ToggleButton, MyDoubleRangeSlider, ResultWithRipple, ExtraData, myChart,ContinueChart},
  data: () => ({
    sliderValues:[0,0],
    result:0,
    coloredBars:[],
    fixSliders: false
  }),
  computed: {
    ...mapGetters({
      distribution: "getCurrentOption",
      inputs: "getInputsValues",
    }),
    getColoredBars: function (){

      let res = []

      if(this.distribution.type === "Discrete"){
        for(let i = 0 ; i < this.chartLabelsDiscrete.length-1 ; i++){
          res[i] = 'rgb(37,37,37)'
          if(this.chartLabelsDiscrete[i] >= this.sliderValues[0] && this.chartLabelsDiscrete[i] <= this.sliderValues[1])
            res[i] = this.distribution.color
        }
        return res
      }

      for(let i = 0 ; i < this.chartLabelsContinuous.length-1 ; i++){
        res[i] = 'rgb(37,37,37)'
        if(this.chartLabelsContinuous[i] >= this.sliderValues[0] && this.chartLabelsContinuous[i] <= this.sliderValues[1]){
          res[i] = this.distribution.color
        }
      }
      return res


    },
    // todo: getProbability solo usa los extremos que le damos, no pasa por los intermedios por ahora
    getProbability: function(){
      let res = 0;

      if(this.inputs === -1)
        return 0

      if(this.distribution.type === "Discrete"){
        for(let i = 0 ; i < this.chartLabelsDiscrete.length-1 ; i++){
          if(this.chartLabelsDiscrete[i] >= this.sliderValues[0] && this.chartLabelsDiscrete[i] <= this.sliderValues[1])
            res += this.distribution.P(this.inputs, this.chartLabelsDiscrete[i])
        }
        return res
      }

      const a = this.distribution.F(this.inputs, this.sliderValues[0])
      const b = this.distribution.F(this.inputs, this.sliderValues[1])

      //console.log(a)
      //console.log(b)

      res = b - a
      return res
    },

    chartDataDiscrete: function () {
      let toRet = [];
      if (this.chartLabelsDiscrete === 0) return 0;
      this.chartLabelsDiscrete.forEach((num) =>
        toRet.push(this.distribution.P(this.inputs, num))
      );
      return toRet;
    },

    chartLabelsDiscrete: function () {

      const lowerValue = Math.ceil(this.distribution.lowerValue(this.inputs))
      const upperValue = Math.ceil(this.distribution.upperValue(this.inputs))

      if (this.inputs === -1) return 0;

     // console.log(lowerValue)
      //console.log(upperValue)

      let arr = [lowerValue];

      let aux = [];
      for (let i = lowerValue + 1; i < upperValue; i++) aux.push(i);

      arr.push(aux);
      arr = arr.flat();

      arr.push(upperValue);

      return arr;
    },
    charDataContinuous: function (){
      let toRet = [];
      if (this.chartLabelsContinuous === 0) return 0;
      this.chartLabelsContinuous.forEach((num) =>
          toRet.push(this.distribution.P(this.inputs, num))
      );
      return toRet;
    },

    chartDistributionDataContinuous: function (){
      let toRet = [];
      if (this.chartLabelsContinuous === 0) return 0;

      this.chartLabelsContinuous.forEach((num) =>
          toRet.push(this.distribution.F(this.inputs, num))
      );
      return toRet;
    },

    chartLabelsContinuous: function (){

      if (this.inputs === -1) return 0;

      //let lowerValue = Math.ceil(this.distribution.lowerValue(this.inputs))
      let lowerValue = this.distribution.lowerValue(this.inputs).toFixed(2)
      //let upperValue = Math.ceil(this.distribution.upperValue(this.inputs))
      let upperValue = this.distribution.upperValue(this.inputs).toFixed(2)

      let decimalLevel = 3 // MAGIC NUMBER

      //console.log("Lower " + lowerValue)
      //console.log("Upper " + upperValue)
      //console.log(this.inputs)



      let arr = [];

      if(this.distribution.name === 'Exponential'){
        //upperValue = this.distribution.upperValue(this.inputs).toFixed(2)
        decimalLevel = 4 // MAGIC NUMBER
      }
      // Tomo 100 puntos:
      for(let i = 0 ; i < 101 ; i++){
        let value = (+lowerValue + (+upperValue - +lowerValue) * i/100)
        value = Number(+value).toFixed(decimalLevel)

        // La idea es interesante, pero se ve feo.
        //if(value < this.sliderValues[0] || value > this.sliderValues[1])
        //  arr.push(null)
        //else
          arr.push(+value)
      }

      /*

      let aux = [];
      for (let i = lowerValue + 0.5; i < upperValue; i+=0.5) aux.push(i);

      arr.push(aux);
      arr = arr.flat();

      arr.push(upperValue);

       */
      return arr;
    },

    minValueSlider: function(){
      if(this.inputs === -1)
        return 1
      let lower = this.distribution.lowerValue(this.inputs)
      return this.distribution.type === 'Discrete' ? +Math.floor(lower) : +lower.toFixed(2)
    },
    maxValueSlider: function (){

      if(this.inputs === -1)
        return 1
      let upper = this.distribution.upperValue(this.inputs)
      return this.distribution.type === 'Discrete' ? +Math.floor(upper) : +upper.toFixed(2)
    }

  },
  methods:{
    updateResult: function(arr){
      this.sliderValues[0] = arr[0]
      this.sliderValues[1] = arr[1]

      this.result = this.getProbability.toFixed(5)
    },
  }
};
</script>

<style scoped  >


@media screen and (max-width: 500px){
}

.graph{
  background-color: var(--black-principal);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
