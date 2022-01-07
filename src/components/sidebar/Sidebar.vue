<template>
      <div class="rounded-2xl left-5 top-5 overflow-x-hidden w-full">
        <div class="flex flex-col justify-between h-full p-5">
          <div class="flex flex-col align-center">
            <div class="flex justify-between flex-row items-center mb-10">
              probab logo
            </div>
            <DiscreteDropDownButton/>
            <ContinuousDropDownButton/>

          </div>
          <div class="text-white">
            Logo
          </div>
        </div>

      </div>
</template>

<script>
import DiscreteDropDownButton from "../DiscreteDropDownButton";
import ContinuousDropDownButton from "../ContinuousDropDownButton";

export default {
  name: "Sidebar",
  components: {ContinuousDropDownButton, DiscreteDropDownButton},

}
</script>

<style scoped>

</style>