<template>
<button class="py-2 px-4 rounded-full transition duration-500 ease-in-out" :class="triggered ? 'active' : 'no-active'" @click="triggered = !triggered">
  <span class="text-lg font-medium">{{tittle}}</span>
</button>
</template>

<script>
export default {
  name: "ToggleButton",
  props:{
    tittle:String
  },
  data: () => ({
    triggered: false
  }),
  watch:{
    triggered: function (){
      this.$emit('triggered', this.triggered)
    }
  }
}
</script>

<style scoped>

.active{
  color: var(--black-darker);
  background-color: var(--accent-color);
}
.no-active{
  color: var(--text-gray);
  background-color: transparent;
  box-shadow: inset 0 0 0 2px var(--text-gray);
  opacity: 0.5;
}

.no-active:hover{
  opacity: 1;
}
</style>