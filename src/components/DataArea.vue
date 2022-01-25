<template>
  <div class="  text-2xl flex flex-col ">
    <div class="text-gray-500 text-lg font-medium mt-10 ">
      {{ distribution.description.directions}}
      <div class="text-2xl hover:text-red-500 transition duration-100 ease my-10" >
        <math-jax id="equation" :latex="distribution.description.equations[0].eq"/>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DataArea',
  components:{ },
  props: {
    distribution: {}
  },
}


</script>
<style scoped>

</style>