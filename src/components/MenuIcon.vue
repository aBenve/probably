<template>
  <div  class="rounded-full flex hover:bg-gray-700 transition duration-75 ease-in  text-white text-xl mb-5"
        @click="openSideBar"
  >
    <fa icon="bars" :class="isSidebarOn ? 'opacity-0' : ''"/>
  </div>
  <transition name="slide">

      <div  v-if="isSidebarOn" class=" z-10 absolute mobile-sidebar rounded-2xl left-5 top-5  overflow-x-hidden" >

        <div class="flex flex-col justify-between h-full p-5">
          <div class="flex flex-col">
            <div class="flex justify-between flex-row  mb-10">
              <router-link to="/">
                <img  src="../assets/probABly-white.svg" alt="probab" height="10" width="120"/>
              </router-link>
              <div class="rounded-full flex hover:text-gray-500 transition duration-75 ease-in p-2 text-white text-xl">
                <fa icon="times" @click="closeSidebar" />
              </div>
            </div>

            <myDropdown name="Discrete"/>
            <myDropdown name="Continuous"/>

          </div>
          <div class="text-lg text-gray-500">
            version 1.0
          </div>
        </div>

      </div>
  </transition>
  <transition name="fade">
    <div v-if="isSidebarOn" class="absolute top-0 left-0 opacity-20 w-full h-full" @click="closeSidebar" :style="{backgroundColor:'black'}" >

    </div>
  </transition>
</template>
<script>
import myDropdown from "./myDropdown";

export default {
  name: 'MenuIcon',
  components:{myDropdown},
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
  width: 15rem;
  height: 40rem;
  background-color: #272A2E;
  -webkit-box-shadow: -2px -4px 50px 6px rgba(0,0,0,0.73);
  box-shadow: 25px 25px 50px 1px rgba(0,0,0,0.3);
}

</style>
