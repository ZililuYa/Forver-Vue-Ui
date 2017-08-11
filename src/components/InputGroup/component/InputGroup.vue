<template>
  <div :class="`input-group ${color} ${size?'input-group-'+size:''} ${minimal?'input-group-minimal':''}`">
    <slot></slot>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FInputGroup',
    data () {
      return {
        color: ''
      }
    },
    props: {
      size: String,
      minimal: Boolean
    },
    mounted () {
    },
    methods: {
      focusEvent (ver) {
        this.color = 'focused focused-' + ver
      },
      blurEvent () {
        this.color = ''
      }
    }
  }
</script>
