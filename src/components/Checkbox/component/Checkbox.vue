<template>
  <label @click="clickEvent" class="FCheckbox">
    <div :class="`
    cbr-replaced
    ${nowChecked?'cbr-checked':''}
    ${type?'cbr-'+type:'cbr-success'}
    `">
      <div class="cbr-input"><input type="checkbox" class="cbr cbr-done" v-model="nowChecked" @change="changeEvent" :name="name" :value="value"></div>
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
    name: 'FCheckbox',
    data () {
      return {
        nowChecked: false
      }
    },
    props: {
      check: Boolean,
      name: String,
      value: String,
      type: String
    },
    mounted () {
      this.nowChecked = this.check || false
    },
    methods: {
      clickEvent () {
        this.nowChecked = !this.nowChecked
      },
      changeEvent () {
        if (this.$parent.isClick) this.$parent.isClick()
        this.$emit('change', {
          checked: this.nowChecked,
          value: this.value
        })
      }
    }
  }
</script>
