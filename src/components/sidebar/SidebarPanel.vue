<template>
  <div class="mr-5 flex">
    <div class="flex-row lg:hidden ">
      <MenuIcon />
    </div>
    <div class=" rounded-2xl p-5 sidebar hidden lg:flex text-white sidebar ">
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
.sidebar{
  width: 15rem;
  background-color: #272A2E;
}
</style>