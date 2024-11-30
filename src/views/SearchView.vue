<script>
  import search from '../components/Search.vue'
  import searchResult from '../components/SearchResult.vue'
  export default {
    name: 'SearchView',
    components: {
      search,
      searchResult,
    },
    data() {
      return {
        word: '',
      }
    },
    methods: {
      onStartGame(o) {
        this.word = o.word
      },
    },
  }
</script>

<template>
  <h1>Search result for: {{ word }}</h1>
  <search @search="onStartGame" class="py-3" />
  <searchResult :word="word" class="py-3" />
</template>
