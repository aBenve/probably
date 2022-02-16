<template>
  <div class="bg  flex-row lg:flex h-screen w-screen p-5 md:pr-0 sm:pr-0 justify-between overflow-y-auto md:overflow-hidden">
    <SidebarPanel />
    <div class="w-full h-full flex flex-col lg:flex-row md:overflow-y-auto">
      <router-view v-slot="{Component}" >
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>

import SidebarPanel from "../components/sidebar/SidebarPanel";


export default {
  name: "MainLayout",
  components:{SidebarPanel}
}
</script>

<style scoped>

.bg{
  background-color: var(--gray-bg)
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>