<template>
  <nav class="mainNav">

    <router-link to="/" title="home">
      <div class="navBtns homeBtn">Home</div>
    </router-link>

    <router-link to="/GalleryOriginalArtwork" title="Gallery">
      <div class="navBtns galleryBtn">Gallery</div>
    </router-link>

    <router-link to="/Shop" title="Shop">
      <div class="navBtns shopBtn">Shop</div>
    </router-link>

    <router-link to="/Contact" title="Contact">
      <div class="navBtns contactBtn">Contact</div>
    </router-link>

  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
  .mainNav {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    a {
      font-family: $header-font;
      font-size: 1.8em;
      display: block;
      width: 120px;
      height: 120px;
      margin: 0 .5em;
      border-bottom: none;
      align-self: center;

      // @include breakpoint($SmMdLg) {
      //   font-family: $header-font;
      //   // font-size: 2em;
      //   margin: 0 .25em;
      //   width: initial;
      //   height: initial;
      //   margin: 0;
      //   // background: pink; ///////////// ------>>>>>>>
      // }

      @include breakpoint($SmMd) {
        font-family: $copy;
        font-size: .775em;
        width: initial;
        height: initial;
        margin: 0 0em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        // background: pink; ///////////// ------>>>>>>>
      }

    }
  }

  .navBtns {
    color: $black;
    width: 120px;
    height: 120px;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding: 1.6em 0.5em 0 0em;

    &:hover {
      cursor: pointer;
    }

    @include breakpoint($SmMdLg) {
      // color: $black;
      // width: 120px;
      // height: 120px;
      // text-decoration: none;
      // text-align: center;
      // vertical-align: middle;
      // background-repeat: no-repeat;
      // background-position: center;
      // background-size: contain;
      // padding: 1.6em 0.5em 0 0em;
      // background: $green;

      }
      
    @include breakpoint($SmMd) {
      width: initial;
      height: initial;
      padding: 0.3em 0.75em;
      border: 1px dotted transparent;
      border-radius: 0.5em;
      background-image: none !important;
      text-align: center;
      margin: 0 1em;
      margin: .5em .25em;

      &:hover {
        background-image: none !important;
        background: lighten($green,30);
        border: 1px dotted $purple;
      }

    }

    a {
      text-decoration: none;
      border-bottom: none;
    }
  }

  .homeBtn {
    padding-right: .5em;

    &:hover {
      background-image: url(../assets/img/buttons/home_btn.svg);
      // padding-right: .5em;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .galleryBtn {
    padding: 1.6em 0.5em 0 0.3em;

    &:hover {
      background-image: url(../assets/img/buttons/gallery_btn.svg);
      cursor: pointer;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .shopBtn {
    padding: 1.6em 0.5em 0 0.7em;

    &:hover {
      background-image: url(../assets/img/buttons/shop_btn.svg);
      cursor: pointer;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .contactBtn {
    //

    &:hover {
      background-image: url(../assets/img/buttons/contact_btn.svg);
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .blogBtn {
    padding-left: 0.1em;

    &:hover {
      background-image: url(../assets/img/buttons/blog_btn.svg);
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  // ############################
  // UPSTATES ON INDIVIDUAL PAGES
  body.index .homeBtn {
    background-image: url(../assets/img/buttons/home_btn.svg);

    @include breakpoint($SmMd) {
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.artists-statement .homeBtn {
    background-image: url(../assets/img/buttons/home_btn.svg);

    @include breakpoint($SmMd) {
      color: $black;
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.original-artwork .galleryBtn,
  body.digital-artwork .galleryBtn,
  body.patterns .galleryBtn {
    background-image: url(../assets/img/buttons/gallery_btn.svg);

    @include breakpoint($SmMd) {
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.shop .shopBtn {
    background-image: url(../assets/img/buttons/shop_btn.svg);

    @include breakpoint($SmMd) {
      color: $black;
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.contact .contactBtn {
    background-image: url(../assets/img/buttons/contact_btn.svg);

    @include breakpoint($SmMd) {
      color: $black;
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

</style>
