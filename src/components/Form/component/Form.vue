<template>
  <form ref="form" :id="id" class="FForm form-horizontal">
    <slot></slot>
  </form>
</template>
<script>
  /**
   *
   * */
  const $ = window.jQuery
  export default {
    name: 'FForm',
    data () {
      return {
        id: 'FFrom',
        form: ''
      }
    },
    props: {
      handle: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
      this.id += parseInt(Math.random() * 999999)
      this.form = $('.FForm').validate({
        // debug: true,
        errorPlacement: (error, element) => {
          if (this.handle) {
            element.parent().parent('.form-group').removeClass('has-success')
            element.parent().parent('.form-group').addClass('has-error')
            element.next().html(error[0].innerHTML)
            element.next().show()
          }
          this.changeEvent()
          this.$emit('error', element, error)
        },
        success: (error, element) => {
          if (error) {
            if (this.handle) {
              $(element).parent().parent('.form-group').removeClass('has-error')
              $(element).parent().parent('.form-group').addClass('has-success')
              $(element).next().hide()
            }
            this.changeEvent()
            this.$emit('success', element)
          }
        }
      })
      this.form.id = this.id
    },
    methods: {
      changeEvent () {
        this.$emit('input', this.form)
      }
    }
  }
</script>
