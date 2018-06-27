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

      <aside class="col3 marT3">
        <Social/>
      </aside>

    </main>

  </div>
</template>

<script>
  import NavGallery from '../components/NavGallery'
  import Lightbox from 'vue-image-lightbox'
  import siteLoading from '../../static/img/siteloading.gif'
  import Social from '../components/Social'

  const images = [
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/nashville_airport_2016_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/nashville_airport_2016.jpg',
      caption: 'Nashville Airport Show'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/aaron_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/aaron.jpg',
      caption: 'Aaron'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/alexis_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/alexis.jpg',
      caption: 'Alexis'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/arabella2_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/arabella2.jpg',
      caption: 'Arabella'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/babette_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/babette.jpg',
      caption: 'Babette'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/be_awesome_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/be_awesome.jpg',
      caption: 'Be Awesome'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/eric_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/eric.jpg',
      caption: 'Eric'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/goldbug_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/goldbug.jpg',
      caption: 'Goldbug'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/hedwig_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/hedwig.jpg',
      caption: 'Hedwig'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/juanita_color_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/juanita_color.jpg',
      caption: 'Juanita'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/la_pluma_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/la_pluma.jpg',
      caption: 'La Pluma'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/levy_deborah_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/levy_deborah.jpg',
      caption: 'Levy & Deborah'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/seahorse_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/seahorse.jpg',
      caption: 'Seahorse'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/under_the_sea_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/under_the_sea.jpg',
      caption: 'Under The Sea'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/arabella_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/arabella.jpg',
      caption: 'Arabella'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/billy_01_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/billy_01.jpg',
      caption: 'Billy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/azure_treasure_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/azure_treasure.jpg',
      caption: 'Azure Treasure'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/karol_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/karol.jpg',
      caption: 'Karol'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/born_to_fly_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/born_to_fly.jpg',
      caption: 'Born To Fly'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/lianne_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/lianne.jpg',
      caption: 'Lianne'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/brown_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/brown.jpg',
      caption: 'Brown'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/buddha_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/buddha.jpg',
      caption: 'Buddha'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/bravebird_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/bravebird.jpg',
      caption: 'Bravebird'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/coi_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/coi.jpg',
      caption: 'Coi'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/dakota_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/dakota.jpg',
      caption: 'Dakota'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/dreams_of_india_vr_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/dreams_of_india_vr.jpg',
      caption: 'Dreams Of India'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/penny_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/penny.jpg',
      caption: 'Penny'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/frog_in_the_log_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/frog_in_the_log.jpg',
      caption: 'Frog In The Log'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/gordita_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/gordita.jpg',
      caption: 'Gordita'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/green_detail01_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/green_detail01.jpg',
      caption: 'Green Detail'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/henry_the_horse_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/henry_the_horse.jpg',
      caption: 'Henry The Horse'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/liz_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/liz.jpg',
      caption: 'Liz'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/missy_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/missy.jpg',
      caption: 'Missy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/lysander_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/lysander.jpg',
      caption: 'Lysander'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/mr_pop_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/mr_pop.jpg',
      caption: 'Mr Pop'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/mrwoody_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/mrwoody.jpg',
      caption: 'Mr Woody'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/randy_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/randy.jpg',
      caption: 'Randy'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/tarquin_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/tarquin.jpg',
      caption: 'Tarquin'
    },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/the_van_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/the_van.jpg',
      caption: 'The VW Van'
    },
    // {
    //   thumb: '../../static/img/lightbox/gallery/original_artwork/melissa_sm.jpg',
    //   src: '../../static/img/lightbox/gallery/original_artwork/melissa.jpg',
    //   caption: 'Melissa'
    // },
    {
      thumb: '../../static/img/lightbox/gallery/original_artwork/why_hello_there_gorgeous_sm.jpg',
      src: '../../static/img/lightbox/gallery/original_artwork/why_hello_there_gorgeous.jpg',
      caption: 'Why Hello There Gorgeous'
    }
  ]

  export default {
    components: {
      NavGallery,
      Lightbox,
      Social
    },
    metaInfo: {
      bodyAttrs: {
        class: 'original-artwork'
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

<style lang="scss" scoped>
  @import '../assets/css/gallery';

  aside {
    margin-top: 0 !important;
  }

</style>
