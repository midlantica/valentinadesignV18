<template>
<div>
  <main>
    <NavGallery/>
    <section class="twoColMain gallery">

      <ul>
        <li class = "galleryGrid" v-for="(image, index) in images">
          <img
            v-lazy="image.thumb"
            style="@include fill-parent(),
                   border-radius: 2px,
                   cursor: pointer;"
            @click="openGallery(index)"
          >
        </li>
      </ul>

      <lightbox ref="lightbox"
        :showLightBox="false"
        :images="images"
        :show-caption="true"
        :nav="false"
        :showThumbs="false"
        :autoPlay="false"
        :autoPlayTime=8000
      ></lightbox>

    </section>
  </main>
</div>

</template>

<script>
  import NavGallery from '../components/NavGallery'
  import Lightbox from 'vue-image-lightbox'
  import siteLoading from '../../static/img/siteloading.gif'
  const images = [
    {
      thumb: '../../static/img/lightbox/gallery/prints/barkysimeto_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/barkysimeto.jpg',
      caption: 'Barkysimeto'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/emaline_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/emaline.jpg',
      caption: 'Emaline'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/frisky_christy_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/frisky_christy.jpg',
      caption: 'Frisky Christy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/hello_person_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/hello_person.jpg',
      caption: 'Hello Person'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/hippotastique_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/hippotastique.jpg',
      caption: 'Hippotastique'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/humming_heaven_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/humming_heaven.jpg',
      caption: 'Humming Heaven'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/little_fish_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/little_fish.jpg',
      caption: 'Little Fish'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/lovebirds_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/lovebirds.jpg',
      caption: 'Lovebirds'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/milo_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/milo.jpg',
      caption: 'Milo'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/phileus_frog_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/phileus_frog.jpg',
      caption: 'Phileus Frog'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/ruby_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/ruby.jpg',
      caption: 'Ruby'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/shower_of_joy_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/shower_of_joy.jpg',
      caption: 'Shower Of Joy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/sugar_skull_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/sugar_skull.jpg',
      caption: 'Sugar Skull'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/aaron_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/aaron.jpg',
      caption: 'Aaron'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/alcahofa_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/alcahofa.jpg',
      caption: 'Alcahofa'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/alexis_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/alexis.jpg',
      caption: 'Alexis'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/always_be_yourself_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/always_be_yourself.jpg',
      caption: 'Always Be Yourself'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/arabella_and_the_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/arabella_and_the_flowers.jpg',
      caption: 'Arabella and the Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/beatriz_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/beatriz.jpg',
      caption: 'Beatriz'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/dear_deer_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/dear_deer.jpg',
      caption: 'Dear Deer'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/deep_blue_me_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/deep_blue_me.jpg',
      caption: 'Deep Blue Me'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/deep_violet_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/deep_violet.jpg',
      caption: 'Deep Violet'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/emilia_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/emilia.jpg',
      caption: 'Emilia'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/escargopolooza_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/escargopolooza.jpg',
      caption: 'Escargopolooza'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/eva_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/eva.jpg',
      caption: 'Eva'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/everything_always_starts_with_a_dream_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/everything_always_starts_with_a_dream.jpg',
      caption: 'Everything Always Starts with a Dream'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/feather_heaven_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/feather_heaven.jpg',
      caption: 'Feather Heaven'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/follow_your_dreams_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/follow_your_dreams.jpg',
      caption: 'Follow Your Dreams'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/ganesha_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/ganesha.jpg',
      caption: 'Ganesha'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/giraffe_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/giraffe.jpg',
      caption: 'Giraffe'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/have_some_coffee_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/have_some_coffee.jpg',
      caption: 'Have Some Coffee'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/helios_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/helios.jpg',
      caption: 'Helios'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/hello_bird_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/hello_bird.jpg',
      caption: 'Hello Bird'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/honcho_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/honcho.jpg',
      caption: 'Honcho'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/i_was_a_dinosaur_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/i_was_a_dinosaur.jpg',
      caption: 'I Was A Dinosaur'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/its_all_in_your_head_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/its_all_in_your_head.jpg',
      caption: 'Its all in your head'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/lets_cook_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/lets_cook.jpg',
      caption: 'Lets Cook'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/love_owls_in_the_tree_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/love_owls_in_the_tree.jpg',
      caption: 'Love Owls in the Tree'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/masamiosa_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/masamiosa.jpg',
      caption: 'Masamiosa'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/mr_pavo_real_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/mr_pavo_real.jpg',
      caption: 'Mr Pavo Real'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/octopus_bloom_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/octopus_bloom.jpg',
      caption: 'Octopus Bloom'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/out_of_sight_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/out_of_sight.jpg',
      caption: 'Out of Sight'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/paisley_piggy_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/paisley_piggy.jpg',
      caption: 'Paisley Piggy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/peter_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/peter.jpg',
      caption: 'Peter'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/random_talking_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/random_talking.jpg',
      caption: 'Random Talking'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/rosebud_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/rosebud.jpg',
      caption: 'Rosebud'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/royal_flamingo_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/royal_flamingo.jpg',
      caption: 'Royal Flamingo'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/shiny_shannon_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/shiny_shannon.jpg',
      caption: 'Shiny Shannon'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/sitting_buddha_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/sitting_buddha.jpg',
      caption: 'Sitting Buddha'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/sushi_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/sushi.jpg',
      caption: 'Sushi'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/take_some_pictures_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/take_some_pictures.jpg',
      caption: 'Take Some Pictures'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/the_elephant_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/the_elephant.jpg',
      caption: 'The Elephant'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/tiberio_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/tiberio.jpg',
      caption: 'Tiberio'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/unicornicopia_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/unicornicopia.jpg',
      caption: 'Unicornicopia'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/vera_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/vera.jpg',
      caption: 'Vera'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/victor_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/victor.jpg',
      caption: 'Victor'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/vw_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/vw.jpg',
      caption: 'VW'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/walking_in_paradise_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/walking_in_paradise.jpg',
      caption: 'Walking in Paradise'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/you_and_me_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/you_and_me.jpg',
      caption: 'You and Me'
    },
    {
      thumb: '../../static/img/lightbox/gallery/prints/you_are_awesome_sm.jpg',
      src: '../../static/img/lightbox/gallery/prints/you_are_awesome.jpg',
      caption: 'You are Awesome'
    }
  ]

  export default {
    components: {
      NavGallery,
      Lightbox
    },
    metaInfo: {
      bodyAttrs: {
        class: 'digital-artwork'
      }
    },
    data () {
      return {
        images,
        siteLoading
      }
    },
    methods: {
      openGallery (index) {
        this.$refs.lightbox.showImage(index)
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/css/gallery';
  @import '../assets/css/nav_gallery';
</style>
