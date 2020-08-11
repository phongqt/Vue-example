<template>
  <div class="container">
    <h1>VueX</h1>
    <app-counter></app-counter>
    <hr>
    <app-another-counter></app-another-counter>
    <hr>
    <app-result></app-result>
  </div>
</template>

<script>
import Result from './Result'
import Counter from './Counter'
import AnotherCounter from './AnotherCounter'
export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style>
</style>
