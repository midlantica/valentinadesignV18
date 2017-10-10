<template>
<div>
  <main>
    <aside class="col1">
      <Bio/>
    </aside>
    <section class="home">
      <p class="delinky">
        <router-link to="/" title="home">< back</router-link>
      </p>
      <h2>Artist’s&nbsp;Statement</h2>
      <p>“My work is primarily driven by the idea of the creation of a unified whole through the use of minute details. The use of pop colors, lines and circles that swirl & undulate result in playful artwork made with passion. I use ink and other mediums to create flowing, intricate and highly detailed patterns, sometimes utilizing words for positive inspiration. Self healing and positive energy are the motivating concepts which ignite my passion to create. Through my work I hope to inspire and help others follow their dreams. I try to bring a fantastical, dreamlike appearance to my artwork, which includes digital drawings, mixed media and pen & ink illustrations.”</p>
    </section>
    <!-- <aside class="col3">
      <div class="marT3">
        <Social/>
      </div>
    </aside> -->
  </main>
</div>
</template>

<script>
import Bio from '../components/Bio'

export default {
  components: {
    Bio
  },
  head: {
    bodyAttrs: {
      class: 'index'
    }
  }
}
</script>

<style lang="scss">
// @import '~assets/css/base';
// @import '~assets/css/colors';
// @import '~assets/css/main';
// @import '~assets/css/styles';
</style>
