import Panels from './component/Panel.vue'
const app = {
  install: function (Vue) {
    Vue.component(Panels.name, Panels)
  }
}

export default app
