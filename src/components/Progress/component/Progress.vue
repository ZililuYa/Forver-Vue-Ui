<template>
  <div :class="`progress
  ${striped?'progress-striped':''}
  ${active?'active':''}
  `">
    <div :class="`progress-bar
    ${type?'progress-bar-'+type:''}
    `" role="progressbar" :style="'width: '+progress+'%'">
      <span class="sr-only">{{progress}}</span>
    </div>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FProgress',
    data () {
      return {}
    },
    props: {
      progress: Number,
      type: {
        type: String,
        default: 'blue'
      },
      striped: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
