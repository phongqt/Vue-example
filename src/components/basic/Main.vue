<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animation</h1>
        <hr />
        <button class="btn btn-primary" @click="show =! show">Show alert</button>
        <br />
        <br />
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
      </div>
    </div>
    <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
    <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <hr />
    <p
      v-highlight:background="{color: 'red', fontSize: '15px', backgroundColor: 'green'}"
    >{{message | to-upperCase}}</p>
    <hr />
    <input type="text" v-model="fruitText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>
    <hr />
    <app-fruit-list></app-fruit-list>
  </div>
</template>

<script>
import QuoteGrid from './QuoteGrid'
import NewQuote from './NewQuote'
import ProgressBar from './ProgressBar'
import FruitList from './FruitList'
import { fruitMixin } from '../../mixins/fruitMixins'
export default {
  mixins: [fruitMixin],
  data: function () {
    return {
      message: 'Hello world!!!',
      quotes: ['Just a Quote to test'],
      maxQuotes: 10,
      show: false
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appProgressBar: ProgressBar,
    appFruitList: FruitList
  },
  methods: {
    addNewQuote: function (value) {
      if (this.quotes.length >= this.maxQuotes) {
        alert('Please delete quotes first!')
      } else {
        this.quotes.push(value)
      }
    },
    deleteQuote: function (index) {
      this.quotes.splice(index, 1)
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
