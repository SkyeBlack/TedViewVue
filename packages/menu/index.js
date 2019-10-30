import TedMenu from './src/menu.vue'
import TedMenuItem from './src/menuitem.vue'
import TedSubMenu from './src/submenu.vue'

TedMenu.Item = TedMenuItem
TedMenu.Sub = TedSubMenu

export default TedMenu