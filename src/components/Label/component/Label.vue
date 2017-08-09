<template>
  <span :class="theme+' '+theme+'-'+type"><slot></slot></span>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FLabel',
    data () {
      return {}
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      theme: {
        type: String,
        default: 'label'
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
