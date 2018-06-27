<template>
  <div class="socialIconsBox">
    <a class="socialIcon facebook" href="http://www.facebook.com/ValentinaRamosArt" target="_blank">
    </a>
    <a class="socialIcon instagram" href="https://www.instagram.com/valentinadesign/" target="_blank">
    </a>
    <a class="socialIcon flickr" href="http://www.flickr.com/photos/valentinadesign/" target="_blank">
    </a>
    <a class="socialIcon pinterest" href="http://pinterest.com/valentinaharper/" target="_blank">
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
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-start;
    float: right;
  }

  a.socialIcon {
    width: 40px !important;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    // padding: 0; /* reset */
    margin-bottom: .5em;
    display: block !important;
    border-bottom: none;
    // flex-basis: auto;
    // flex-grow: 0;
    //

    &.facebook {
      background-image: url(/static/img/icons/facebook.svg);
      // display: block !important;

      &:hover {
        background-image: url(/static/img/icons/facebook_hv.svg);
      }
    }

    &.instagram {
      background-image: url(/static/img/icons/instagram.svg);
      // display: block !important;

      &:hover {
        background-image: url(/static/img/icons/instagram_hv.svg);
      }
    }

    &.flickr {
      background-image: url(/static/img/icons/flickr.svg);
      // display: block !important;

      &:hover {
        background-image: url(/static/img/icons/flickr_hv.svg);
      }
    }

    &.pinterest {
      background-image: url(/static/img/icons/pinterest.svg);
      // display: block !important;

      &:hover {
        background-image: url(/static/img/icons/pinterest_hv.svg);
      }
    }
  }
</style>
