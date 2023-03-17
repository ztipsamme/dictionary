<script>
  import search from '../components/Search.vue'
  export default {
    name: 'HomeView',
    components: {
      search,
    },
  }
</script>

<template>
  <h1>Home</h1>
  <p>Welcome to the dictionary.</p>
  <search />
</template>
