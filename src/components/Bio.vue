<template>
  <div class="centerContent">
    <router-link to="ArtistStatement">
      <img class="valPic" src="../assets/img/val_pic.jpg">
      <p class="statement">See Artist's Statement</p>
    </router-link>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  a {
    border-bottom: none;
    @include clearfix;
  }

  .valPic {
    border-radius: 20em;
    text-align: center;

    @include breakpoint($SmMdLg) {
      width: 50%;
      // @include span-columns(6 of 10);
      // @include shift(2);
      // margin-right: 2em;
      // @include clearfix;
    }
  }

  .statement {
    font-size: 1em;
    text-align: center;
    // float: none;
    margin-top: 0.4em;
    font-weight: bold;
    // @include clearfix;

    @include breakpoint($mobile) {
      display: block;
      margin-bottom: 0;
      // @include clearfix;
      // clear: both;
    }
  }
</style>
