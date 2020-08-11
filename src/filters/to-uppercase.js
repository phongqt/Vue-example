import Vue from 'vue'

Vue.filter('to-upperCase', function (value) {
  return value.toUpperCase()
})
