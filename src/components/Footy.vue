<template>
  <footer>
    <p>Copyright 2008 &ndash; {{ year }}</p>
    <div class="footerArt"></div>
  </footer>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      year: moment().format('YYYY')
    }
  }
}
</script>

<style lang="scss">
  // @import 'assets/css/base';
  .footerArt {
    width: 100%;
    background-image: url(../assets/img/footer.svg);
    background-size: contain;
    background-repeat: no-repeat;
    height: 0;
    padding: 0; /* reset */
    padding-bottom: 25%;
    // margin-bottom: 0em;
    // margin-top: 1em;
    background-position-y: 0.7em;

    @include media($mobile) {
      background-image: url(../assets/img/footer.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 0;
      padding: 0; /* reset */
      padding-bottom: 33%;
      // margin-top: 1.3em;
      background-position-y: 1.4em;
    }
  }

  footer p {
    margin-bottom: -2em;
    position: relative;
    font-size: 0.7em;
  }

</style>
