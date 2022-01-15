<template>
  <div class="w-full flex flex-col lg:flex-row">
    <DataArea :distribution="distribution" @value-changed="this.updateInputs"/>
    <div class="rounded-2xl graph p-5  w-full w-full">
      <Graph />
    </div>
  </div>
</template>

<script>
import DataArea from "../components/DataArea";
import optionsInfo from "../components/sidebar/optionsInfo";
import Graph from "../components/Graph";

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: "WorkingOption",
  components: {Graph, DataArea},

  computed: {

    ...mapGetters([
        'getCurrentOption',
    ]),

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
.graph{
  background-color: #272A2E;
}

</style>