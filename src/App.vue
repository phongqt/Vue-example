<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <main class="col-md-12 col-xl-12 py-md-12 pl-md-12 bd-content" role="main">
          <app-header></app-header>
          <router-view></router-view>
        </main>
    </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
