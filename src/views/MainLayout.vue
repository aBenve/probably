<template>
  <div class="bg flex h-screen w-screen p-5 justify-between">
    <SidebarPanel/>
    <div class="w-full flex flex-col lg:flex-row">
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
.data{
  background-color: #272A2E;

}
.graph{
  background-color: #272A2E;
}
</style>