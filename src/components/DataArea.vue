<template>
  <div class="rounded-2xl data p-5 mb-5 lg:mb-0 lg:mr-5  lg:w-4/6 text-2xl text-white font-bold" >
    {{ distribution.name }}
  </div>
</template>

<script>
import optionsInfo from "./sidebar/optionsInfo";

export default {
  name: "DataArea",
  computed:{
    distribution: function (){
      return optionsInfo.filter(obj => obj.name === this.$route.params.id).pop()
    }
  },
}
</script>

<style scoped>
.data{
  background-color: #272A2E;
}
</style>