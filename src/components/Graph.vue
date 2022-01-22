<template>
  <div class="rounded-2xl graph p-5 w-full">
    <myChart

        v-if="distribution.type === 'Discrete'"

      :chartData="chartDataDiscrete"
      :labels="chartLabelsDiscrete"
      :color="distribution.color"
    />
    <ContinueChart
        v-if="distribution.type === 'Continuous'"

        :chartData="charDataContinuous"
        :labels="chartLabelsContinuous"
        :color="distribution.color"/>
    <!--todo: Must refactor this into a new component -->

    <MyDoubleRangeSlider
        :style="accentColor"
        @value-changed="updateResult"
    />
    <div class="text-gray-50 font-bold text-3xl result p-4 rounded-full my-5 flex flex-row justify-center">
      Proba: {{result}}
    </div>
    <div class="flex flex-row justify-center space-x-4 md:space-x-8 font-medium text-sm lg:text-lg mt-6">
      <div   class="p-4 rounded-full extra-data justify-center items-center flex-col flex md:flex-row">
        <div>
          Mean
        </div>
        <div class="ml-0 md:ml-3 mt-2 md:mt-0 font-semibold" :style="{color:distribution.color}">{{ distribution.mean(inputs).toFixed(3) }}</div>
      </div>
      <div  class=" p-4 rounded-full  extra-data justify-center items-center flex-col flex md:flex-row">
        <div>
          Variance
        </div>
        <div class="ml-0 md:ml-3 mt-2 md:mt-0 font-semibold" :style="{color:distribution.color}">{{ distribution.variance(inputs).toFixed(3) }}</div>
      </div>
      <div  class=" p-4 rounded-full  extra-data justify-center items-center flex-col flex md:flex-row">
        <div>
          SD
        </div>
        <div class="ml-0 md:ml-3 mt-2 md:mt-0 font-semibold" :style="{color:distribution.color}">{{ distribution.sd(inputs).toFixed(3) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import myChart from "./myChart";
import ContinueChart from "./ContinueChart";
import MyDoubleRangeSlider from "./myDoubleRangeSlider";
export default {
  name: "Graph",
  components: {MyDoubleRangeSlider, myChart,ContinueChart},
  data: () => ({
    labels: [],
    data: [],
    sliderValues:[],
    result:0
  }),
  computed: {
    ...mapGetters({
      distribution: "getCurrentOption",
      lowerValue: "getLowerValue",
      upperValue: "getUpperValue",
      inputs: "getInputsValues",
    }),

    // todo: getProbability solo usa los extremos que le damos, no pasa por los intermedios por ahora

    // x is an array
    getProbability: function(){
      let res = 0;

      if(this.inputs === -1)
        return 0


      if(this.distribution.type === "Discrete"){
        //x.forEach(val => res += this.distribution.P(val))
        for(let i = 0 ; i < this.sliderValues.length ; i++){
          res += this.distribution.P(this.inputs, this.sliderValues[i])
          console.log(res)
        }
        return res
      }

      //x.forEach(val => res += this.distribution.F(val))
      for(let i = 0 ; i < this.sliderValues.length ; i++){
        res += this.distribution.F(this.inputs, this.sliderValues[i])
        console.log(res)
      }

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

      console.log(lowerValue)
      console.log(upperValue)

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
    chartLabelsContinuous: function (){
      let lowerValue = Math.ceil(this.distribution.lowerValue(this.inputs))
      //const lowerValue = this.distribution.lowerValue(this.inputs).toFixed(2)
      let upperValue = Math.ceil(this.distribution.upperValue(this.inputs))

      let decimalLevel = 2

      console.log(lowerValue)
      console.log(upperValue)
      console.log(this.inputs)

      if (this.inputs === -1) return 0;

      let arr = [];

      if(this.distribution.name === 'Exponential'){
        upperValue = this.distribution.upperValue(this.inputs).toFixed(2)
        decimalLevel = 4
      }
        // Tomo 100 puntos:
        for(let i = 0 ; i < 101 ; i++){
          arr.push((lowerValue + (upperValue - lowerValue) * i/100).toFixed(decimalLevel))
        }

      console.log(arr)


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
    getProbaDiscrete: function (){return 0},
    getProbaContinuous: function(x){
      if(this.inputs !== -1)
        return this.distribution.F(this.inputs,x )
      return 0
    },
    updateResult: function(arr){
      this.sliderValues[0] = arr[0]
      this.sliderValues[1] = arr[1]

      this.result = this.getProbability.toFixed(3)
    },
  }
};
</script>

<style scoped  >


@media screen and (max-width: 500px){
  .extra-data{
    background-color: transparent !important;

  }
}
.result{
  background-color: var(--gray-bg);
}
.extra-data{
  background-color: var(--gray-bg);
  color: var(--text-gray);
}

.graph{
  background-color: #272A2E;
}
</style>
