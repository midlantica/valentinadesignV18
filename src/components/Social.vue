<template>
  <div class="socialIconsBox">
    <a href="http://www.facebook.com/ValentinaRamosArt" target="_blank">
      <div class="socialIcon facebook">&nbsp;</div>
    </a>
    <a href="https://www.instagram.com/valentinadesign/" target="_blank">
      <div class="socialIcon instagram">&nbsp;</div>
    </a>
    <a href="http://www.flickr.com/photos/valentinadesign/" target="_blank">
      <div class="socialIcon flickr">&nbsp;</div>
    </a>
    <a href="http://pinterest.com/valentinaharper/" target="_blank">
      <div class="socialIcon pinterest">&nbsp;</div>
    </a>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  // @import 'assets/css/base';

  .socialIconsBox {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    float: right;
    height: 250px;
    width: 40px;
    @include clearfix;

    a {
      border-bottom: none !important;
      width: 40px !important;
      height: 40px !important;
      margin-bottom: .5em !important;
      @include clearfix;
    }
  }

  .socialIcon {
    width: 40px !important;
    height: 40px !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    // padding: 0; /* reset */
    margin-bottom: .5em !important;
    display: block !important;
    // flex-basis: auto;
    // flex-grow: 1;
    @include clearfix;

    &.facebook {
      background-image: url(/static/img/icons/facebook.svg);
      display: block !important;

      &:hover {
        background-image: url(/static/img/icons/facebook_hv.svg);
      }
    }

    &.instagram {
      background-image: url(/static/img/icons/instagram.svg);
      display: block !important;

      &:hover {
        background-image: url(/static/img/icons/instagram_hv.svg);
      }
    }

    &.flickr {
      background-image: url(/static/img/icons/flickr.svg);
      display: block !important;

      &:hover {
        background-image: url(/static/img/icons/flickr_hv.svg);
      }
    }

    &.pinterest {
      background-image: url(/static/img/icons/pinterest.svg);
      display: block !important;

      &:hover {
        background-image: url(/static/img/icons/pinterest_hv.svg);
      }
    }
  }
</style>
