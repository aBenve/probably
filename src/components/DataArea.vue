<template>
  <div class="  text-2xl flex flex-col overflow-auto ">
    <div class="text-gray-500 text-lg font-medium mt-10 ">
      {{ distribution.description.directions}}
      <div class="text-2xl hover:text-red-500 transition duration-100 ease my-10 overflow-auto equation"
           :key="eq"
           v-for="eq in distribution.description.equations"
      >
        <math-jax id="equation" :latex="eq.eq"/>
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

</style>