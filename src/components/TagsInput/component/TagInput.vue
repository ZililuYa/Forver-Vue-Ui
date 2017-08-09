<template>
  <div class="bootstrap-tagsinput" @click="clickEvent">
    <span :class="'tag label label-'+type" v-for="(item, i) in data">{{item}}<span data-role="remove" @click="removeEvent(item)"></span></span>　　　　
    <input type="text" ref="input" style="width: 3em !important;" @keyup.enter="addEvent" @keydown="keydownEvent">
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FTagInput',
    data () {
      return {
        data: [],
        max: 0
      }
    },
    props: {
      value: Array,
      type: {
        type: String,
        default: 'secondary'
      },
      max_value: Number
    },
    mounted () {
      this.data = this.value || []
      this.max = this.max_value || 0
      if (this.max < 0) this.max = 0
    },
    methods: {
      clickEvent () {
        this.$refs.input.focus()
      },
      removeEvent (item) {
        if (!this.data.length) return
        this.data.splice(this.data.indexOf(item), 1)
        this.$emit('remove', item)
      },
      addEvent () {
        let va = this.$refs.input.value
        if (!va || this.data.indexOf(va) !== -1 || (this.max !== 0 && this.data.length >= this.max)) return
        this.data.push(va)
        this.$refs.input.value = ''
        this.clickEvent()
      },
      keydownEvent (evt) {
        let code = evt.keyCode
        if (code !== 8) return
        if (!this.$refs.input.value) this.removeEvent(this.data[this.data.length - 1])
      },
      changeEvent (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    watch: {
      data: {
        handler: function (val, oldval) {
          this.changeEvent(val)
        }
      }
    }
  }
</script>
