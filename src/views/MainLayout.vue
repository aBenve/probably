<template>
  <div class="bg flex h-screen w-screen p-5 justify-between overflow-auto">
    <SidebarPanel/>
    <div class="w-full h-full flex flex-col lg:flex-row">
      <router-view/>
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
  background-color: #2F3339;
}
</style>