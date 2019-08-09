<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/food">Food</router-link> |
      <router-link to="/drink">Drink</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  background-color: rgb(255, 247, 230);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 120vh;
}

.nav {
  display: block;
  color: darkmagenta;
}

</style>
