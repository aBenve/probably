<template>
  <div class="mr-5 flex">
    <div class="flex-row lg:hidden ">
      <MenuIcon />
    </div>
    <div class=" lg:flex hidden">
      <Sidebar/>
    </div>
  </div>
</template>

<script>

import MenuIcon from "../MenuIcon";
import Sidebar from "./Sidebar";
export default {
  name: "SidebarPanel",
  components:{MenuIcon, Sidebar},
}

</script>

<style scoped>

</style>