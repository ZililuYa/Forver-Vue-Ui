<template>
  <div :class="`alert alert-`+type" ref="alert" :style="display?'':'display: none'">
    <button type="button" class="close" v-if="close_icon" @click="clickEvent">
      <span aria-hidden="true">×</span>
      <span class="sr-only">Close</span>
    </button>
    <slot></slot>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FAlert',
    data () {
      return {}
    },
    props: {
      type: {
        type: String,
        default: 'white'
      },
      close_icon: {
        type: Boolean,
        default: true
      },
      display: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
    },
    methods: {
      clickEvent () {
        this.$refs.alert.remove()
      }
    }
  }
</script>
