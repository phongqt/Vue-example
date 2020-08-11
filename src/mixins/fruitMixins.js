export const fruitMixin = {
  data: function () {
    return {
      message: 'Hello world!!!',
      fruits: ['Apple', 'Banana', 'Melon', 'Coconus', 'Tomato'],
      fruitText: ''
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter(function (e) {
        return e.match(this.fruitText)
      }.bind(this))
    }
  }
}
