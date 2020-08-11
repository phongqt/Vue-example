<template>
  <div class="container">
    <transition mode="out-in" name="slide">
      <router-view></router-view>
    </transition>
    <hr>
    <button class="btn btn-primary" @click="goToHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>
</style>
