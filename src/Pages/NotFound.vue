<template>
  <main class="twoColMain">
    <h2>Error</h2>
    <p>This page does not exist</p>
  </main>
</template>

<script>
  export default {
    metaInfo: {
      bodyAttrs: {
        class: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  main {
    margin: 2em auto;
    // @include span-columns(12);
    h2, p {
      text-align: center;
      font-size: 150%;
    }
  }
</style>
