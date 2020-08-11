<template>
  <div class="row">
    <form @submit="onSave">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group">
        <label>Quote</label>
        <textarea class="form-control" v-model="quote" rows="3"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      quote: ''
    }
  },
  methods: {
    onSave: function () {
      this.$emit('quoteAdded', this.quote)
      this.quote = ''
    }
  }
}
</script>

<style>
</style>
