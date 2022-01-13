<template>
  {{distribution.name}}
  <div class="bg-pink-200" @click="test">
    <div v-for="input in distribution.inputs" :key="input.label">
      {{ input.value }}
    </div>
    <div class="bg-blue-500">
      {{ distribution.P(100,0.7,50) }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Graph",
  computed: {

    ...mapGetters({
      distribution: 'getCurrentOption'
    }),
  },
    methods:{
    test: function (){
      console.log(this.distribution)
    }
  },
}
</script>

<style scoped>

</style>