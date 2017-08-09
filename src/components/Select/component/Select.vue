<template>
  <span class="selectboxit-container selectboxit-container FSelect" aria-expanded="true">
    <div class="ButtonDropdownMask" @click="clickEvent" v-show="state"></div>
    <span :class="`selectboxit form-control selectboxit-enabled selectboxit-btn ${state?'selectboxit-open':''}`" @click="clickEvent">
      <span class="selectboxit-option-icon-container">
        <i class=""></i>
      </span>
      <span class="selectboxit-text">{{input}}</span>
      <span class="selectboxit-arrow-container">
        <i class="selectboxit-arrow selectboxit-default-arrow"></i>
      </span>
    </span>
    <ul class="selectboxit-options selectboxit-list" ref="select" style="min-width: 58px; max-height: 250px; top: auto; display: none" v-if="data && data.length">
      <li @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent" class="selectboxit-option" v-for="item in data" @click="optionClickEvent(item)">
        <a class="selectboxit-option-anchor">
          {{item.text || item}}
        </a>
      </li>
    </ul>
  </span>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FSelect',
    data () {
      return {
        state: false,
        input: '',
        place: '请选择'
      }
    },
    props: {
      data: Array,
      placeholder: String,
      value: [String, Number]
    },
    mounted () {
      this.input = this.placeholder || this.place
      if (this.data && this.data.length && this.value) {
        for (let i in this.data) {
          if (this.data[i].value === this.value) {
            this.input = this.data[i].text
            break
          }
        }
      }
    },
    methods: {
      clickEvent () {
        this.state = !this.state
        if (this.data && this.data.length) this.$refs.select.style.display = (this.state ? 'block' : 'none')
      },
      optionClickEvent (item) {
        this.input = item.text || item
        this.clickEvent()
        this.$emit('input', item.value)
        this.$emit('change', item)
      },
      mouseenterEvent (evt) {
        evt.target.className = 'selectboxit-option selectboxit-focus'
      },
      mouseleaveEvent (evt) {
        evt.target.className = 'selectboxit-option'
      }
    }
  }
</script>
