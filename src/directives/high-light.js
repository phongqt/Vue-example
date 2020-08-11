import Vue from 'vue'

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    // el.style.color = binding.value
    if (binding.arg === 'background') {
      el.style.backgroundColor = binding.value.backgroundColor
      el.style.fontSize = binding.value.fontSize
      el.style.color = binding.value.color
    } else {
      el.style.color = binding.value
    }
  }
})
