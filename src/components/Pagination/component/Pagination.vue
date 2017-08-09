<template>
  <ul class="pagination">
    <li @click="prevEvent"><a href="javascript:;">{{prev_text}}</a></li>
    <li @click="clickEvent(1)" v-if="page_current-4>=1"><a href="javascript:;">1</a></li>
    <li v-if="page_current-4>1"><a>...</a></li>
    <li @click="clickEvent(i)" v-if="page_current-4<i&&page_current+4>i" v-for="i in page_num" :class="page_current===i?'active':''"><a href="javascript:;">{{i}}</a></li>
    <li v-if="page_current+4<page_num"><a>...</a></li>
    <li @click="clickEvent(page_num)" v-if="page_current+4<=page_num"><a href="javascript:;">{{page_num}}</a></li>
    <li @click="nextEvent"><a href="javascript:;">{{next_text}}</a></li>
  </ul>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FPagination',
    data () {
      return {
        page_num: 0,
        page_current: 0
      }
    },
    props: {
      current: Number,
      total: Number,
      page_size: Number,
      prev_text: {
        type: String,
        default: '上一页'
      },
      next_text: {
        type: String,
        default: '下一页'
      }
    },
    mounted () {
      this.page_current = this.current || 1
      this.page_num = this.total % this.page_size === 0 ? this.total / this.page_size : Math.ceil(this.total / this.page_size)
      this.page_current = this.page_current > this.page_num ? 1 : this.page_current
    },
    methods: {
      prevEvent () {
        if (this.page_current <= 1) {
          return
        }
        this.page_current--
        this.pageEvent()
      },
      nextEvent () {
        if (this.page_current >= this.page_num) {
          return
        }
        this.page_current++
        this.pageEvent()
      },
      clickEvent (i) {
        if (this.page_current === i) return
        this.page_current = i
        this.pageEvent()
      },
      pageEvent () {
        this.$emit('page-change', this.page_current)
      }
    }
  }
</script>
