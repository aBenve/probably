<template>
  <div class="bg flex h-screen w-screen p-5 justify-between">
    <SidebarPanel/>

    <div class="w-full flex flex-col lg:flex-row">
      <div class="rounded-2xl data p-5 mb-5 lg:mb-0 lg:mr-5  lg:w-4/6">
        DATA
      </div>
      <div class="rounded-2xl graph p-5  w-full w-full">GRAFICO</div>
    </div>
  </div>
</template>

<script>
import SidebarPanel from "./components/sidebar/SidebarPanel";


export default {
  name: "Home",
  components: {SidebarPanel},

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