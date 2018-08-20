<template>
<div>
  <main>

    <aside class="col1">
      &nbsp;
    </aside>

    <section class="contactContent">
      <!-- Begin myContactForm.com Form HTML -->
      <form name="contactForm" id="contactForm" method="post" action="http://www.mycontactform.com/sendform/sendform.php">
        <table class="contactTable">
          <tbody>
            <tr>
              <td></td>
              <td>
                <h2 class="emailHead">Send an email</h2>
                <p class="emailLeft"><a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a></p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <h3>Or simply use this form</h3>
              </td>
            </tr>
            <tr class="tr-cells">
              <td>
                <p>name<span class="asterisk">*</span></p>
              </td>
              <td>
                <input name="q1" type="text" id="q1" value="" size="12" maxlength="40" >
              </td>
            </tr>
           <!--  <tr class="tr-cells">
              <td>
                <p>subject<span class="asterisk">*</span></p>
              </td>
              <td>
                <input name="subject" type="text" id="subject" size="12" maxlength="30"  required="required">
              </td>
            </tr> -->
            <tr class="tr-cells">
              <td>
                <p>email<span class="asterisk">*</span></p>
              </td>
              <td>
                <input name="email" type="email" id="email" size="12" maxlength="100" required >
              </td>
            </tr>
            <tr class="tr-cells_message">
              <td valign="top">
                <p>message&nbsp;</p>
              </td>
              <td>
                <textarea name="q2" id="q2" cols="20" rows="4" class="marTH"></textarea>
              </td>
            </tr>
            <tr class="tr-cells">
              <td class="halfHeight"></td>
              <td class="halfHeight"></td>
            </tr>
            <tr class="tr-cells">
              <td>
                <!-- &nbsp; -->
              </td>
              <td>
                <input name="user" type="hidden" id="user" value="valentina_73">
                <input name="formid" type="hidden" id="formid" value="135001">
                <button name="submit" type="submit" value="Submit">submit</button>
              </td>
            </tr>
            <tr class="tr-cells">
              <td>
                &nbsp;
              </td>
              <td>
                <span class="left"><span class="asterisk">*</span>required</span>
              </td>
            </tr>
          </tbody>
        </table>
        <input name="subject" type="hidden" id="subject" value="ValentinaDesign.com Contact Email" />
      </form>
      <!-- End myContactForm.com Form HTML -->
    </section>

    <aside class="col3 marT3">
      <Social/>
    </aside>

  </main>

</div>
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
  main aside.col1 {
    @include span-columns(4 of 10);
    // @include shift(0);
    background-image: url(/static/img/contact_bird.png);
    background-repeat: no-repeat;
    background-position: -40px 40px;
    // @include fill-parent();
    // background: $beige;
    height: 300px;
    // background: #0fc;
    // @include clearfix;

    @include media($mobile) {
      display: none;
      // @include shift(2);
    }
  }
  main section.contactContent {
    @include span-columns(5 of 10);
    // @include shift(1);
    @include omega();

    @include media($mobile) {
      @include span-columns(9 of 10);
      // @include shift(2);
    }
    @include media($mobileMini) {
      @include span-columns(7 of 10);
      // @include shift(2);
    }
  }

  .contactTable {
    width: 100%;
    // max-width: 600px;

    @include media($mobile) {
      width: 100%;
    }
    @include media($mobileMini) {
      // width: 100%;
      h3 {
        font-size: .9em;
      }
    }
  }

  .contact .social-icons {
    margin-top: 0.8em;
  }

  h2.emailHead {
    margin-bottom: 0.2em;
  }

  .contact aside.social {
    margin-top: 5.25em;
  }

  #contactForm .email {
    margin: 0;
    text-align: left;
    @include media($mobile) {
    font-size: 0.8em;
    text-align: left;
    }
    a {
      text-decoration: none;
    }
  }

  #contactForm .emailLeft {
    margin: 0;
    text-align: left;
    margin-bottom: .5em;
    @include media($mobile) {
    font-size: 0.8em;
    text-align: left;
    margin-bottom: .5em;
    }
  }

  /* FORM */

  #contactForm {
    margin: .75em 0 0em 0;
  }

  #contactForm .tr-cells td {
    padding: 0;
    margin: 0;
    height: 2em;
    // width: 80%;

    &.halfHeight {
      height: .5em !important;
    }
  }

  #contactForm .tr-cells_message td {
    padding: 0;
    margin: 0;
    height: 60px;
  }

  #contactForm p {
    font-family: Register;
    color: $grey;
    font-size: 1em;
    letter-spacing: 0.065em;
    margin: 0 .5em 0 0;
    padding: 0;
    text-align: top;
    text-align: right;
  }

  #contactForm .left {
    font-family: Register;
    color: $grey;
    font-size: 1em;
    letter-spacing: 0.065em;
    margin: 0 .5em 0 0;
    padding: 0;
    text-align: top;
    text-align: left;
    display: block;
  }

  .asterisk {
    color: red;
    margin: 0 0 0 0;
  }

  #contactForm input {
    height: 1.7em;
  }

  #contactForm input, select, textarea {
    border: 1px dashed $purple;
    margin: .5em 0 0 0;
    width: 100%;
    background-color: tint(orange, 95%);
    font-family: $copy-bold;
    color: $purple;
    font-size: 1em;
    padding: 0 0 0 .3em;
    outline: none;
    @include border-radius(6px);

    @include media($mobile) {
      width: 80%;
    }
  }

  #contactForm textarea {
    padding: .3em 0 0 .3em;
  }

  #contactForm button {
    background-color: $orange;
    display: block;
    width: 80px;
    border: none;
    font-family: $copy;
    color: white;
    font-size: 1.25em;
    margin: .5em 0 0 0;
    letter-spacing: 0.05em;
    padding: 2px 0 2px 0;
    cursor: pointer;
    @include border-radius(6px);
  }

  #contactForm button:hover {
    background-color: $purple;
  }
</style>
