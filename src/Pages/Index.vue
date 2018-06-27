<template>
<div>
  <main>

    <aside class="col1">
      <Bio/>
    </aside>

    <section class="home">
      <HomeContent/>
    </section>

    <aside class="col3 marT2">
      <Social/>
    </aside>

  </main>
</div>
</template>

<script>
  import HomeContent from '../components/HomeContent'
  import Bio from '../components/Bio'
  import Social from '../components/Social'
  export default {
    components: {
      HomeContent,
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

</style>
