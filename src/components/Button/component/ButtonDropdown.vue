<template>
  <div :class="`
  btn-group
  ${open}
  `">
    <div class="ButtonDropdownMask" v-if="open" @click="dropClickEvent"></div>
    <button type="button" :class="`btn btn-${type}`" @click="clickEvent">
      <slot></slot>
    </button>
    <button type="button" :class="`btn btn-${type} dropdown-toggle`" @click="dropClickEvent">
      <i :class="icon"></i>
    </button>
    <ul :class="`dropdown-menu dropdown-${type} ${spacing?'':'no-spacing'}`" role="menu" v-if="menu.length">
      <li v-for="item in menu" :class="item==='divider'?'divider':''" @click="menuClickEvent(item)">
        <a v-if="item!=='divider'" href="javascript:;">{{item}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  /**
   * 按钮下拉
   * */
  export default {
    name: 'FButtonDropdown',
    data () {
      return {
        open: ''
      }
    },
    props: {
      menu: Array,
      spacing: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'white'
      },
      click_drop: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: 'fa-angle-down'
      }
    },
    methods: {
      menuClickEvent (item) {
        this.$emit('menu-click', item)
        this.dropClickEvent()
      },
      clickEvent (evt) {
        this.$emit('click', evt)
        if (this.click_drop) this.dropClickEvent()
      },
      dropClickEvent () {
        this.open = this.open ? '' : 'open'
      }
    }
  }
</script>
