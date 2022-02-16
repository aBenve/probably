<template>
    <div  class="rounded-full flex hover:bg-gray-700 transition duration-75 ease-in  text-white text-xl mb-5 cursor-pointer"
          @click="openSideBar"
    >
      <fa icon="bars" :class="isSidebarOn ? 'opacity-0' : ''"/>
    </div>
    <transition name="slide">
        <div v-if="isSidebarOn" class="z-20 absolute mobile-sidebar top-0 left-0  h-full" >
          <sidebar @dropDown-option-clicked="closeSidebar"/>
        </div>
    </transition>
    <transition name="fade">
      <div v-if="isSidebarOn" class=" z-10 absolute top-0 left-0 opacity-40 w-full h-full" @click="closeSidebar" :style="{backgroundColor:'black'}" ></div>
    </transition>
</template>
<script>
import Sidebar from "./sidebar/Sidebar";

export default {
  name: 'MenuIcon',
  components:{Sidebar},
  data: () => ({
    isSidebarOn: false,

  }),
  methods: {
    openSideBar(){
      this.isSidebarOn = true
    },
    closeSidebar(){
      this.isSidebarOn = false
    }
  }
}
</script>

<style scoped>

.active{
  color: white;
  font-weight: 600;
}
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

.fade-enter-active,
.fade-leave-active
{
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: all 150ms ease-in 0s
}

.mobile-sidebar{

  background-color: var(--black-principal);

  -webkit-box-shadow: -2px -4px 50px 6px rgba(0,0,0,0.73);
  box-shadow: 25px 25px 50px 1px rgba(0,0,0,0.3);
}

</style>
