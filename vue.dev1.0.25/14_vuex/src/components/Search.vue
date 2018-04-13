<template>
  <div class="search">
    <input type="text" class="search__input" v-model="query">
    <button class="search__button">Find</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  }
}
</script>
