<template>
<div>
  <main>

    <aside class="col1">
      <Bio/>
    </aside>

    <section class="home">
      <h2>Welcome to Valentina's world</h2>
      <p><b>After 15 years working as a graphic designer, Valentina Harper (formerly Ramos)</b> started to create other arts and crafts. From these creations, Valentina Design was born: her world of fantasies and dreams; where her uplifting drawings and designs took shape.</p>
      <p>In her Nashville studio, this Venezuelan artist spent countless happy hours playing with her paints and her <a href="http://www.kohinoorusa.com/products/pens/rapidograph/index.html" target="_blank">Rapidograph pens</a>. She enjoys working with different materials, but black ink is one of the mediums you will always find in her original prints, paintings and drawings. Her love for artworks with little intricate details are a signature of her own drawing style.</p>
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
    metaInfo: {
      bodyAttrs: {
        class: 'index'
      }
    }
  }
</script>

<style lang="scss">

</style>
