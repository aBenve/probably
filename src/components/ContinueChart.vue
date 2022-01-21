<template>
  <LineChart  v-bind="lineChartProps" />
</template>
<script>
import {computed, defineComponent} from 'vue';
import {LineChart, useLineChart } from 'vue-chart-3'
import { registerables, Chart} from 'chart.js'
import {mapGetters} from "vuex";
import {useStore} from "vuex";


export default defineComponent({
  name: "myChart",
  components:{ LineChart },
  props:{
    labels:[Array, Number],
    chartData:[Array, Number],
    color:String
  },
  computed: {
    ...mapGetters({
      distribution: 'getCurrentOption'
    }),

  },

  setup(props) {

    Chart.register(...registerables)

    const store = useStore()

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
    }))

    const testData = computed(() => ({
      labels: props.labels,
      datasets: [
        {
          data: props.chartData,
          fill:true,
          backgroundColor: props.color + '70',
          pointBackgroundColor: '#000',
          label:store.getters.getCurrentOption.name,
          borderWidth: 2,
          borderColor: props.color,
        },
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
