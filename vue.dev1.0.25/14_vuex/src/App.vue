<template>
  <div id="app">
    <header>
      <search></search>
    </header>
    <main>
      <results></results>
    </main>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: { Search, Results }
}
</script>

