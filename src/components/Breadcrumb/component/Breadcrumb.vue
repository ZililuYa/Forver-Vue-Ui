<template>
  <ol :class="`breadcrumb bc-${type} ${auto?'auto-hidden':''}`" v-if="data.length">
    <li v-for="(item, i) in data" :key="i" :class="i+1 === data.length? 'active' : ''">
      <a href="javascript:;" :class="auto?'collapsed':''" @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent" v-if="i+1 !== data.length" @click="clickEvent(item, i)"><i v-if="item.icon"
                                                                                                                                                                      :class="item.icon"></i>{{item.title}}</a>
      <strong v-if="i+1 === data.length"><i v-if="item.icon" :class="item.icon"></i>{{item.title}}</strong>
    </li>
  </ol>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FBreadcrumb',
    data () {
      return {}
    },
    props: {
      data: Array,
      type: {
        type: String,
        default: '1'
      },
      auto: Boolean
    },
    mounted () {
    },
    methods: {
      clickEvent (item, i) {
        item.index = i
        this.$emit('click', item)
      },
      mouseenterEvent (evt) {
        if (!this.auto) return
        evt.target.className = ''
      },
      mouseleaveEvent (evt) {
        if (!this.auto) return
        evt.target.className = 'collapsed'
      }
    }
  }
</script>
