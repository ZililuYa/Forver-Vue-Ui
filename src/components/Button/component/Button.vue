<template>
  <button :type="type" :class="`
  btn
  btn-${color}
  ${icon?'btn-icon':''}
  ${icon_standalone?'btn-icon-standalone':''}
  ${disabled?'disabled':''}
  ${size?'btn-'+size:''}
  `"
     @click="clickEvent"
  >
    <slot></slot>
  </Button>
</template>
<script>
  /**
   * 按钮
   * */
  export default {
    name: 'FButton',
    data () {
      return {}
    },
    props: {
      title: String,
      type: {
        type: String,
        default: 'button'
      },
      color: {
        type: String,
        default: 'white'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      },
      icon_standalone: {
        type: Boolean,
        default: false
      },
      icon: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
    },
    methods: {
      clickEvent (evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
