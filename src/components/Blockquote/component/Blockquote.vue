<template>
  <Blockquote :class="theme?'blockquote blockquote-' + type : ''">
    <slot></slot>
  </Blockquote>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FBlockquote',
    data () {
      return {}
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      theme: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
