<template>
<div>
  <main class="twoColMain shop">
      <ul>
        <li class="shopGrid">
          <a href="http://society6.com/valentinaramos" target="_blank">
            <img src="../../static/img/shop/prints.jpg" alt="Prints">
            <p>Prints</p>
          </a>
        </li>
        <li class="shopGrid">
          <a href="http://www.denydesigns.com/collections/artist/ar-valentina-ramos" target="_blank">
            <img src="../../static/img/shop/duvet.jpg" alt="Home Decor">
            <p>Home Decor</p>
          </a>
        </li>
        <li class="shopGrid">
          <a href="https://www.decalgirl.com/artists/Valentina_Ramos" target="_blank">
            <img src="../../static/img/shop/decal.jpg" alt="Phone Decals">
            <p>Phone Decals</p>
          </a>
        </li>
        <li class="shopGrid">
          <a href="http://www.amazon.com/Valentina-Harper/e/B00MCMCYIA/ref=sr_ntt_srch_lnk_1?qid=1430838770&sr=8-1" target="_blank">
            <img src="../../static/img/shop/books.jpg" alt="Books">
            <p>Books</p>
          </a>
        </li>
        <li class="shopGrid">
          <a href="http://www.spoonflower.com/profiles/valentinaharper" target="_blank">
            <img src="../../static/img/shop/fabric.jpg" alt="Fabrics">
            <p>Fabrics</p>
          </a>
        </li>
        <li class="shopGrid">
          <a href="http://www.mywonderfulwalls.com/collections/valentina-harper" target="_blank">
            <img src="../../static/img/shop/mural.jpg" alt="Wall Decal">
            <p>Wall Decal</p>
          </a>
        </li>
      </ul>
  </main>
</div>
</template>

<script>
// import HeaderTop from '~/components/HeaderTop'
// import Navvy from '~/components/Navvy'
// import Social from '~/components/Social'
// import Footy from '~/components/Footy'
export default {
  components: {
    // HeaderTop,
    // Navvy,
    // Social,
    // Footy
  },
  head: {
    bodyAttrs: {
      class: 'shop'
    }
  }
}
// const daTitle = 'digital_prints'
// const daPath = '../static/img/lightbox/gallery/prints/'
</script>

<style lang="scss">
  // @import '../static/css/base';
  main.shop {
    //
    ul {
      padding: 0;
      margin: 0.5em;

      @include media($mobile) {
        margin: 0;
      }

      li {
        @include media($med-width) {
          @include span-columns(3 of 9);
          @include omega(3n);
          background: $beige;
          margin-bottom: 1em;
          // height: 180px;
          // width: 100%;
          // @include box-shadow($grey 0px 2px 6px -2px);
          border-radius: 2px;
          border: 1px solid $greyLightest;
        }

        @include media($mobile) {
          @include span-columns(5 of 10);
          @include omega(6n);
          // @include shift(1);
          // box-shadow: none;
          // margin-bottom: 0;
          margin-bottom: 1em;
          padding: 0;
          background: $beige;
          // @include box-shadow($grey 0px 2px 6px -2px);
          border-radius: 2px;
          &:nth-child(even) {
            margin-right: 0em;
          }
        }

        &.shopGrid {
          text-align: center;
          // background: transparentize($orange,.5);

          @include media($mobile) {

          }
          img {
            @include fill-parent();
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
          }
          p {
            margin: 0.5em auto;
            font-size: 0.7em;
          }
        }
      }

    }
  }
</style>
