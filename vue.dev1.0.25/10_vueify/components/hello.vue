<template>
  <h1>{{ greeting }}</h1>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        greeting: 'hello vueify'
      }
    }
  }
</script>

<style>
  h1 {
    font-family: 'Roboto', sans-serif;
    color: green;
  }
</style>
