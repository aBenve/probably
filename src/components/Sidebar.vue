<template>
  <div @click="closeSidebar">
    <transition name="slide">
      <div v-if="isSidebarOn">SIDEBAR</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    isSidebarOn: true
  }),
  methods: {
    closeSidebar() {
      this.isSidebarOn = false
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

.sidebar-backdrop {
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}
</style>