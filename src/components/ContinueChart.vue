<template>
  <LineChart  v-bind="lineChartProps" />
</template>
<script>
import {computed, defineComponent} from 'vue';
import {LineChart, useLineChart } from 'vue-chart-3'
import { registerables, Chart} from 'chart.js'
import {mapGetters} from "vuex";
//import {useStore} from "vuex";


export default defineComponent({
  name: "myChart",
  components:{ LineChart },
  props:{
    labels:[Array, Number],
    chartData:[Array, Number],
    chartDistributionData:[Array, Number],
    borderColor:Array,
    bgColor:String,
  },
  computed: {
    ...mapGetters({
      distribution: 'getCurrentOption'
    }),

  },

  setup(props) {

    Chart.register(...registerables)

   // const store = useStore()

    const options = computed(() => ({
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        easing: 'linear',
        duration: 500
      },
      elements: {
        line: {
          tension: 0.1,
        }
      },
      legend: {
        display: true
      },
      scales: {
        A: {
          position: 'left',
        },
        B: {
          position: 'right',
          ticks: {
            max: 1,
            min: 0
          }
        }
      }
    }))

    const testData = computed(() => ({
      labels: props.labels,
      datasets: [
        {
          data: props.chartData,
          fill:true,
          yAxisID: 'A',
          backgroundColor: props.bgColor + '70',
          pointBackgroundColor: props.borderColor,
          label:'Density',
          borderWidth: 1,
          borderColor: props.borderColor,
        },
        {
          data: props.chartDistributionData,
          fill:true,
          yAxisID: 'B',
          label:'Distribution',
          backgroundColor: props.bgColor + '10',
          pointBackgroundColor: props.borderColor + '20',
          borderColor: props.bgColor + '10',
          pointRadius:0,
          tension:1

        }
      ],
    }))

    const {lineChartProps} = useLineChart({
      chartData:testData,
      options
    })

    return {lineChartProps, testData, options}
  },
})
</script>
