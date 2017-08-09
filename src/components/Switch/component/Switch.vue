<template>
  <input type="checkbox" @change="changeEvent" :checked="check" :class="`${type?'iswitch-'+type:''} ${size?'iswitch-'+size:'iswitch'}`">
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FSwitch',
    data () {
      return {
        nowChecked: false
      }
    },
    props: {
      check: Boolean,
      size: String,
      type: {
        type: String,
        default: 'secondary'
      }
    },
    mounted () {
      this.nowChecked = this.check || false
      this.emitEvent()
    },
    methods: {
      changeEvent () {
        this.nowChecked = !this.nowChecked
        this.emitEvent()
      },
      emitEvent () {
        this.$emit('input', this.nowChecked)
        this.$emit('change', this.nowChecked)
      }
    }
  }
</script>
