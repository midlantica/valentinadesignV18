<template>
  <nav class="mainNav">
    <ul>
      <li>
        <a href="/" title="Home">
          <div class="navBtns homeBtn">Home</div>
        </a>
      </li>
      <li>
        <a href="/GalleryOriginalArtwork" title="GalleryOriginalArtwork">
          <div class="navBtns galleryBtn">Gallery</div>
        </a>
      </li>
      <li>
        <a href="/Shop" title="Shop">
          <div class="navBtns shopBtn">Shop</div>
        </a>
      </li>
      <li>
        <a href="/Contact" title="Contact">
          <div class="navBtns contactBtn">Contact</div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>

<style lang="scss">
// @import '~assets/css/base';
.mainNav {
  @include span-columns(8);
  @include shift(2);
  position: relative;
  margin-top: -4em;
  // padding: 0;

  @include media($mobile) {
    @include span-columns(8);
    @include shift(2);
    margin-top: -1.5em;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      @include span-columns(2 of 10, block-collapse);
      font-family: $header-font;
      font-size: 1.8em;
      padding: 0;
      margin: 0 0 0 .5em;
      &:last-child {
        @include omega();
      }

      @include media($mobile) {
        font-size: 1.3em;
        padding-left: .1em;
        padding-right: .1em;
        height: 1.5em;

        &:last-child {
          @include omega();
        }
      }

      a {
        color: $black;
      }
    }
  }
}

.navBtns {
  text-decoration: none;
  list-style-image: none;
  height: auto;
  line-height: 119px;
  color: $black;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &:hover {
    cursor: pointer;
  }

  @include media($mobile) {
    line-height: 26px;
    margin-top: -0em;
    padding: 0.2em 0em 1.3em;
    line-height: 1em;
    border: 1px dotted transparent;
    border-radius: 0.5em;
    background-image: none;
    height: 1em;
    // background: $green;

    &:hover {
      background-image: none;
      height: 1em;
      text-align: center;
      margin: 0 auto;
      background: lighten($green,30);
      border: 1px dotted $purple;
      cursor: pointer;
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
    padding-right: .5em;
  }

  @include media($mobile) {
    color: $black;
    padding-right: 0em;
    background-image: none;

    &:hover {
      padding-right: 0em;
      background-image: none;
    }
  }
}

.galleryBtn {
  //
  &:hover {
    background-image: url(../assets/img/buttons/gallery_btn.svg);
    cursor: pointer;
  }
  @include media($mobile) {
    color: $black;
    background-image: none;

    &:hover {
      background-image: none;
    }
  }
}

.shopBtn {
  padding-left: 0.2em;
  &:hover {
    background-image: url(../assets/img/buttons/shop_btn.svg);
    cursor: pointer;
  }

  @include media($mobile) {
    padding-left: 0em;
    color: $black;
    background-image: none;

    &:hover {
      background-image: none;
    }
  }
}

.contactBtn {
  //
  &:hover {
    background-image: url(../assets/img/buttons/contact_btn.svg);
    cursor: pointer;
  }

  @include media($mobile) {
    color: $black;
    background-image: none;

    &:hover {
      background-image: none;
    }
  }
}

.blogBtn {
  padding-left: 0.1em;
  &:hover {
    background-image: url(../assets/img/buttons/blog_btn.svg);
    cursor: pointer;
  }
  @include media($mobile) {
    color: $black;
    background-image: none;

    &:hover {
      background-image: none;
    }
  }
}

// ############################
// ############################
// ############################
// UPSTATES ON INDIVIDUAL PAGES
body.index .homeBtn {
  background-image: url(../assets/img/buttons/home_btn.svg);

  @include media($mobile) {
    color: $black;
    background-image: none;
    background: lighten($green,30);
    height: 1em;
    line-height: 26px;
    padding: 0.2em 0em 1.3em;
    line-height: 1em;
    border: 1px dotted $purple;
    border-radius: 0.5em;
  }
}

body.artists-statement .homeBtn {
  background-image: url(../assets/img/buttons/home_btn.svg);

  @include media($mobile) {
    color: $black;
    background-image: none;
    background: lighten($green,30);
    height: 1em;
    line-height: 26px;
    padding: 0.2em 0em 1.3em;
    line-height: 1em;
    border: 1px dotted $purple;
    border-radius: 0.5em;
  }
}

body.original-artwork .galleryBtn,
body.digital-artwork .galleryBtn,
body.patterns .galleryBtn {
  background-image: url(../assets/img/buttons/gallery_btn.svg);

  @include media($mobile) {
    color: $black;
    background-image: none;
    background: lighten($green,30);
    height: 1em;
    line-height: 26px;
    padding: 0.2em 0em 1.3em;
    line-height: 1em;
    border: 1px dotted $purple;
    border-radius: 0.5em;
  }
}

body.shop .shopBtn {
  background-image: url(../assets/img/buttons/shop_btn.svg);

  @include media($mobile) {
    color: $black;
    background-image: none;
    background: lighten($green,30);
    height: 1em;
    line-height: 26px;
    padding: 0.2em 0em 1.3em;
    line-height: 1em;
    border: 1px dotted $purple;
    border-radius: 0.5em;
    padding-right: 0em;
  }
}

body.contact .contactBtn {
  background-image: url(../assets/img/buttons/contact_btn.svg);

  @include media($mobile) {
    color: $black;
    background-image: none;
    background: lighten($green,30);
    height: 1em;
    line-height: 26px;
    padding: 0.2em 0em 1.3em;
    line-height: 1em;
    border: 1px dotted $purple;
    border-radius: 0.5em;
  }
}

</style>
