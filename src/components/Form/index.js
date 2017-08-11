import Form from './component/Form.vue'
const app = {
  install: function (Vue) {
    Vue.component(Form.name, Form)
  }
}

export default app
