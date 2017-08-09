import Alert from './component/Alert.vue'
const app = {
  install: function (Vue) {
    Vue.component(Alert.name, Alert)
  }
}

export default app
