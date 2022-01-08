<template>
  <button @click="toggle = !toggle" class="mt-4">
    <div :class="toggle ? 'active':''" class=" mb-4 hover:bg-pink-400 rounded-2xl p-2 text-xl font-semibold transition duration-75 ease-in">
      {{name}}
    </div>
    <transition name="slideBottom">
      <div  v-if="toggle" >
        <div class="mb-2 hover:bg-gray-500  rounded-2xl p-2 font-medium transition duration-75 ease-in" v-for="option in menu" :key="option">
          {{ option.name }}
        </div>
      </div>
    </transition>
  </button>
</template>
<script>
import userData from "./sidebar/optionsInfo"

export default {
  name: 'myDropdown',
  props:{
      name: {
        type: String,
        require: true
      }
  },
  data:() => ({
    toggle: false,
  }),
  computed:{
    menu: function (){
      return userData.filter(obj => obj.type === this.name)
    }
  }

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
