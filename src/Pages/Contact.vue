<template>
  <main>

    <aside class="col1">
      &nbsp;
    </aside>

    <section class="contactContent">

      <h2>Send an email</h2>

      <p>
        <a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a>
      </p>

      <h3>Or simply use this form</h3>

      <!-- Begin myContactForm.com Form HTML -->
      <form id="contactForm" name="contactForm" method="post" action="http://www.mycontactform.com/sendform/sendform.php">

        <div class="formInput">
          <label>name<span class="asterisk">*</span></label>
          <input name="q1" type="text" id="q1" value="" size="12" maxlength="40" >
        </div>

        <div class="formInput">
          <label>email<span class="asterisk">*</span></label>
          <input name="email" type="email" id="email" size="12" maxlength="100" required>
        </div>

        <div class="formInput">
          <label>message&nbsp;</label>
          <textarea name="q2" id="q2"></textarea>
        </div>

        <div class="formInput">
          <button name="submit" type="submit" value="Submit">submit</button>
          <label><span class="asterisk">*</span>required</label>
        </div>

        <input name="user" type="hidden" id="user" value="valentina_73">
        <input name="formid" type="hidden" id="formid" value="135001">
        <input name="subject" type="hidden" id="subject" value="ValentinaDesign.com Contact Email" />

      </form>
      <!-- End myContactForm.com Form HTML -->

    </section>

    <aside class="col3 marT3">
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
        class: 'contact'
      }
    }
  }
</script>

<style lang="scss" scoped>

  main {
    // display: grid;
    // grid-template-columns: repeat(12, 1fr);
    // grid-column: 3 / span 8;
    // background: lightgrey;

    aside.col1 {
      grid-column: 1 / span 5;
      background-image: url(/static/img/contact_bird.png);
      background-repeat: no-repeat;
      background-position: -60px 00px;
      // background: LightPink;

      @include breakpoint($SmMdLg) {
        display: none;
        background-image: none;
      }

    }

    section.contactContent {
      // See layout.scss
    }

  }

  section.contactContent {
    //
    h2 {
      font-size: 1.5em;
      margin-bottom: 0.2em;
    }

    h3 {
      font-size: 1em;
      margin: 1.5em 0 .25em;
    }

    p {
      // font-family: Register;
      color: $grey;
      font-size: 1em;
      letter-spacing: 0.065em;
      margin: 0 .5em 0 0;
      padding: 0;
    }

  }

  #contactForm {
    margin-bottom: 3em;

    .formInput {
      // padding: 0;
      // margin: 0;
      // min-height: 2em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
      flex-grow: 1;
      padding-top: .75em;
      // margin-bottom: 3em;
      // flex-basis: 100%;
      // flex-grow: 1;
      // flex-shrink: 1;

      // &:nth-of-type(3) {
      //   padding: 0;
      //   margin: 0;
      //   height: 60px;
      // }

      &:nth-of-type(4) {
        display: flex;
        flex-direction: column;

        button {
          // order: 1;
          margin: .5em .5em 0 4em;
          // flex-shrink: 1;
          // align-self: flex-start;

          @include breakpoint($SmMd) {
            margin-left: 0;
          }

          @include breakpoint($md) {
            margin-left: 4em;
          }

        }

        label {
          // order: 2;
          margin: .75em .5em 0 5.5em;
          font-size: .9em;
          // align-self: flex-end;
          flex-basis: 0;
          color: lighten($grey, 30);

          @include breakpoint($SmMd) {
            margin: .75em .5em 0 0em;

          }

          @include breakpoint($md) {
            margin: .75em .5em 0 5.5em;

          }
        }
      }

      label {
        font-size: 1em;
        font-family: $copy-bold;
        color: $purple;
        height: 1.7em;
        flex-basis: 5em;
      }

      .asterisk {
        color: red;
        margin: 0 0 0 0;
      }

      input {
        height: 1.7em;
        align-items: flex-start;
        // flex-basis: 60%;
        // flex-grow: 1;
      }

      input, select, textarea {
        font-size: 1em;
        font-family: $copy-bold;
        color: $purple;
        border: 1px dashed $purple;
        // margin: .5em 0 0 0;
        // width: 100%;
        background: tint(orange, 95%);
        padding: 0 0 0 .3em;
        outline: none;
        flex-basis: 60%;
        @include border-radius(6px);

        @include breakpoint($SmMd) {
          flex-basis: 70%;
        }

        @include breakpoint($sm) {
          flex-basis: 80%;
        }

      }

      textarea {
        padding: .3em 0 0 .3em;

        // @include breakpoint($SmMd) {
        //   flex-basis: 60%;
        // }
      }

      button {
        background: $orange;
        // display: block;
        // width: 80px;
        border: none;
        font-family: $copy;
        color: white;
        font-size: 1.25em;
        letter-spacing: 0.05em;
        padding: 0.25em 0.5em 0.25em 0.5em;
        cursor: pointer;
        @include border-radius(6px);
        @include clearfix;

        &:hover {
          background-color: $purple;
        }
      }

    }

  }

</style>
