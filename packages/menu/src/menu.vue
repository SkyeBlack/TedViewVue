<template>
    <div class="ted-menu-container">
      <img class="logo" :src="logo" />
      <img v-if="isVertical" class="collapsed" :src="collapsed" @click="menuCollapsed" />
      <ul class="ted-menu" :class="isVertical?'vertical-menu':'horizontal-menu'">
        <slot></slot>
      </ul>
    </div>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "tedMenu",
  props: ["logo", "collapsed"],
  mixins: [mixin],
  data() {
    return {
      isVertical: false
    };
  },
  mounted() {
    this.defaultPerHeight = document.getElementsByClassName(
      "ted-menu"
    )[0].offsetHeight;
    let _that = this;
    window.onresize = () => {
      return (() => {
        _that.adaptControl();
      })();
    };
    _that.adaptControl();
  },
  methods: {
    adaptControl: function() {
      if (document.documentElement.clientWidth > 768) {
        this.isVertical = false;

        let vMenu = document.getElementsByClassName("ted-menu")[0];
        vMenu.style.height = this.defaultPerHeight + "px";
      } else {
        this.isVertical = true;
        let subMenus = document.getElementsByClassName("ted-sub-menu-flag");
        Array.prototype.forEach.call(subMenus, function(el) {
          el.style.height = 0;
        });
        let vMenu = document.getElementsByClassName("ted-menu")[0];
        vMenu.style.height = 0;
      }
    }
  }
};
</script>
<style scoped>
.ted-menu-container {
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
}

.ted-menu-container .logo,
.ted-menu-container .collapsed {
  height: 32px;
}

.ted-menu {
  padding: 0;
  margin: 0;
  list-style: none;
}

.ted-menu.vertical-menu {
  width: 100%;
  overflow-y: hidden;
  transition: height 1s;
  -webkit-transition: height 1s;
}

.vertical-menu {
  text-align: left;
}

@media screen and (max-width: 768px) {
  .ted-menu-container {
    flex-wrap: wrap;
  }
}
</style>