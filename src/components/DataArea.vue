<template>
  <div class="  text-2xl flex flex-col  ">
    <div class="text-gray-500 text-lg font-medium mt-10 pr-5">
      <div class="mb-10 ">
        {{ distribution.description.directions}}
      </div>

      <div class="flex-col flex mb-10">
        <div class="flex-col text-lg">
          <div class=" subtitle">
            Density function
          </div>
          <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[0].eq"/>
        </div>

        <div class="flex-col text-lg" v-if="distribution.type === 'Continuous'">
          <div class=" subtitle">
            Probability distribution function
          </div>
          <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[1].eq"/>
        </div>
        <div class="text-lg flex flex-col ">
          <div class=" subtitle">
            Mean
          </div>
          <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[distribution.description.equations.length-3].eq"/>
        </div>
        <div class="text-lg flex flex-col">
          <div class=" subtitle">
            Variance
          </div>
          <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[distribution.description.equations.length-2].eq"/>
        </div>
        <div class="text-lg flex flex-col">
          <div class="subtitle">
            SD
          </div>
          <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[distribution.description.equations.length-1].eq"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DataArea',
  components:{ },
  props: {
    accentColor: {},
    distribution: {}
  },
}


</script>
<style scoped>

.equation:hover{
  color: var(--lightest-gray)
}
.subtitle{
  color: var(--accent-color);
  margin: 1rem 0;
  display: flex;
}
</style>