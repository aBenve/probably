<template>
  <button @click="continuousToggle = !continuousToggle" class="mt-4">
    <div :class="continuousToggle ? 'active':''" class=" mb-4 hover:bg-pink-400 rounded-2xl p-2 text-xl font-semibold transition duration-75 ease-in">
      Continuas
    </div>
    <transition name="slideBottom">
      <div  v-if="continuousToggle" >
        <div class="mb-2 hover:bg-gray-500  rounded-2xl p-2 font-medium transition duration-75 ease-in" v-for="option in menu" :key="option">
          {{ option }}
        </div>
      </div>
    </transition>
  </button>
</template>
<script>
export default {
  name: 'ContinuousDropDownButton',
  data:() => ({
    continuousToggle: false,
    menu:[
      "Uniforme",
      "Exponencial",
      "Log-Normal",
      "Normal",
      "T",
    ]
  })
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
  transition: transform 0.2s ease;
}

.slideBottom-enter-from,
.slideBottom-leave-to {
  transform: translateY(-100%);
  opacity: 0;
  transition: all 150ms ease-in 0s
}
</style>
