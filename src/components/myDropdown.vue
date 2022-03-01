<template>
  <button class="w-full" @click="toggle = !toggle" :class="toggle? 'active rounded-2xl' : ''">
    <div :class="toggle ? 'dropdown-active':'drop-options'" class=" mb-4  rounded-2xl p-2 px-4 text-lg font-medium transition duration-75 ease-in">
      <div class="flex flex-row justify-between items-center">

        <div class="flex-row ">
          <fa :icon="mainIcon" class="mr-2"/>
          <span>
            {{name}}
          </span>
        </div>

        <transition name="rotate-arrow">
          <div>
            <fa :icon="toggle ? 'angle-down' : 'angle-up' " class=""/>
          </div>
        </transition>
      </div>
    </div>
    <transition name="slideBottom">
      <div  v-if="toggle" >
        <div class="mb-2 drop-options-menu rounded-2xl text-sm  font-medium transition duration-75 ease-in mx-2" v-for="option in options" :key="option">
          <router-link  class="flex align-middle justify-center" :to="`/dashboard/${option}`" @click="this.$emit('dropDown-option-clicked')">
            <div class="w-full h-full p-2">
              {{ option }}
            </div>
          </router-link>
        </div>
      </div>
    </transition>
  </button>
</template>
<script>

export default {
  name: 'myDropdown',
  props:{
      name: {
        type: String,
        require: true,
      },
      mainIcon:{
        type:String,
        require: false
      },
    options:Object

  },
  data:() => ({
    toggle: false,
  }),
}
</script>
<style scoped>
/*
.active{
  background: rgba(60, 60, 60, 0.3);

}
 */
.active{
  background:  rgba(37, 37, 37, 0.7);

}
.dropdown-active{
  font-weight: 700;
  color: var(--lightest-gray);
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
