<template>
      <div class="rounded-2xl overflow-x-hidden sidebar flex flex-col justify-between h-full p-2">
        <div class="flex flex-col align-center">
          <div class="flex flex-row justify-center p-4">
            <router-link to="/">
              <div >
                <img class="zoom " src="../../assets/proABly-new.svg" alt="probably" height="10" width="150" />
              </div>
            </router-link>
          </div>
          <br/>
          <my-dropdown class="my-1" name="Discrete" mainIcon="chart-bar" @dropDown-option-clicked="this.$emit('dropDown-option-clicked')"/>
          <my-dropdown class="my-1" name="Continuous" mainIcon="chart-area" @dropDown-option-clicked="this.$emit('dropDown-option-clicked')"/>

        </div>
        <div class="text-gray-500">
          version 1.0
        </div>
      </div>
</template>

<script>

import MyDropdown from "../myDropdown";

export default {
  name: "Sidebar",
  components: {MyDropdown},

}
</script>

<style scoped>
.sidebar{
  background-color:var(--black-principal);
  width: 15rem;
}
.zoom {
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.03); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

</style>