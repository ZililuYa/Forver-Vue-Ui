import Button from './component/Button.vue'
const app = {
  install: function (Vue) {
    Vue.component(Button.name, Button)
  }
}

export default app
