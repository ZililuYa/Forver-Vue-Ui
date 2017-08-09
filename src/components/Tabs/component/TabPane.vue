<template>
  <div class="tab-pane active" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
  /**
   * TabPane
   * */
  export default {
    name: 'FTabPane',
    data () {
      return {
        active: false
      }
    },
    props: {
      name: String,
      icon: String
    },
    mounted () {
      this.$parent.addTabPane(this)
    },
    methods: {}
  }
</script>
