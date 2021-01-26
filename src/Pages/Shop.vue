<template>

  <main>

    <section class="shop">
      <a href="http://www.valentinaharper.com/" target="_blank">
        <img src="/static/img/shop/prints.jpg" alt="Prints">
        <p>Prints</p>
      </a>
      <a href="https://society6.com/valentinaramos" target="_blank">
        <img src="/static/img/shop/duvet.jpg" alt="Home Decor">
        <p>Home Decor</p>
      </a>
      <a href="https://www.teepublic.com/user/valentina-harper" target="_blank">
        <img src="/static/img/shop/t-shirt.png" alt="T-Shirts">
        <p>T-Shirts</p>
      </a>
      <a href="http://www.amazon.com/Valentina-Harper/e/B00MCMCYIA/ref=sr_ntt_srch_lnk_1?qid=1430838770&sr=8-1" target="_blank">
        <img src="/static/img/shop/books.jpg" alt="Books">
        <p>Books</p>
      </a>
      <a href="http://www.spoonflower.com/profiles/valentinaharper" target="_blank">
        <img src="/static/img/shop/fabric.jpg" alt="Fabrics">
        <p>Fabrics</p>
      </a>
      <a href="http://www.mywonderfulwalls.com/collections/valentina-harper" target="_blank">
        <img src="/static/img/shop/mural.jpg" alt="Wall Decal">
        <p>Wall Decal</p>
      </a>
    </section>

    <aside class="col3">
      <Social/>
    </aside>

  </main>

</template>

<script>
  import Social from '../components/Social'
  export default {
    components: {
      Social
    },
    metaInfo: {
      bodyAttrs: {
        class: 'shop'
      }
    }
  }
</script>

<style lang="scss" scoped>

  section.shop {
    // @include clearfix;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: flex-start;

    a {
      flex-basis: 30%;
      // @include span-columns(3 of 9);
      // @include omega(3n);
      background: $beige;
      margin-bottom: 1em;
      // height: 180px;
      // width: 100%;
      // @include box-shadow($grey 0px 2px 6px -2px);
      border-radius: 2px;
      border: 1px solid $greyLightest;

      @include breakpoint($SmMdLg) {
        flex-basis: 40%;
      }

      @include breakpoint($SmMd) {
        flex-basis: 90%;
      }

      img {
        width: 100%;
        height: calc(100% - 2.5rem);
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
      }
      p {
        margin: 0.5em auto;
        font-size: 0.85em;
        text-align: center;
      }

    }


  }

  aside {
    // @include span-columns(1);
    // @include omega();
  }

  .socialIconsBox {
    // margin-top: .5em !important;
    margin-left: 1rem;
  }

</style>
