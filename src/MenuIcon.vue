<template>
  <div class="rounded-full flex hover:bg-red-600 transition duration-75 ease-in p-2 text-white text-xl"
        @click="openSideBar"
  >
    <fa icon="bars" :class="isSidebarOn ? 'active' : ''"/>
  </div>
</template>
<script>
export default {
  name: 'MenuIcon',
  data: () => ({
    isSidebarOn: false
  }),

  methods: {
    openSideBar(){
      this.isSidebarOn=true
    }
  }
}
</script>

<style scoped>

.active{
  color: red;
}

</style>
