<script>
  import axios from 'axios'
  export default {
    name: 'SearchComponent',
    computed: {
      word: {
        get() {
          return this.$store.state.word
        },
        set(value) {
          this.$store.commit('updateWord', value)
        },
      },
      dictionary: {
        get() {
          return this.$store.state.dictionary
        },
        set(value) {
          this.$store.commit('updateDictionary', value)
        },
      },
    },
    methods: {
      onClick() {
        console.log('Search has been initiated')
        this.fetchAPI()
        this.$emit('search', {
          word: this.word,
        })
      },
      updateWord(e) {
        this.$store.commit('updateWord', e.target.value)
      },
      updateDictionary(e) {
        this.$store.commit('updateDictionary', e.target.value)
      },
      async fetchAPI() {
        // //API in use https://rapidapi.com/dpventures/api/wordsapi/
        const options = {
          method: 'GET',
          url: 'https://wordsapiv1.p.rapidapi.com/words/' + this.word,
          headers: {
            'X-RapidAPI-Key':
              '660daa00femsh9d5e25367720e4ap1d471djsn5fe3380f1975',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
          },
        }

        const response = await axios
          .request(options)
          .then(function (response) {
            return response.data
          })
          .catch(function (error) {
            return error
          })

        if (response.word !== undefined) {
          this.dictionary = response
          this.$router.push('/search/' + this.word)
          console.log('Dictionary', this.dictionary)
        } else {
          this.dictionary = { word: '' }
        }
        console.log('Response:', response.word)
      },
    },
    emits: ['search'],
    watch: {
      //Removes error message when input-field is empty.
      word(input) {
        input.length === 0 ? (this.dictionary = '') : undefined
      },
    },
  }
</script>

<template>
  <form>
    <legend>Search</legend>
    <label class="form-label" for="searchInput">
      What word would you like to look up?
    </label>
    <div class="d-flex">
      <input
        class="form-control form-control-lg"
        id="searchInput"
        v-model="word"
        required
      />
      <input
        class="btn btn-primary"
        @click="onClick"
        :disabled="word.length === 0 ? true : false"
        type="button"
        value="Search"
      />
    </div>
  </form>
</template>
