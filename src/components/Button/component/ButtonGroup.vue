<template>
  <div :class="`
  btn-group
  ${justified?'btn-group-justified':''}
  `">
    <slot></slot>
  </div>
</template>
<script>
  /**
   * 按钮组
   * */
  export default {
    name: 'FButtonGroup',
    data () {
      return {
        collapsed: ''
      }
    },
    props: {
      justified: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
