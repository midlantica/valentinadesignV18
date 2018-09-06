<template>
  <main class="twoColMain">
    <h2>Thanks!</h2>
    <p>Your information was submitted successfully.</p>
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
