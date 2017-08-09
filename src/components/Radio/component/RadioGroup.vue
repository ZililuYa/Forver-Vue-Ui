<template>
  <div class="FRadioGroup">
    <slot></slot>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FRadioGroup',
    data () {
      return {}
    },
    props: {
      value: [String, Number]
    },
    mounted () {
    },
    methods: {
      isClick (va) {
        let arr = ''
        for (let i in this.$children) {
          this.$children[i].checked = false
        }
        for (let i in this.$children) {
          if (this.$children[i].value === va) {
            this.$children[i].checked = true
            arr = va
            break
          }
        }
        if (va) {}
        this.$emit('input', arr)
        this.$emit('change', arr)
      },
      isData (va) {
        this.$emit('input', va)
        this.$emit('change', va)
      }
    }
  }
</script>
