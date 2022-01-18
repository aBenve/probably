<template>
  <div class="rounded-2xl graph p-5 w-full">
    <myChart
      :chartData="chartData"
      :labels="chartLabels"
      :color="distribution.color"
    />
    <!--todo: Must refactor this into a new component -->
    <div class="flex flex-row justify-center space-x-4 md:space-x-8 font-medium text-sm lg:text-lg mt-6">
      <div   class="p-4 rounded-full extra-data justify-center items-center flex-col flex lg:flex-row">
        <div>
          Mean
        </div>
        <div class="ml-0 lg:ml-3 mt-2 lg:mt-0 font-semibold" :style="{color:distribution.color}">{{ distribution.mean(inputs).toFixed(3) }}</div>
      </div>
      <div  class=" p-4 rounded-full  extra-data justify-center items-center flex-col flex lg:flex-row">
        <div>
          Variance
        </div>
        <div class="ml-0 lg:ml-3 mt-2 lg:mt-0 font-semibold" :style="{color:distribution.color}">{{ distribution.variance(inputs).toFixed(3) }}</div>
      </div>
      <div  class=" p-4 rounded-full  extra-data justify-center items-center flex-col flex lg:flex-row">
        <div>
          SD
        </div>
        <div class="ml-0 lg:ml-3 mt-2 lg:mt-0 font-semibold" :style="{color:distribution.color}">{{ distribution.sd(inputs).toFixed(3) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import myChart from "./myChart";
export default {
  name: "Graph",
  components: { myChart },
  data: () => ({
    labels: [],
    data: [],
  }),
  computed: {
    ...mapGetters({
      distribution: "getCurrentOption",
      lowerValue: "getLowerValue",
      upperValue: "getUpperValue",
      inputs: "getInputsValues",
    }),

    chartData: function () {
      let toRet = [];
      if (this.chartLabels === 0) return 0;
      this.chartLabels.forEach((num) =>
        toRet.push(this.distribution.P(this.inputs, num))
      );
      return toRet;
    },

    chartLabels: function () {

      const lowerValue = Math.floor(this.distribution.lowerValue(this.inputs))
      const upperValue = Math.floor(this.distribution.upperValue(this.inputs))

      if (this.inputs === -1) return 0;


      let arr = [lowerValue];

      let aux = [];
      for (let i = lowerValue + 1; i < upperValue; i++) aux.push(i);

      arr.push(aux);
      arr = arr.flat();

      arr.push(upperValue);

      return arr;
    },
  },
};
</script>

<style scoped>

@media screen and (max-width: 500px){
  .extra-data{
    background-color: transparent !important;

  }
}

.extra-data{
  background-color: var(--gray-bg);
  color: var(--text-gray);
}

.graph{
  background-color: #272A2E;
}
</style>
