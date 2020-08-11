<template>
  <div>
      <h1>User Edit</h1>
      <p>Locale: {{$route.query.locale}}</p>
      <p>Q: {{$route.query.q}}</p>
      <div style="height: 700px"></div>
      <div id="data">Some data</div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave (to, from, next) {
    if (confirm('Are you sure?')) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style>

</style>
