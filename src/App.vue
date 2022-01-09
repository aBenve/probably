<template>
  <MainLayout/>
</template>

<script>
/*
  Por alguna reazon no me quiere tomar bien las rutas. Ya estan siendo dinamicas, falta que para cada boton distinto pueda llegar al objeto completo del otro lado.
 */



import MainLayout from "./views/MainLayout";
export default {
  name: "App",
  components: {MainLayout},

};
</script>



<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;

}
html {
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-top: 1rem;
  margin-bottom: 1rem;

  background: #272A2E;
  border-radius: 100px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555555;
  border-radius: 100px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3f3e3e;
}
</style>
