<template>
  <BarChart  :chartData="testData" />
</template>
<script>
import {defineComponent, watchEffect} from 'vue';

import {BarChart } from 'vue-chart-3'
import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js'


export default defineComponent({
  name: "myChart",
  components:{BarChart },
  props:{
    data:Array
  },
  setup(props) {

    Chart.register(BarController, CategoryScale, LinearScale, BarElement)

    let myProp

    watchEffect(() => {
      myProp = props.data
    })

    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: myProp,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { testData };
  },
})
</script>
