<template>
  <div ref="FPanels" :class="`panel panel-${type} ${border?'panel-border':''} ${collapsed} ${theme?'panel-color panel-'+theme:''}`">
    <div class="panel-heading">
      <h3 class="panel-title">{{title}}</h3>
      <div class="panel-options">
        <a href="javascript:;" data-toggle="panel" @click="collapsedEvent" v-if="fold_icon">
          <span class="collapse-icon">–</span>
          <span class="expand-icon">+</span>
        </a>
        <a href="javascript:;" data-toggle="remove" @click="removeEvent" v-if="close_icon">×</a>
      </div>
    </div>
    <div class="panel-body" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  /**
   * 面板
   * */
  export default {
    name: 'FPanel',
    data () {
      return {
        collapsed: ''
      }
    },
    props: {
      title: String,
      type: {
        type: String,
        default: 'default'
      },
      border: {
        type: Boolean,
        default: false
      },
      fold: {
        type: Boolean,
        default: false
      },
      theme: String,
      close_icon: {
        type: Boolean,
        default: true
      },
      fold_icon: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
      this.fold ? this.collapsed = 'collapsed' : ''
    },
    methods: {
      collapsedEvent () {
        this.collapsed = this.collapsed ? '' : 'collapsed'
        this.$emit('change', !!this.collapsed)
      },
      removeEvent () {
        if (this.$listeners && this.$listeners.remove) {
          let close = () => {
            this.$refs.FPanels.remove()
          }
          this.$emit('remove', close)
        } else {
          this.$refs.FPanels.remove()
        }
      }
    }
  }
</script>
