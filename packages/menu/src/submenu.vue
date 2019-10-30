<template>
  <li class="ted-menu-item ted-sub-menu dropdown" @click="subMenuControl($event)">
    <slot name="title"></slot>
    <ul class="ted-sub-menu-flag dropdown-content">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "tedSubMenu",
  mixins: [mixin]
};
</script>
<style scoped>
.horizontal-menu .ted-menu-item {
  cursor: pointer;
  display: inline-block;
  padding: 16px;
  position: relative;
}

.horizontal-menu .dropdown:hover .dropdown-content {
  display: block;
}

.horizontal-menu .dropdown-content {
  display: none;
  position: absolute;
  padding: 0;
  margin: 0;
  transform: translateX(-50%);
  left: 50%;
  top: 100%;
  border-radius: 5px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}

.horizontal-menu .dropdown-content li {
  white-space: nowrap;
}

.horizontal-menu .dropdown-content li:hover {
  cursor: pointer;
}

.vertical-menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.vertical-menu .ted-sub-menu {
  padding: 16px;
}

.vertical-menu .ted-sub-menu li:last-child {
  padding: 16px 16px 0 16px;
}

.vertical-menu .dropdown .dropdown-content {
  height: 0;
  overflow: hidden;
  transition: height 1s;
  -webkit-transition: height 1s;
}
</style>