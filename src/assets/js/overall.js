const $ = window.jQuery
$('body').append('<div id="toast-container" class="toast-top-right"></div>')
const FMessage = $('#toast-container')
// <div id="toast-container" class="toast-bottom-right" aria-live="polite" role="alert"><div class="toast toast-success"><button class="toast-close-button" role="button">×</button><div class="toast-title">This is a title</div><div class="toast-message">So me by marianne admitted speaking.</div></div></div>
const message = {
  info: (configure) => {
    message.main(configure, 'info')
  },
  success: (configure) => {
    message.main(configure, 'success')
  },
  error: (configure) => {
    message.main(configure, 'error')
  },
  warning: (configure) => {
    message.main(configure, 'warning')
  },
  setPosition: (x, y) => {
    FMessage.attr('class', `toast-${x}-${y}`)
  },
  main: (configure, type) => {
    let id = 'FMessage' + parseInt(Math.random() * 99999999)
    if (typeof configure === 'string') {
      FMessage.append('<div id="' + id + '" class="toast toast-' + type + '"><button class="toast-close-button">×</button><div class="toast-message">' + configure + '</div></div>')
      setTimeout(() => {
        message.remove($('#' + id))
      }, 3000)
    } else if (typeof configure === 'object') {
      FMessage.append('<div id="' + id + '" class="toast toast-' + type + '"><button class="toast-close-button">×</button><div class="toast-title">' + configure.title + '</div><div class="toast-message">' + configure.message + '</div></div>')
      if (configure.time !== 0) {
        setTimeout(() => {
          message.remove($('#' + id))
        }, configure.time || 3000)
      }
    }
    $('#' + id).find('button').click(function () {
      message.remove($('#' + id))
    })
    $('#' + id).fadeIn(300)
  },
  remove (id) {
    id.fadeOut(300, function () {
      id.remove()
    })
  }
}
const overall = {
  F (Vue) {
    Vue.prototype.$message = message
  }
}
export default overall
