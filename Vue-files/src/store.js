import { createStore } from 'vuex'

const mutations = {
    updateWord(state, word) {
      state.word = word
    },
    updateDictionary(state, dictionary) {
      state.dictionary = dictionary
    },
  },
  state = {
    word: '',
    dictionary: '',
  }

export default createStore({ mutations, state, strict: true })
