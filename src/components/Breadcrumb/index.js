import Breadcrumb from './component/Breadcrumb.vue'
const app = {
  install: function (Vue) {
    Vue.component(Breadcrumb.name, Breadcrumb)
  }
}

export default app
