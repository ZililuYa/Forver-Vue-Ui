<template>
  <table :class="`table
  ${hover?'table-hover':''}
  ${striped?'table-striped':''}
  ${bordered?'table-bordered':''}
  ${condensed?'table-condensed':''}
  `">
    <thead v-if="head && body">
    <tr>
      <th v-for="item in head" :style="`${item.width?'width:'+item.width+'px':''}`">{{item.text}}</th>
    </tr>
    </thead>
    <tbody v-if="head && body">
    <tr v-for="item in body">
      <td v-for="(x, y) in head">{{item[x.name]}}</td>
    </tr>
    </tbody>
    <slot></slot>
  </table>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FTable',
    data () {
      return {}
    },
    props: {
      hover: Boolean,
      striped: Boolean,
      bordered: Boolean,
      condensed: Boolean,
      head: Array,
      body: Array
    },
    mounted () {
    },
    methods: {}
  }
</script>
