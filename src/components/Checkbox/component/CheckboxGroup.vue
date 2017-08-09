<template>
  <div class="FCheckboxGroup">
    <slot></slot>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FCheckboxGroup',
    data () {
      return {}
    },
    props: {
      value: Array
    },
    mounted () {
      this.isClick()
    },
    methods: {
      isClick () {
        let arr = []
        for (let i in this.$children) {
          if (this.$children[i].nowChecked) arr.push(this.$children[i].value)
        }
        this.$emit('input', arr)
        this.$emit('change', arr)
      }
    }
  }
</script>
