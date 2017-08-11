<template>
  <div :class="`input-group spinner ${size==='lg'?'input-group-lg':''}`">
    <span class="input-group-btn">
      <button :class="`btn ${type?'btn-'+type:'btn-gray'}`" @click="number-=interval">-</button>
    </span>
    <input v-model="number" type="text" class="form-control text-center" value="1" :readonly="readonly">
    <span class="input-group-btn">
      <button :class="`btn ${type?'btn-'+type:'btn-gray'}`" @click="number+=interval">+</button>
    </span>
  </div>
</template>
<script>
  /**
   *
   * */
  export default {
    name: 'FSpinner',
    data () {
      return {
        number: 1
      }
    },
    props: {
      value: Number,
      min: Number,
      max: Number,
      interval: {
        type: Number,
        default: 1
      },
      readonly: Boolean,
      type: {
        type: String,
        default: 'secondary'
      },
      size: String
    },
    mounted () {
      this.number = this.value || 1
    },
    methods: {},
    watch: {
      number: {
        handler: function (val, oldval) {
          this.number = parseInt(val)
          if (isNaN(this.number)) this.number = this.min || 1
          if (this.max && val > this.max) this.number = this.max
          if (this.min && val < this.min) this.number = this.min
          this.$emit('input', this.number)
        }
      }
    }
  }
</script>
