export default {
    data() {
        return {
            defaultPerHeight: 50
        }
    },
    methods: {
        hideSubMenu: function () {
            let subMenus = document.getElementsByClassName("ted-sub-menu-flag");
            Array.prototype.forEach.call(subMenus, function (el) {
                el.style.height = 0;
            });
            let vMenu = document.getElementsByClassName('ted-menu vertical-menu')[0];
            vMenu.style.height = this.defaultPerHeight * vMenu.childElementCount + "px";
        },
        subMenuControl: function (val) {
            let _that = this;
            if (document.documentElement.clientWidth > 768) {
                return;
            }

            _that.hideSubMenu();

            if (val.target.className.indexOf("ted-sub-menu") != -1) {
                Array.prototype.forEach.call(val.target.children, function (el) {
                    if (el.className.indexOf("ted-sub-menu-flag") != -1) {
                        if (el.offsetHeight == 0) {
                            el.style.height = _that.defaultPerHeight * el.childElementCount - 16 + "px";
                            let vMenu = document.getElementsByClassName('ted-menu vertical-menu')[0];
                            vMenu.style.height = _that.defaultPerHeight * vMenu.childElementCount + _that.defaultPerHeight * el.childElementCount - 16 + "px";
                        }
                    }
                });
            }
        },
        menuCollapsed: function () {
            let vMenu = document.getElementsByClassName('ted-menu vertical-menu')[0];
            if (vMenu.offsetHeight == 0) {
                vMenu.style.height = this.defaultPerHeight * vMenu.childElementCount + "px";
            } else {
                this.hideSubMenu();
                vMenu.style.height = 0;
            }
        }
    }
};