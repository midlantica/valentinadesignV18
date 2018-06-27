<template>
<div>
  <main>

    <aside class="col1">
      <Bio/>
      <p class="delinky">
        <router-link to="/" title="home">< back</router-link>
      </p>
    </aside>

    <section class="home">
      <Statement/>
    </section>

    <aside class="col3 marT2">
      <Social/>
    </aside>

  </main>
</div>
</template>

<script>
  import Statement from '../components/Statement'
  import Bio from '../components/Bio'
  import Social from '../components/Social'
  export default {
    components: {
      Statement,
      Bio,
      Social
    },
    metaInfo: {
      bodyAttrs: {
        class: 'index'
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    text-align: center;
  }
</style>
