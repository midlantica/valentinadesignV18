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
    float: right;
    flex-direction: column;
    // flex-wrap: nowrap;
    // justify-content: flex-end;
    // align-items: flex-start;
    // align-content: stretch;
    // float: right;
    margin-left: 1rem;
    width: 40px;
    // height: 250px;
    // margin-top: .5em;

    a.socialIcon {
      width: 40px;
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0;
      margin-bottom: .5em;
      // flex-basis: 1;
      border-bottom: none;
      // flex-grow: 1;
      // @include clearfix;

      &.facebook {
        background-image: url(~/static/img/icons/facebook.svg);

        &:hover {
          background-image: url(~/static/img/icons/facebook_hv.svg);
        }
      }

      &.instagram {
        background-image: url(~/static/img/icons/instagram.svg);

        &:hover {
          background-image: url(~/static/img/icons/instagram_hv.svg);
        }
      }

      &.flickr {
        background-image: url(~/static/img/icons/flickr.svg);

        &:hover {
          background-image: url(~/static/img/icons/flickr_hv.svg);
        }
      }

      &.pinterest {
        background-image: url(~/static/img/icons/pinterest.svg);

        &:hover {
          background-image: url(~/static/img/icons/pinterest_hv.svg);
        }
      }
    }
  }

</style>
