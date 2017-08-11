<template>
  <label @click="clickEvent" class="FRadio">
    <div :class="`
    cbr-replaced cbr-radio
    ${checked?'cbr-checked':''}
    ${type?'cbr-'+type:'cbr-success'}
    `">
      <div class="cbr-input"><input ref="radio" type="radio" class="cbr cbr-done" :name="name" :value="value"></div>
      <div class="cbr-state"><span></span></div>
    </div>
    <slot></slot>
  </label>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FRadio',
    data () {
      return {
        checked: false
      }
    },
    props: {
      check: Boolean,
      name: String,
      value: [String, Number],
      type: String
    },
    mounted () {
      if (this.check) {
        this.checked = this.check
        this.$parent.isData(this.value)
      }
    },
    methods: {
      clickEvent () {
        if (this.checked) return
        this.$parent.isClick(this.value)
        this.$refs.radio.click()
      }
    }
  }
</script>
