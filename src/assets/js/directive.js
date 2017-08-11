const directive = {
  F: (Vue) => {
    Vue.directive('FTooltips', {
      bind: () => {
      },
      inserted: (el, binding) => {
        let $ = window.jQuery
        let value = binding.value
        let type = 'default'
        let id = ''
        if (typeof value === 'object') {
          type = value.type
          value = value.text
        }
        el.addEventListener('mouseover', () => {
          let top = $(el).offset().top - (parseInt($(el).css('height')) + 20)
          let tooltip = document.createElement('div')
          id = 'tooltip-' + parseInt(Math.random() * 9999)
          tooltip.id = id
          tooltip.className = 'tooltip top fade in tooltip-' + type
          tooltip.style.top = top + 'px'
          let tooltipArrow = document.createElement('div')
          let tooltipInner = document.createElement('div')
          tooltipArrow.className = 'tooltip-arrow'
          tooltipInner.className = 'tooltip-inner'
          tooltipInner.innerHTML = value
          tooltip.appendChild(tooltipArrow)
          tooltip.appendChild(tooltipInner)
          document.body.appendChild(tooltip)
          let left = $(el).offset().left - (parseInt($(tooltip).css('width')) / 2) + (parseInt($(el).css('width')) / 2)
          tooltip.style.left = left + 'px'
        })
        el.addEventListener('mouseout', () => {
          $('#' + id).remove()
        })
      }
    })
  }
}

export default directive
