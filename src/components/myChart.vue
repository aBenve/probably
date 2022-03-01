<template>
  <BarChart  :chartData="testData" :options="options" />
</template>
<script>
import {computed, defineComponent} from 'vue';
import {BarChart } from 'vue-chart-3'
import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js'
import {mapGetters} from "vuex";
import {useStore} from "vuex";


export default defineComponent({
  name: "myChart",
  components:{ BarChart },
  props:{
    labels:[Number, Array],
    chartData:[Number, Array],
    color:Array
  },
  computed: {
    ...mapGetters({
      distribution: 'getCurrentOption'
    }),

  },

  setup(props) {

    Chart.register(BarController, CategoryScale, LinearScale, BarElement)

    const store = useStore()

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        easing: 'ease',
        duration: 500
      },
      elements: {
        line: {
          tension: 0.9
        }
      },
      legend: {
        display: true
      },
      scales: {
        y: {
          alignToPixels:true
        }
      }
    }

    const testData = computed(() => ({
      labels: props.labels,
      datasets: [
        {
          data: props.chartData,
          backgroundColor: props.color,
          label:store.getters.getCurrentOption.name
        },
      ],
    }))
    return {testData, options}
  },
})
</script>
