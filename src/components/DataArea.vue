<template>
  <div class="  text-2xl flex flex-col ">
    <div class="text-gray-500 text-lg font-medium mt-10 ">
      {{distribution.description}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'DataArea',
  props: {
    distribution: {}
  }
}
</script>
