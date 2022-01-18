<template>
  <div class="w-full flex flex-col xl:flex-row pr-5">
    <div class="flex flex-col p-0 lg:p-5 mb-5 lg:mb-0 lg:mr-5 xl:w-4/6 lg:w-full">
      <InputArea :distribution="distribution" @value-changed="this.updateInputs"/>
      <DataArea v-if="windowSize" class="order-10" :distribution="distribution"/>
    </div>
    <Graph />
    <DataArea v-if="!windowSize"  :distribution="distribution"/>
  </div>
</template>

<script>
import DataArea from "../components/DataArea";
import optionsInfo from "../components/sidebar/optionsInfo";
import Graph from "../components/Graph";

import { mapMutations, mapGetters } from 'vuex'
import InputArea from "../components/InputArea";

export default {
  name: "WorkingOption",
  components: {InputArea, Graph, DataArea},

  data: () => ({
    windowWidth: Number
  }),
  mounted(){
    window.addEventListener("resize", ()=> this.windowWidth = window.innerWidth);
  },
  unmounted() {
    window.removeEventListener('resize', ()=> this.windowWidth = window.innerWidth);
  },
  computed: {

    ...mapGetters([
        'getCurrentOption',
    ]),

    windowSize: function (){
      console.log(this.windowWidth)
      return this.windowWidth > 1280
    },

    distribution: function(){
      let op = optionsInfo.filter(obj => obj.name === this.$route.params.id).pop()
      this.setCurrentOption(op)
      return this.getCurrentOption
    },
  },

  methods:{
    ...mapMutations([
       'setCurrentOption',
       'updateInputs'
    ]),
  /*
    updateInputs: function (x){
      for(let i = 0 ; i < x.length ; i++ ){
        if(x[i] !== -1)
          this.distribution.inputs[i].value = x[i]
      }
      console.log(this.distribution)
    },
*/
  }
/*
  computed: {
    distribution: function () {
      return optionsInfo.filter(obj => obj.name === this.$route.params.id).pop()
    },
  },
 */
}
</script>

<style>


</style>