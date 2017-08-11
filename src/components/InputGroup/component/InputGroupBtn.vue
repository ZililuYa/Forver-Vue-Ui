<template>
  <span class="input-group-btn">
    <button :class="'btn btn-'+color" :type="type?type:'button'" @click="$emit('click')">
      <slot></slot>
    </button>
  </span>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FInputGroupBtn',
    data () {
      return {}
    },
    props: {
      type: String,
      color: {
        type: String,
        default: 'success'
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
