<template>
  <div class="container">
    <h1>VueX</h1>
    <app-counter></app-counter>
    <hr>
    <app-another-counter></app-another-counter>
    <hr>
    <app-result></app-result>
    <hr>
    <input type="text" v-model="value">
    <p>Value: {{value}}</p>
  </div>
</template>

<script>
import Result from './Result'
import Counter from './Counter'
import AnotherCounter from './AnotherCounter'
import * as types from '../../store/types'

export default {
  computed: {
    value: {
      get () {
        return this.$store.getters[types.VALUE]
      },
      set (value) {
        this.$store.dispatch(types.MUTATE_UPDATE_VALUE, value)
      }
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style>
</style>
