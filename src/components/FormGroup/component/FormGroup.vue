<template>
  <div class="form-group">
    <template v-if="!inline">
      <label :class="`control-label col-lg-${col}`">{{title}}</label>
      <div :class="`col-lg-${12-col}`">
        <slot></slot>
        <span class="error" style="display: none"></span>
      </div>
    </template>
    <template v-if="inline">
      <slot></slot>
    </template>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FFormGroup',
    data () {
      return {
        inline: false
      }
    },
    props: {
      title: String,
      col: {
        type: Number,
        default: 2
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
