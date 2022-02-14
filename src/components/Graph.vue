<template>
  <div class="rounded-2xl graph p-5 w-full flex-col justify-center">
    <!--<SliderTest/> -->
    <ExtraData/>

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
        class="ml-10"
        :style="accentColor"
        :minValue="this.distribution.lowerValue(this.inputs)"
        :maxValue="this.distribution.upperValue(this.inputs)"
        :step="this.distribution.type === 'Discrete' ? 1 : 0.01"
        @value-changed="updateResult"
    />
    <ResultWithRipple :accent-color="accentColor" :result="result"/>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import myChart from "./myChart";
import ContinueChart from "./ContinueChart";
import MyDoubleRangeSlider from "./myDoubleRangeSlider";
import ExtraData from "./ExtraData";
import ResultWithRipple from "./ResultWithRipple";
//import SliderTest from "./sliderTest";
export default {
  name: "Graph",
  components: {ResultWithRipple, ExtraData, MyDoubleRangeSlider, myChart,ContinueChart},
  data: () => ({
    sliderValues:[],
    result:0,
    coloredBars:[],
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
    accentColor(){
      return{
        '--accent-color': this.distribution.color,
        '--accent-color-lighter': this.distribution.accentColor
      }
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

      const lowerValue = Math.floor(this.distribution.lowerValue(this.inputs))
      const upperValue = Math.floor(this.distribution.upperValue(this.inputs))

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
      let lowerValue = Math.ceil(this.distribution.lowerValue(this.inputs))
      //const lowerValue = this.distribution.lowerValue(this.inputs).toFixed(2)
      let upperValue = Math.ceil(this.distribution.upperValue(this.inputs))

      let decimalLevel = 2

      //console.log(lowerValue)
      //console.log(upperValue)
      //console.log(this.inputs)

      if (this.inputs === -1) return 0;

      let arr = [];

      if(this.distribution.name === 'Exponential'){
        upperValue = this.distribution.upperValue(this.inputs).toFixed(2)
        decimalLevel = 4
      }
        // Tomo 100 puntos:
        for(let i = 0 ; i < 101 ; i++){
          let value = (lowerValue + (upperValue - lowerValue) * i/100).toFixed(decimalLevel)
          // La idea es interesante, pero se ve feo.
          //if(value < this.sliderValues[0] || value > this.sliderValues[1])
          //  arr.push(null)
          //else
            arr.push(value)

        }

      /*

      let aux = [];
      for (let i = lowerValue + 0.5; i < upperValue; i+=0.5) aux.push(i);

      arr.push(aux);
      arr = arr.flat();

      arr.push(upperValue);

       */
      return arr;
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
  background-color: #272A2E;
}
</style>
