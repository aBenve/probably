<template>
      <div class="rounded-2xl left-5 top-5 overflow-x-hidden w-full">
        <div class="flex flex-col justify-between h-full p-5">
          <div class="flex flex-col align-center">
            <div class="flex justify-between flex-row items-center mb-10">
              probab logo
            </div>
            <my-dropdown name="Discrete"/>
            <my-dropdown name="Continuous"/>

          </div>
          <div class="text-white">
            Logo
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

</style>