<template>
  <main>
    <section class="twoCol">
      <p class="marTH">I collaborate with companies across a variety of industries to create product lines.</p>
      <p>My clients and licensing partners include: Fox Chapel Publishing, Lang, Ganz Gifts, DENY Designs, Primitive by Kathy, TeNeues, Andrews MacMeel Publishing, Sakroots, Demdaco, Murals Your Way, Robert Kaufman Fabrics and others.</p>
      <p>If you are you interested in licensing my artwork or collaborating to create a custom design, email me at <a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a></p>
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
        class: 'license'
      }
    }
  }
</script>

<style>

</style>
