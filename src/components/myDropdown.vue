<template>
  <button @click="toggle = !toggle" class="mt-4">
    <div :class="toggle ? 'active':''" class=" mb-4 drop-options rounded-2xl p-2 px-4 text-xl font-medium transition duration-75 ease-in">
      <div class="flex flex-row justify-between items-center">
        {{name}}
        <transition name="rotate-arrow">
          <div>
            <fa :icon="toggle ? 'angle-down' : 'angle-up' " class=""/>
          </div>
        </transition>
      </div>
    </div>
    <transition name="slideBottom">
      <div  v-if="toggle" >
        <div class="mb-2 drop-options-menu rounded-2xl  font-medium transition duration-75 ease-in" v-for="option in menu" :key="option">
          <router-link  class="flex align-middle justify-center" :to="option.name">
            <div class="w-full h-full p-2">
              {{ option.name }}
            </div>
          </router-link>
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
        require: true,
      }
  },
  data:() => ({
    toggle: false,
  }),
  computed:{
    menu: function (){
      return userData.filter(obj => obj.type === this.name)
    }
  },
}
</script>
<style scoped>
.active{
  color: white;
  font-weight: 600;
}
.drop-options-menu:hover{
  background-color:rgba(47,51,57, 0.7);
}
.drop-options-menu{
  color:var(--text-gray);

}
.drop-options{
  color:var(--text-gray);
}
.drop-options:hover{
  background-color: rgba(47,51,57, 0.7);
}
.slideBottom-enter-active,
.slideBottom-leave-active
{
  transition: transform 0.2s ease-in-out;
}

.slideBottom-enter-from,
.slideBottom-leave-to {
  transform: translateY(-15%);
  opacity: 0;
  transition: all 150ms ease-in 0s
}

.rotate-arrow-enter-active,
.rotate-arrow-leave-active
{
  transition: rotate 0.5s ease-in-out;
}

.rotate-arrow-enter-from,
.rotate-arrow-leave-to {
  transform: rotate(180deg);
  transition: all 500ms ease-in 0s
}
</style>
