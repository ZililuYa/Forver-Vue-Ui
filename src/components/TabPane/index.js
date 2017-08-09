import TabPane from '../Tabs/component/TabPane.vue'
const app = {
  install: function (Vue) {
    Vue.component(TabPane.name, TabPane)
  }
}

export default app
