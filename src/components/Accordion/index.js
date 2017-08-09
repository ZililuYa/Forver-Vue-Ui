import Accordion from './component/Accordion.vue'
const app = {
  install: function (Vue) {
    Vue.component(Accordion.name, Accordion)
  }
}

export default app
