<template>
  <div class="w-full flex flex-col lg:flex-row p-0 sm:pr-5 ">
    <div class="rounded-2xl p-0 lg:p-5 mb-5 lg:mb-0  lg:w-11/12 text-2xl flex flex-col" >
      <div class="md:text-4xl text-xl text-white font-bold mb-5">
        News
      </div>
      <div class=" overflow-y-auto">
        <div class="mt-10 text-white font-medium">
          (28/1)
        </div>
        <ul class="common-text text-lg mt-2">
          <li class="mb-2">
            - Double slider working
          </li>
          <li class="mb-2">
            - Charts color changes with slider variations
          </li>
          <li class="mb-2">
            - Sidebar issues solved. Just one more to solve
          </li>
        </ul>
        <div class="mt-10 text-white font-medium">
          (21/1)
        </div>
        <ul class="common-text text-lg mt-2">
          <li class="mb-2">
            - Continuous charts working. Have to finish log-normal and t
          </li>
          <li class="mb-2">
            - Working on double slider
          </li>
        </ul>
        <div class="mt-10 text-white font-medium">
          (18/1)
        </div>
        <ul class="common-text text-lg mt-2">
          <li class="mb-2">
            - Latex render library added
          </li>
        </ul>
        <div class="mt-10 text-white font-medium">
          (17/1)
        </div>
        <ul class="common-text text-lg mt-2">
          <li class="mb-2">
            - Logo Added
          </li>
          <li class="mb-2">
            - Sidebar styles
          </li>
          <li class="mb-2">
            - Home page styles. Not sure how to manage this inputs
          </li>
        </ul>
        <div class="mt-10 text-white font-medium">
          (16/1)
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
      </div>
    </div>


    <div class="rounded-2xl graph p-5 lg:w-2/3 mb-10 lg:mb-0 w-full md:w-full ">

      <div class="flex-col flex justify-between h-full">

      <div class="flex flex-col ">

          <div class=" flex justify-center ">
            <div class="bg-gray-50 rounded-full lg:scale-50 logo items-center my-10 justify-center flex p-5">
              <img src="../assets/original-ab-bg.svg" class="mb-4">
            </div>
          </div>

          <div class="text-lg font-medium text-gray-200">
            <p class="text-3xl mb-5">
              Hi! I'm <span class="text-red-500 font-semibold">aBenve</span>.
            </p>
            <p class="mb-5 common-text">
              I'm 22 and a software engineering student at <a href="https://www.itba.edu.ar/" class="hover:text-white transition duration-100 ease-in-out">ITBA</a> currently in my third year and this is my first time developing a web page.
              <br>
              I've made this project as a personal challenge and I'm very proud of it.
              The main objective for this page is to be used as a tool to solve problems about probability distributions.
              <br>
              <br>
              Hope you like it. 👋
            </p>
          </div>
      </div>

        <div class="flex flex-row justify-center items-center space-x-4">
          <a href="https://www.instagram.com/agus.benve/">
            <img class="icon" src="../assets/intagram.svg" alt="instagram">
          </a>
          <a href="https://www.linkedin.com/in/agustin-benvenuto-1a4809217/">
            <img class="icon" src="../assets/linkedin.svg" alt="linkedin">
          </a>
          <a href="https://github.com/aBenve/probab" >
            <img class="icon" src="../assets/git.svg" alt="github">
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {},
}
</script>

<style scoped>

.icon{
  width:3rem;
  height: 3rem;
}
.logo{
  width: 200px;
  height: 200px;
}
.bg{
  background-color: #2F3339;
}
.common-text{
  color: var(--text-gray);
}
.graph{
  background-color: var(--black-principal);
}
</style>