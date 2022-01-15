<template>
  {{distribution.inputs[0].value}}
  <BarChart  :chartData="testData"  />
</template>
<script>
import {computed, defineComponent} from 'vue';
import {BarChart } from 'vue-chart-3'
import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js'
import {mapGetters} from "vuex";


export default defineComponent({
  name: "myChart",
  components:{BarChart },
  props:{
    labels:Array,
    chartData:Array,
    color:String
  },
  computed: {
    ...mapGetters({
      distribution: 'getCurrentOption'
    }),

  },

  setup(props) {

    Chart.register(BarController, CategoryScale, LinearScale, BarElement)

    const testData = computed(() => ({
      labels: props.labels,
      datasets: [
        {
          data: props.chartData,
          backgroundColor: props.color,
        },
      ],
    }))
    return {testData}
  },
})
</script>
