<template>
  <div>
      <h1>Mutation Counter</h1>
      <button class="btn btn-primary" @click="increment(100)">Increment</button>
      <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
      <button class="btn btn-primary" @click="asyncIncrement(100)">Async Increment</button>
      <button class="btn btn-primary" @click="asyncDecrement(100)">Async Decrement</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['asyncIncrement', 'asyncDecrement']),
    increment (by) {
      this.$store.dispatch('increment', by)
    },
    decrement (by) {
      this.$store.dispatch('decrement', by)
    }
  }
}
</script>

<style>

</style>
