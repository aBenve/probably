<template>
  <div class="w-full flex flex-col lg:flex-row">
    <DataArea :distribution="distribution"/>
    <div class="rounded-2xl graph p-5  w-full w-full">GRAFICO</div>
  </div>
</template>

<script>
import DataArea from "../components/DataArea";
import optionsInfo from "../components/sidebar/optionsInfo";


export default {
  name: "WorkingOption",
  components: {DataArea},
  data:() => ({
  }),

  computed: {
    distribution: function (){
      return optionsInfo.filter(obj => obj.name === this.$route.params.id).pop()
    },
  }

}
</script>

<style>
.graph{
  background-color: #272A2E;
}

</style>