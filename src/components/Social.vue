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

<style lang="scss">
// @import 'assets/css/base';

.socialIconsBox  {
  margin: 0em auto 0;
  text-align: center;
  // width: 33px;
  // margin-top: 0.5em;
  padding: 0 0.6em;
  display: block !important;

  @include media($mobile) {
    padding: 0;
  }
}

.socialIcon {
  width: 40px !important;
  background-size: contain;
  background-repeat: no-repeat;
  height: 40px;
  // padding: 0; /* reset */
  margin-bottom: .5em;
  display: block !important;

  @include media($mobile) {
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    height: 0;
    padding: 0; /* reset */
    padding-bottom: 130%;
    display: block !important;
  }
  &.facebook {
    background-image: url(../assets/img/icons/facebook.svg);
    display: block !important;

    &:hover {
      background-image: url(../assets/img/icons/facebook_hv.svg);
    }
  }

  &.instagram {
    background-image: url(../assets/img/icons/instagram.svg);
    display: block !important;

    &:hover {
      background-image: url(../assets/img/icons/instagram_hv.svg);
    }
  }

  &.flickr {
    background-image: url(../assets/img/icons/flickr.svg);
    display: block !important;

    &:hover {
      background-image: url(../assets/img/icons/flickr_hv.svg);
    }
  }

  &.pinterest {
    background-image: url(../assets/img/icons/pinterest.svg);
    display: block !important;

    &:hover {
      background-image: url(../assets/img/icons/pinterest_hv.svg);
    }
  }
}


</style>
