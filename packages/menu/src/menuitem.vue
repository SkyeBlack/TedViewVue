<template>
  <li class="ted-menu-item" @click="subMenuControl($event)">
    <slot></slot>
  </li>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "tedMenuItem",
  mixins: [mixin]
};
</script>
<style scoped>
.horizontal-menu .ted-menu-item {
  display: inline-block;
  padding: 16px;
  position: relative;
}

.horizontal-menu .ted-menu-item:hover {
  cursor: pointer;
  color: #008aff;
}

.horizontal-menu .ted-menu-item:hover::after {
  width: 100%;
}

.horizontal-menu .ted-menu-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  background: #008aff;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
}

.vertical-menu .ted-menu-item {
  padding: 16px;
  position: relative;
}

.vertical-menu .ted-menu-item:hover {
  color: #008aff;
}
</style>