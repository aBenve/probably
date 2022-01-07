<template>
  <button @click="discreteToggle = !discreteToggle" class="mt-4">
    <div :class="discreteToggle ? 'active':''" class=" mb-4 hover:bg-pink-400 rounded-2xl p-2 text-xl font-semibold transition duration-75 ease-in">
      Discretas
    </div>
    <transition name="slideBottom">
      <div  v-if="discreteToggle" >
        <div class="mb-2 hover:bg-gray-500  rounded-2xl p-2 font-medium transition duration-75 ease-in" v-for="option in menu" :key="option">
          {{ option }}
        </div>
      </div>
    </transition>
  </button>
</template>
<script>
export default {
  name: 'DiscreteDropDownButton',
  data:()=>({
    discreteToggle: false,
    menu:[
      "Binomial",
      "Geometrica",
      "Hipergeometrica",
      "Poisson",
    ]
  }),
}
</script>
<style scoped>
.active{
  color: white;
  font-weight: 600;
}

.slideBottom-enter-active,
.slideBottom-leave-active
{
  transition: transform 0.5s ease;

}


.slideBottom-enter-from,
.slideBottom-leave-to {
  transform: translateY(-100%);
  transition: all 150ms ease-in 0s;
  opacity: 0;

}
</style>
