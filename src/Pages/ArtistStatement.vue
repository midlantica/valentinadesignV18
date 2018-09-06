<template>
  <main>

    <aside class="col1">
      <div class="centerContent">
        <router-link to="/" title="home">
          <img class="valPic" src="../assets/img/val_pic.jpg">
          <p class="statement">
            < back
          </p>
        </router-link>
      </div>
    </aside>

    <section class="home">
      <Statement/>
    </section>

    <aside class="col3 marT2">
      <Social/>
    </aside>

  </main>
</template>

<script>
  import Statement from '../components/Statement'
  import Bio from '../components/Bio'
  import Social from '../components/Social'
  export default {
    components: {
      Statement,
      Bio,
      Social
    },
    metaInfo: {
      bodyAttrs: {
        class: 'index'
      }
    }
  }
</script>

<style lang="scss" scoped>

  a {
    border-bottom: none;
  }

  .valPic {
    // margin-top: 0.3em;
    border-radius: 20em;
    // @include clearfix;

    @include breakpoint($SmMdLg) {
      width: 50%;
      // @include span-columns(6 of 10);
      // @include shift(2);
      // margin-right: 2em;
      // @include clearfix;
    }
  }

  .statement {
    font-size: 1em;
    text-align: center;
    // float: none;
    margin-top: 0.4em;
    font-weight: bold;
    // @include clearfix;

    @include breakpoint($mobile) {
      display: block;
      margin-bottom: 0;
      // @include clearfix;
      // clear: both;
    }
  }

  p {
    text-align: center;
  }
</style>
