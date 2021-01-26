<template>
  <nav class="mainNav">

    <router-link to="/" title="home">
      <div class="navBtns homeBtn">home</div>
    </router-link>

    <router-link to="/Portfolio" title="Portfolio">
      <div class="navBtns portfolioBtn">portfolio</div>
    </router-link>

    <router-link to="/Shop" title="Shop">
      <div class="navBtns shopBtn">shop</div>
    </router-link>

    <router-link to="/Licensing" title="Licensing">
      <div class="navBtns licensingBtn">licensing</div>
    </router-link>

    <router-link to="/Wholesale" title="Wholesale">
      <div class="navBtns wholesaleBtn">wholesale</div>
    </router-link>

    <router-link to="/Contact" title="Contact">
      <div class="navBtns contactBtn">contact</div>
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
      width: 106px;
      height: 106px;
      margin: 0 0em;
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
    // width: 672px;
    height: 106px;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 672px 106px;
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
    width: 100px;

    &:hover {
      // background-image: url(../assets/img/buttons/home_btn.svg);
      background-image: url(../assets/img/buttons/nav_buttons_01.svg);
      background-position-x: 0px;
      // padding-right: .5em;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .portfolioBtn {
    padding: 1.6em 0.5em 0 0.3em;
    width: 100px;

    &:hover {
      // background-image: url(../assets/img/buttons/gallery_btn.svg);
      background-image: url(../assets/img/buttons/nav_buttons_01.svg);
      background-position-x: -100px;
      cursor: pointer;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .shopBtn {
    padding: 1.6em 0.5em 0 0.7em;
    width: 100px;

    &:hover {
      // background-image: url(../assets/img/buttons/shop_btn.svg);
      background-image: url(../assets/img/buttons/nav_buttons_01.svg);
      background-position-x: -196px;
      background-position-y: 2px;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .licensingBtn {
    padding: 1.6em 0.5em 0 0.7em;
    width: 115px;

    &:hover {
      // background-image: url(../assets/img/buttons/shop_btn.svg);
      background-image: url(../assets/img/buttons/nav_buttons_01.svg);
      background-position-x: -307px;
      background-position-y: 2px;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .wholesaleBtn {
    padding: 1.6em 0.5em 0 0.7em;
    width: 103px;

    &:hover {
      // background-image: url(../assets/img/buttons/shop_btn.svg);
      background-image: url(../assets/img/buttons/nav_buttons_01.svg);
      background-position-x: -433px;
      cursor: pointer;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  .contactBtn {
    // padding: 0;
    width: 120px;

    &:hover {
      // background-image: url(../assets/img/buttons/contact_btn.svg);
      background-image: url(../assets/img/buttons/nav_buttons_01.svg);
      background-position-x: -552px;
    }

    @include breakpoint($SmMd) {
      padding: 0.4em 0.75em;
      background-image: none !important;
    }
  }

  // ############################
  // UPSTATES ON INDIVIDUAL PAGES
  body.index .homeBtn {
    // background-image: url(../assets/img/buttons/home_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: 0px;

    @include breakpoint($SmMd) {
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.artists-statement .homeBtn {
    // background-image: url(../assets/img/buttons/home_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: 0px;

    @include breakpoint($SmMd) {
      color: $black;
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.portfolio .portfolioBtn {
    // background-image: url(../assets/img/buttons/gallery_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: -100px;

    @include breakpoint($SmMd) {
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.shop .shopBtn {
    // background-image: url(../assets/img/buttons/shop_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: -196px;
    background-position-y: 2px;

    @include breakpoint($SmMd) {
      color: $black;
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.license .licensingBtn {
    // background-image: url(../assets/img/buttons/shop_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: -307px;
    background-position-y: 2px;

    @include breakpoint($SmMd) {
      color: $black;
      background-image: none !important;
      background: lighten($green,30);
      padding: 0.4em 0.75em;
      border: 1px dotted $purple;
      border-radius: 0.5em;
    }
  }

  body.wholesale .wholesaleBtn {
    // background-image: url(../assets/img/buttons/shop_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: -433px;

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
    // background-image: url(../assets/img/buttons/contact_btn.svg);
    background-image: url(../assets/img/buttons/nav_buttons_01.svg);
    background-position-x: -552px;

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
