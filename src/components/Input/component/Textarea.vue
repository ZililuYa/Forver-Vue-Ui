<template>
  <textarea
    ref="input"
    class="form-control"
    :value="nowValue"
    v-bind="$props"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="inputEvent"
    @focus="focusEvent"
    @blur="blurEvent"
  >
  </textarea>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FTextarea',
    data () {
      return {
        nowValue: ''
      }
    },
    props: {
      placeholder: String,
      value: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.setNewValue(this.value)
    },
    watch: {
      'value' (val, oldValue) {
        this.setNewValue(val)
      }
    },
    methods: {
      setNewValue (value) {
        if (value === this.nowValue) return
        this.nowValue = value
      },
      inputEvent (evt) {
        const value = evt.target.value
        this.$emit('input', value)
        this.setNewValue(value)
        this.$emit('change', value)
      },
      focusEvent (evt) {
        this.$emit('focus', evt)
      },
      blurEvent (evt) {
        this.$emit('blur', evt)
      }
    }
  }
</script>
