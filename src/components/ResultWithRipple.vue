<template>
  <div class="flex justify-center items-center w-full ">
    <div>
      <ripple-button :style="accentColor">
        <div class="text-2xl result px-4 rounded-full  flex justify-center  "
             :style="{backgroundColor:this.distribution.color}"
        >
          <div class=" font-semibold mr-2">
            Result
          </div>
          <div class=" font-bold ">
            {{result}}
          </div>
        </div>
      </ripple-button>
    </div>
  </div>
</template>
<script>
import RippleButton from "./rippleButton"
import {mapGetters} from "vuex";

export default {
  name: 'ResultWithRipple',
  components: {RippleButton},
  props: {
    accentColor: {},
    result: {}
  },
  computed:{
    ...mapGetters({
      distribution: "getCurrentOption",
    }),
  }
}
</script>
<style scoped>


.result {
  color: var(--gray-bg);
}

</style>