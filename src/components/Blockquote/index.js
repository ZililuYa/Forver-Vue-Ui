import Blockquote from './component/Blockquote.vue'
const app = {
  install: function (Vue) {
    Vue.component(Blockquote.name, Blockquote)
  }
}

export default app
