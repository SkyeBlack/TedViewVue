<template>
  <div id="app">
    <Menu class="one"></Menu>
  </div>
</template>

<script>
import Menu from "./components/menu";
export default {
  name: "app",
  components: { Menu }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.one {
  background: #f2f2f2;
}
</style>
