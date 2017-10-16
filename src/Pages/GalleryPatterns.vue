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

  export default {
    components: {
      NavGallery,
      Lightbox
    },
    metaInfo: {
      bodyAttrs: {
        class: 'patterns'
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

  const images = [
    {
      thumb: '../../static/img/lightbox/gallery/patterns/i_spy_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/i_spy.jpg',
      caption: 'I Spy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/birds_in_the_garden_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/birds_in_the_garden.jpg',
      caption: 'Birds In The Garden'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/birds-with-flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/birds-with-flowers.jpg',
      caption: 'Birds With Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/butterflies_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/butterflies.jpg',
      caption: 'Butterflies'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/doodles_garden_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/doodles_garden.jpg',
      caption: 'Doodles Garden'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/folkbirds_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/folkbirds.jpg',
      caption: 'Folkbirds'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/marching_elephants_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/marching_elephants.jpg',
      caption: 'Marching Elephants'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/pods_and_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/pods_and_flowers.jpg',
      caption: 'Pods And Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/rachel_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/rachel.jpg',
      caption: 'Rachel'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/sofia_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/sofia.jpg',
      caption: 'Sofia'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/stella_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/stella.jpg',
      caption: 'Stella'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/07_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/07.jpg',
      caption: '07'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/amelia_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/amelia.jpg',
      caption: 'Amelia'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/baby_dino_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/baby_dino.jpg',
      caption: 'Baby Dino'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/be_my_valentine_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/be_my_valentine.jpg',
      caption: 'Be My Valentine'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/beatriz_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/beatriz.jpg',
      caption: 'Beatriz'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/birds_and_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/birds_and_flowers.jpg',
      caption: 'Birds and Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/blooming_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/blooming.jpg',
      caption: 'Blooming'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/boho_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/boho_flowers.jpg',
      caption: 'Boho Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/candy_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/candy_flowers.jpg',
      caption: 'Candy Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/cayenas_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/cayenas.jpg',
      caption: 'Cayenas'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/cute_little_owls_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/cute_little_owls.jpg',
      caption: 'Cute Little Owls'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/dahlias_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/dahlias.jpg',
      caption: 'Dahlias'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/doodles_black_and_yellow_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/doodles_black_and_yellow.jpg',
      caption: 'Doodles Black and Yellow'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/eli_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/eli.jpg',
      caption: 'Eli'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/ethnic_stripes_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/ethnic_stripes.jpg',
      caption: 'Ethnic Stripes'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/flowers_doodles_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/flowers_doodles.jpg',
      caption: 'Flowers Doodles'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/flowers_in_brown_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/flowers_in_brown.jpg',
      caption: 'Flowers in Brown'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/flowers_pattern_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/flowers_pattern.jpg',
      caption: 'Flowers Pattern'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/lets_cook_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/lets_cook.jpg',
      caption: 'Lets Cook'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/lila_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/lila.jpg',
      caption: 'Lila'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/little_birds_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/little_birds.jpg',
      caption: 'Little Birds'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/lovely_birds_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/lovely_birds.jpg',
      caption: 'Lovely Birds'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/marisa_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/marisa.jpg',
      caption: 'Marisa'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/orange_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/orange_flowers.jpg',
      caption: 'Orange Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/orange_grey_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/orange_grey_flowers.jpg',
      caption: 'Orange Grey Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/owls_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/owls.jpg',
      caption: 'Owls'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/pods_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/pods.jpg',
      caption: 'Pods'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/random_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/random_flowers.jpg',
      caption: 'Random Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/retro_coffee_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/retro_coffee.jpg',
      caption: 'Retro Coffee'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/retro_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/retro.jpg',
      caption: 'Retro'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/reverie_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/reverie.jpg',
      caption: 'Reverie'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/spring_paisley_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/spring_paisley.jpg',
      caption: 'Spring Paisley'
    },
    {
      thumb: '../../static/img/lightbox/gallery/patterns/under_the_sea_sm.jpg',
      src: '../../static/img/lightbox/gallery/patterns/under_the_sea.jpg',
      caption: 'Under the Sea'
    }
  ]
</script>

<style lang="scss">
  @import '../assets/css/gallery';
  @import '../assets/css/nav_gallery';
</style>
