<template>
      <div class="rounded-2xl left-5 top-5 overflow-x-hidden w-full">
        <div class="flex flex-col justify-between h-full p-1">
          <div class="flex flex-col align-center">
            <div class="flex flex-row justify-center p-4">
              <router-link to="/">
                <div >
                  <img class="zoom " src="../../assets/probABly-white.svg" alt="probab" height="10" width="200"/>
                </div>
              </router-link>
            </div>
            <my-dropdown name="Discrete"/>
            <my-dropdown name="Continuous"/>

          </div>
          <div class="text-gray-500">
            version 1.0
          </div>
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

.zoom {
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>