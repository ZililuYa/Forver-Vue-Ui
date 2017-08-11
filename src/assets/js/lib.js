import $ from 'jquery'
window.jQuery = window.$ = $
import 'nicescroll'
import 'jquery-validation'
import lan from './language/messages_zh.js'
const lib = {
  F (Vue) {
    let Forver = {
      cursorcolor: '#aaaaaa',
      cursorwidth: '5px',
      cursorborder: '0px',
      cursorborderradius: '0px'
    }
    window.jQuery('body').niceScroll(Forver)
    lan.setLanguage(window.jQuery)
  }
}
export default lib
