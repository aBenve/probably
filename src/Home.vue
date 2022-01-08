<template>
  <div class="bg flex h-screen w-screen p-5 justify-between">
    <SidebarPanel/>

    <div class="w-full flex flex-col lg:flex-row">
      <DataArea/>
      <div class="rounded-2xl graph p-5  w-full w-full">GRAFICO</div>
    </div>
  </div>
</template>

<script>
import SidebarPanel from "./components/sidebar/SidebarPanel";
import DataArea from "./components/DataArea";


export default {
  name: "Home",
  components: {DataArea, SidebarPanel},

  methods:{

  }
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