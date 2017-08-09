import Progress from './component/Progress.vue'
const app = {
  install: function (Vue) {
    Vue.component(Progress.name, Progress)
  }
}

export default app
