<template>
<div>
  <div class="centerContent">
    <img class="valPic" src="../assets/img/val_pic.jpg">
  </div>
  <p class="statement">
    <router-link to="/ArtistStatement">See Artist's Statement</router-link>
  </p>
</div>
</template>

<script>

</script>

<style lang="scss">
  .valPic {
    margin-top: 0.3em;
    border-radius: 20em;

    @include media($mobile) {
      @include span-columns(6 of 10);
      @include shift(2);
      margin-right: 2em;
    }
  }

  .statement {
    font-size: 1em;
    text-align: center;
    float: none;
    margin-top: 0.4em;
    font-weight: bold;

    @include media($mobile) {
      display: block;
      margin-bottom: 0;
      @include clearfix;
    }
  }
</style>
