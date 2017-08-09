<template>
  <div class="div">
    <input
      v-if="type!=='textarea'"
      ref="input"
      class="form-control"
      :value="nowValue"
      :type="type"
      v-bind="$props"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="inputEvent"
      @focus="focusEvent"
      @blur="blurEvent"
    >
    <textarea
      v-else
      :value="nowValue"
      ref="textarea"
      class="form-control"
      v-bind="$props"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="inputEvent"
      @focus="focusEvent"
      @blur="blurEvent"
    ></textarea>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FInput',
    data () {
      return {
        nowValue: ''
      }
    },
    props: {
      placeholder: String,
      type: {
        type: String,
        default: 'text'
      },
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
