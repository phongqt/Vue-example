<template>
  <div class="container">
    <input type="text" v-model="fruitText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import {fruitMixin} from '../../mixins/fruitMixins'
export default {
  mixins: [fruitMixin]
}
</script>

<style>
</style>
