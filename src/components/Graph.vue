<template>
  {{distribution.name}}
  {{distribution.inputs[0].value}}
  <div >
    <myChart :chartData="chartData" :labels="chartLabels" :color="distribution.color"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import myChart from "./myChart";
export default {
  name: "Graph",
  components:{ myChart},
  data:() => ({
    labels:[1,2,3,4,5],
    data:[1,2,3,4,5]

  }),
  computed: {
    ...mapGetters({
      distribution: 'getCurrentOption',
      lowerValue: 'getLowerValue',
      upperValue: 'getUpperValue',
      inputs: 'getInputsValues'
    }),

    chartData: function (){
      let toRet = []
      if(this.chartLabels === 0)
        return 0
      this.chartLabels.forEach(num => toRet.push(this.distribution.P(this.inputs,num)))
      return toRet
    },

    chartLabels: function() {
      console.log(this.lowerValue)
      console.log(this.upperValue)
      console.log(this.inputs)

      if(this.inputs === -1)
        return 0

      let arr = []
      if(!(this.lowerValue === 0))
        arr = [this.lowerValue]

      let aux = []
      for(let i = this.lowerValue ; i < this.upperValue; i++)
        aux.push(i)

      arr.push(aux)
      arr = arr.flat()

      arr.push(this.upperValue)

      return arr
    }
  },
}
</script>

<style scoped>

</style>