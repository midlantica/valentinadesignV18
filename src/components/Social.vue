<template>
  <div class="socialIconsBox">
    <a class="socialIcon facebook" href="http://www.facebook.com/ValentinaRamosArt" target="_blank"></a>
    <a class="socialIcon instagram" href="https://www.instagram.com/valentinadesign/" target="_blank"></a>
    <a class="socialIcon flickr" href="http://www.flickr.com/photos/valentinadesign/" target="_blank"></a>
    <a class="socialIcon pinterest" href="http://pinterest.com/valentinaharper/" target="_blank"></a>
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
    width: 40px;
    height: 250px;

    a.socialIcon {
      width: 40px;
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0;
      margin-bottom: .5em;
      display: block;
      // flex-basis: 1;
      border-bottom: none;
      // flex-grow: 1;
      // @include clearfix;

      &.facebook {
        background-image: url(../assets/img/iconsPNG/facebook.png);

        &:hover {
          background-image: url(../assets/img/iconsPNG/facebook_hv.png);
        }
      }

      &.instagram {
        background-image: url(../assets/img/iconsPNG/instagram.png);

        &:hover {
          background-image: url(../assets/img/iconsPNG/instagram_hv.png);
        }
      }

      &.flickr {
        background-image: url(../assets/img/iconsPNG/flickr.png);

        &:hover {
          background-image: url(../assets/img/iconsPNG/flickr_hv.png);
        }
      }

      &.pinterest {
        background-image: url(../assets/img/iconsPNG/pinterest.png);

        &:hover {
          background-image: url(../assets/img/iconsPNG/pinterest_hv.png);
        }
      }
    }
  }

</style>
