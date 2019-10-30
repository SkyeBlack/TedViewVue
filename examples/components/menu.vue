<template>
  <ted-menu :logo="logo" :collapsed="collapsed">
    <ted-menu-item>dd1</ted-menu-item>
    <ted-menu-item>dd2</ted-menu-item>
    <ted-sub-menu>
      <template slot="title">dd3</template>
      <ted-menu-item>dd3-11111111111111111111111</ted-menu-item>
      <ted-menu-item>dd3-2</ted-menu-item>
    </ted-sub-menu>
    <ted-menu-item>dd4</ted-menu-item>
    <ted-sub-menu>
      <template slot="title">dd5</template>
      <ted-menu-item>dd5-1</ted-menu-item>
      <ted-menu-item>dd5-2</ted-menu-item>
    </ted-sub-menu>
  </ted-menu>
</template>
<script>
export default {
  name: "tMenu",
  data() {
    return {
      logo: require("../assets/logo.svg"),
      collapsed: require("../assets/menu.svg")
    };
  }
};
</script>