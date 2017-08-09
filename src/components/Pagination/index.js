import Pagination from './component/Pagination.vue'
const app = {
  install: function (Vue) {
    Vue.component(Pagination.name, Pagination)
  }
}

export default app
