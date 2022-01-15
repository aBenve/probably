<template>
  {{distribution.name}}
  {{distribution.inputs[0].value}}
  <div >
    <myChart :data="test"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import myChart from "./myChart";
export default {
  name: "Graph",
  components:{myChart},
  data:() => ({
    test:[5,2,3,4,5],
  }),
  computed: {
    ...mapGetters({
      distribution: 'getCurrentOption'
    }),

    data:function (){
      return []
    },

  },
}
</script>

<style scoped>

</style>