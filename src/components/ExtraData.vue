<template>
  <div class="flex flex-row justify-center space-x-4 sm:space-x-8 font-medium text-sm lg:text-lg my-0 sm:my-3 mb-0 sm:mb-5">
    <div class="p-4 rounded-full extra-data justify-center items-center flex-col flex sm:flex-row">
      <div>
        Mean
      </div>
      <div class="ml-0 sm:ml-3 mt-2 sm:mt-0 font-semibold" :style="{color:distribution.color}">{{
        distribution.mean(inputs).toFixed(3) }}
      </div>
    </div>
    <div class=" p-4 rounded-full  extra-data justify-center items-center flex-col flex sm:flex-row">
      <div>
        Variance
      </div>
      <div class="ml-0 sm:ml-3 mt-2 sm:mt-0 font-semibold" :style="{color:distribution.color}">{{
        distribution.variance(inputs).toFixed(3) }}
      </div>
    </div>
    <div class=" p-4 rounded-full  extra-data justify-center items-center flex-col flex sm:flex-row">
      <div>
        SD
      </div>
      <div class="ml-0 sm:ml-3 mt-2 sm:mt-0 font-semibold" :style="{color:distribution.color}">{{
        distribution.sd(inputs).toFixed(3) }}
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'ExtraData',

  computed:{
    ...mapGetters({
      distribution: "getCurrentOption",
      inputs: "getInputsValues",
    }),
  }
}
</script>
<style scoped>


@media screen and (max-width: 640px) {
  .extra-data {
    background-color: transparent !important;

  }
}

.extra-data {
  background-color: var(--black-darker);
  color: var(--text-gray);
}

</style>