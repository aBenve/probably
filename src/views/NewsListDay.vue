<template>
  <div class="mt-10 text-white font-medium">
    {{ title }}
  </div>
  <ul class="common-text text-lg mt-2">
    <li class="mb-2">
      - Almost complete mathematical calculation and visualization for the discrete probability distributions
    </li>
    <li class="mb-2">
      - Add some styling and animations to the chart (still working)
    </li>
    <li class="mb-2">
      - Hosting the web on <a href="https://vercel.com/" class="hover:text-white transition duration-100 ease-in-out">vercel</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NewsListDay',
  data:() => ({
    title:String,
    items: Array
  }),
}
</script>
<style scoped>

.common-text {
  color: var(--text-gray);
}
</style>