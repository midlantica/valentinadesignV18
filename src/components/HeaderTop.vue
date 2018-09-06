<template>
  <header>
    <router-link to="/" title="home">
      <div class="headerArt"></div>
    </router-link>
  </header>
</template>

<script>

</script>

<style lang="scss">
  header {
    //
  }
  .headerArt {
    background-image: url(/static/img/headerC.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 32.5%; // 3:1

    @include breakpoint($SmMdLg) {
      background-image: url(/static/img/header_mobile.svg);
      background-size: cover;
      // background-size: 85% 76%;
      margin-top: -4em;
      margin-bottom: 4em;
      padding-bottom: 57%;
    }

    @include breakpoint($SmMd) {
      background-image: url(/static/img/header_mobile.svg);
      background-size: cover;
      // background-size: 85% 76%;
      margin-top: -3em;
      margin-bottom: 4em;
      padding-bottom: 57%;
    }

    @include breakpoint($sm) {
      background-image: url(/static/img/header_mobile.svg);
      background-size: cover;
      // background-size: 85% 76%;
      margin-top: -2em;
      margin-bottom: 3em;
      padding-bottom: 57%;
    }

  }
</style>

