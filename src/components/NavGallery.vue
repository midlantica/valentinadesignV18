<template>
  <nav class="nav_gall">
    <div class="oe_art">
      <router-link to="./GalleryOriginalArtwork" title="Original Artwork">Original Art</router-link>
    </div>
    <div class="da_art">
      <router-link to="./GalleryDigitalArtwork" title="Digital Artwork">Digital Art</router-link>
    </div>
    <div class="patt_art">
      <router-link to="./GalleryPatterns" title="Patterns">Patterns</router-link>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>

  .nav_gall {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-basis: min-content;
    text-align: center;
    margin: 0em auto 1em;
  }

  .nav_gall div {
    font-family: $copy, Arial, sans-serif;
    font-size: 1em;
    letter-spacing: 0.085em;
    background-image: none;
    list-style-type: none;
    // padding: .25em .5em ;
    margin: .5em 1em;
    text-align: center;
    bottom: 1px solid red;

    a {
      color: darken($green, 10);
      font-weight: bold;
      padding: .2em 0;
      border-bottom: 2px dotted $orange;
      // margin: 0 0 2em 0;
      &:hover {
        color: $purple;
      }
    }

    @include breakpoint($SmMd) {
      margin: 1em .5em;
    }
  }

  .nav_gall li a:hover {
    color: $purple;
    font-size: .75em;
  }

  .original-artwork .nav_gall .oe_art a,
  .digital-artwork .nav_gall .da_art a,
  .patterns .nav_gall .patt_art a {
    color: $grey;
    font-weight: bold;
  }

</style>
