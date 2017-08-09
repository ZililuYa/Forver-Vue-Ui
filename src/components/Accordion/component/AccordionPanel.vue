<template>
  <div class="panel panel-default">
    <div class="panel-heading" @click="panelClickEvent">
      <h4 class="panel-title">
        <a href="javascript:;" data-toggle="collapse" :class="active ? '' : 'collapsed'">
          {{title}}
        </a>
      </h4>
    </div>
    <div :class="'panel-collapse collapse ' + active">
      <div class="panel-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FAccordionPanel',
    data () {
      return {
        active: '',
        index: ''
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.$parent.addPanel(this)
    },
    methods: {
      panelClickEvent () {
        let isActive = () => {
          this.active = 'in'
        }
        let panel = {
          title: this.title,
          index: this.index
        }
        this.$parent.panelClickEvent(isActive, panel)
      }
    }
  }
</script>
