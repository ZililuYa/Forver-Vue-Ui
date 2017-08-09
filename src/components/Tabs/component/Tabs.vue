<template>
  <div :class="`
    ${type==='vertical'?'tabs-vertical-env':''}
    ${bordered?'tabs-vertical-bordered':''}
    ${bordered && tab_position!=='left'?'right-aligned':''}
  `">
    <ul :class="`nav
    ${type==='default'?'nav-tabs':''}
    ${type==='vertical'?'tabs-vertical':''}
    ${justified?'nav-tabs-justified':''}
    `" v-if="tab_position==='left'">
      <li :key="i" v-for="(item, i) in tab_list" @click="tabClickEvent(i, item)" :class="item.active">
        <a href="javascript:;">
          <span v-if="item.icon"><i :class="item.icon"></i></span>
          <span class="hidden-xs">{{item.name}}</span>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
    <ul :class="`nav
    ${type==='default'?'nav-tabs':''}
    ${type==='vertical'?'tabs-vertical':''}
    ${justified?'nav-tabs-justified':''}
    `" v-if="tab_position!=='left'">
      <li :key="i" v-for="(item, i) in tab_list" @click="tabClickEvent(i, item)" :class="item.active">
        <a href="javascript:;">
          <span v-if="item.icon"><i :class="item.icon"></i></span>
          <span class="hidden-xs">{{item.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  /**
   * Tabs
   * */
  export default {
    name: 'FTabs',
    data () {
      return {
        tab_list: []
      }
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      current: {
        type: Number,
        default: 0
      },
      justified: {
        type: Boolean,
        default: false
      },
      tab_position: {
        type: String,
        default: 'left'
      },
      bordered: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.$children[this.current].active = true
    },
    methods: {
      addTabPane (evt) {
        this.tab_list.push({
          name: evt.name,
          icon: evt.icon,
          active: this.tab_list.length !== this.current ? '' : 'active',
          index: this.tab_list.length
        })
      },
      tabClickEvent (i, item) {
        for (let x in this.tab_list) {
          this.tab_list[x].active = ''
          this.$children[x].active = false
        }
        this.tab_list[i].active = 'active'
        this.$children[i].active = true
        this.$emit('tab-change', item)
      }
    }
  }
</script>
