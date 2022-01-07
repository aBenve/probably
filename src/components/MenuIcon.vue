<template>
  <div v-if="!isSidebarOn" class="rounded-full flex hover:bg-red-600 transition duration-75 ease-in p-2 text-white text-xl"
        @click="openSideBar"
  >
    <fa icon="bars" :class="isSidebarOn ? 'active' : ''"/>
  </div>

  <transition name="slide">
    <div v-if="isSidebarOn" class="absolute border-2 border-rose-500 mobile-sidebar rounded-2xl left-5 top-5  overflow-x-hidden">

      <div class="flex flex-col justify-between h-full p-5">
        <div class="flex flex-col">
          <div class="flex justify-between flex-row items-center mb-10">
            probab logo
            <div class="rounded-full flex hover:text-red-600 transition duration-75 ease-in p-2 text-white text-xl">
              <fa icon="times" @click="closeSidebar"/>
            </div>
          </div>
          <DiscreteDropDownButton/>
          <ContinuousDropDownButton/>

        </div>
        <div class="text-white">
          Logo
        </div>
      </div>

    </div>
  </transition>

</template>
<script>
import DiscreteDropDownButton from "./DiscreteDropDownButton";
import ContinuousDropDownButton from "./ContinuousDropDownButton";

export default {
  name: 'MenuIcon',
  components: {ContinuousDropDownButton, DiscreteDropDownButton},
  data: () => ({
    isSidebarOn: window.innerWidth >= 1024,

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


.mobile-sidebar{
  width: 15rem;
  height: 40rem;
  background-color: #272A2E;
}

</style>
