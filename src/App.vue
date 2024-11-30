<script>
  export default {
    name: 'App',
    data() {
      return {
        date: new Date().getFullYear(),
      }
    },
  }
</script>

<template>
  <nav>
    <ul class="d-flex list-unstyled">
      <li class="p-3">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="p-3">
        <RouterLink to="/search/hello">Search</RouterLink>
      </li>
    </ul>
  </nav>
  <main class="w-75 mx-auto">
    <RouterView />
  </main>
  <footer class="text-center p-3">Copyright © {{ date }}</footer>
</template>
