<template>
  <div class="ms-container FMultiSelect" v-if="data && data.length">
    <div class="ms-selectable">
      <ul class="ms-list ps-container ps-active-y">
        <li class="ms-elem-selectable" @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent" @click="clickEvent(ver)" v-for="ver in data" v-if="ver_data.indexOf(ver) === -1">
          <span>{{ver}}</span></li>
      </ul>
    </div>
    <div class="ms-selection">
      <ul class="ms-list ps-container">
        <li class="ms-elem-selection" v-for="ver in ver_data" @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent" @click="removeEvent(ver)"><span>{{ver}}</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FMultiSelect',
    data () {
      return {
        ver_data: []
      }
    },
    props: {
      data: Array,
      value: Array
    },
    mounted () {
      let Forver = {
        cursorcolor: '#aaaaaa',
        cursorwidth: '5px',
        cursorborder: '0px',
        cursorborderradius: '0px'
      }
      window.jQuery('.FMultiSelect .ms-list').niceScroll(Forver)
    },
    methods: {
      clickEvent (ver) {
        this.ver_data.push(ver)
        this.changeEvent()
      },
      removeEvent (ver) {
        this.ver_data.splice(this.ver_data.indexOf(ver), 1)
        this.changeEvent()
      },
      mouseenterEvent (evt) {
        evt.target.className += ' ms-hover'
      },
      mouseleaveEvent (evt) {
        evt.target.className = evt.target.className.replace(' ms-hover', '')
      },
      changeEvent () {
        this.$emit('input', this.ver_data)
        this.$emit('change', this.ver_data)
      }
    }
  }
</script>
