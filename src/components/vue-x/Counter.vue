<template>
  <div>
      <h1>Counter</h1>
      <button class="btn btn-primary" @click="increment">Increment</button>
      <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import * as types from '../../store/types'

export default {
  methods: {
    increment () {
      this.$store.commit(types.MUTATE_INCREMENT_COUNTER, 1)
    },
    decrement () {
      this.$store.commit(types.MUTATE_DECREMENT_COUNTER, 1)
    }
  }
}
</script>

<style>

</style>
