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
import * as types from '../../store/types'

export default {
  methods: {
    ...mapActions({
      asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
      asyncDecrement: types.COUNTER_DECREMENT_ASYNC
    }),
    increment (by) {
      this.$store.dispatch(types.COUNTER_INCREMENT, by)
    },
    decrement (by) {
      this.$store.dispatch(types.COUNTER_DECREMENT, by)
    }
  }
}
</script>

<style>

</style>
