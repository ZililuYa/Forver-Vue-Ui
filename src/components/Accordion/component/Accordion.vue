<template>
  <div :class="`panel-group ${type==='joined'?'panel-group-joined':''}`">
    <slot></slot>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FAccordion',
    data () {
      return {
        panel: [],
        number: 0
      }
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      index: Number
    },
    mounted () {
      this.number = this.index || 0
      if (this.$children.length) {
        this.$children[this.number].active = 'in'
      }
    },
    methods: {
      panelClickEvent (isActive, evt) {
        for (let i in this.$children) {
          this.$children[i].active = ''
        }
        this.$emit('panel-click', evt)
        isActive()
      },
      addPanel (evt) {
        evt.index = this.panel.length
        this.panel.push(evt.title)
      }
    }
  }
</script>
