<template>
  <div class="  text-2xl flex flex-col overflow-auto ">
    <div class="text-gray-500 text-lg font-medium mt-10 ">
      <div class="mb-10">
        {{ distribution.description.directions}}
      </div>

      <div>
        <div class="text-lg subtitle">
          Density function
        </div>
        <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[0].eq"/>

        <div v-if="distribution.type === 'Continuous'">
          <div class="text-lg subtitle">
            Probability distribution function
          </div>
          <math-jax class="equation transition duration-75 ease-out" :latex="distribution.description.equations[1].eq"/>
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
  color: var(--accent-color)
}
.subtitle{
  color: var(--accent-color);
  margin: 1rem 0
}
</style>