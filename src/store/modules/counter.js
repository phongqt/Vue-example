import * as types from '../types'

const state = {
  counter: 0
}

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter * 2 + ' Clicks'
  }
}

const mutations = {
  [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
    state.counter += payload
  },
  [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
    state.counter -= payload
  }
}

const actions = {
  [types.COUNTER_INCREMENT]: (context, payload) => {
    context.commit(types.MUTATE_INCREMENT_COUNTER, payload)
  },
  [types.COUNTER_DECREMENT]: (context, payload) => {
    context.commit(types.MUTATE_DECREMENT_COUNTER, payload)
  },
  [types.COUNTER_INCREMENT_ASYNC]: (context, payload) => {
    setTimeout(() => {
      context.commit(types.MUTATE_INCREMENT_COUNTER, payload)
    }, 1000)
  },
  [types.COUNTER_DECREMENT_ASYNC]: (context, payload) => {
    setTimeout(() => {
      context.commit(types.MUTATE_DECREMENT_COUNTER, payload)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
