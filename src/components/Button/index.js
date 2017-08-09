import Panels from './component/Button.vue'
const app = {
  install: function (Vue) {
    Vue.component(Panels.name, Panels)
  }
}

export default app
