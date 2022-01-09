<template>
  <div class="w-full flex flex-col lg:flex-row">
    <DataArea/>
    <div class="rounded-2xl graph p-5  w-full w-full">GRAFICO</div>
  </div>
</template>

<script>
import DataArea from "../components/DataArea";


export default {
  name: "WorkingOption",
  components: {DataArea},
}
</script>

<style scoped>
.graph{
  background-color: #272A2E;
}
</style>