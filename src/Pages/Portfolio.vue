<template>
  <main>
    <section class="twoCol">
      <div class="gallery">
        <div class="galleryGrid" v-for="(image, index) in images" :key="image">
          <img
            v-lazy="image.thumb"
            style="width: 100%,
                   border-radius: 2px,
                   cursor: pointer;"
            @click="openGallery(index)"
          >
        </div>

        <lightbox ref="lightbox"
          :showLightBox="false"
          :images="images"
          :show-caption="true"
          :nav="false"
          :showThumbs="false"
          :autoPlay="false"
          :autoPlayTime=8000
        ></lightbox>

      </div>
    </section>

    <aside class="col3">
      <Social/>
    </aside>

  </main>
</template>

<script>
  import Lightbox from 'vue-image-lightbox'
  import siteLoading from '../../static/img/siteloading.gif'
  import Social from '../components/Social'

  const images = [
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/today_is_going_to_be_awesome_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/today_is_going_to_be_awesome.jpg',
      caption: 'You Got This'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/arabella_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/arabella.jpg',
      caption: 'Wrapping Paper'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/backpack_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/backpack.jpg',
      caption: 'Watercolor'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/bags_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/bags.jpg',
      caption: 'Unicorn Planter'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/bee_awesome_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/bee_awesome.jpg',
      caption: 'Today Is Going To Be Awesome'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/beer_glass_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/beer_glass.jpg',
      caption: 'Tennessee'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/box_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/box.jpg',
      caption: 'Table'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/calendar_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/calendar.jpg',
      caption: 'Shop'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/candle_valentina_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/candle_valentina.jpg',
      caption: 'Pumpkins'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/coin_bag_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/coin_bag.jpg',
      caption: 'Prints'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/coloring_book_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/coloring_book.jpg',
      caption: 'Plate'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/conexion_americas_mural_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/conexion_americas_mural.jpg',
      caption: 'Planner'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/decal_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/decal.jpg',
      caption: 'Pins'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/el_mago_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/el_mago.jpg',
      caption: 'Pineapple Pen'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/eva_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/eva.jpg',
      caption: 'Phone Case'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/flowers_mural_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/flowers_mural.jpg',
      caption: 'Pete'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/flying_mural_details_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/flying_mural_details.jpg',
      caption: 'Pereza'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/flying_mural_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/flying_mural.jpg',
      caption: 'Octopus Bloom'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/german_shepherd_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/german_shepherd.jpg',
      caption: 'Notebooks'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/guitar_01_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/guitar_01.jpg',
      caption: 'Nativity'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/guitar_02_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/guitar_02.jpg',
      caption: 'Mug'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/helios_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/helios.jpg',
      caption: 'Maya Quotes'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/hello_person_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/hello_person.jpg',
      caption: 'Magdalena'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/lets_do_this_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/lets_do_this.jpg',
      caption: 'Little Planter'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/little_deer_flowers_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/little_deer_flowers.jpg',
      caption: 'Little Deer Flowers'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/little_planter_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/little_planter.jpg',
      caption: 'Lets Do This'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/magdalena_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/magdalena.jpg',
      caption: 'Hello Person'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/maya_quotes_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/maya_quotes.jpg',
      caption: 'Helios'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/mug_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/mug.jpg',
      caption: 'Guitar 02'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/nativity_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/nativity.jpg',
      caption: 'Guitar 01'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/notebooks_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/notebooks.jpg',
      caption: 'German Shepherd'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/octopus_bloom_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/octopus_bloom.jpg',
      caption: 'Flying Mural'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/pereza_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/pereza.jpg',
      caption: 'Flying Mural Details'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/pete_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/pete.jpg',
      caption: 'Flowers Mural'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/phone_case_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/phone_case.jpg',
      caption: 'Eva'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/pineapple_pen_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/pineapple_pen.jpg',
      caption: 'El Mago'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/decal_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/decal.jpg',
      caption: 'Decal 01'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/planner_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/planner.jpg',
      caption: 'Conexion Americas Mural'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/plate_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/plate.jpg',
      caption: 'Coloring Book'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/prints_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/prints.jpg',
      caption: 'Coin Bag'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/pumpkins_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/pumpkins.jpg',
      caption: 'Coffee Cup'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/shop_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/shop.jpg',
      caption: 'Candle'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/table_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/table.jpg',
      caption: 'Calendar Lang'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/tennessee_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/tennessee.jpg',
      caption: 'Box'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/unicorn_planter_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/unicorn_planter.jpg',
      caption: 'Beer Glass'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/valentin_mug_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/valentin_mug.jpg',
      caption: 'Bee Awesome'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/valentina_address_book_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/valentina_address_book.jpg',
      caption: 'Bags'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/watercolor_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/watercolor.jpg',
      caption: 'Backpack'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/wrapping_paper_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/wrapping_paper.jpg',
      caption: 'Arabella'
    },
    {
      thumb: '../../static/img/lightbox/gallery/portfolio/you_got_this_sm.jpg',
      src: '../../static/img/lightbox/gallery/portfolio/you_got_this.jpg',
      caption: 'Address Book'
    }
  ]

  export default {
    components: {
      Lightbox,
      Social
    },
    metaInfo: {
      bodyAttrs: {
        class: 'portfolio'
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
  .vue-lb-info {
    padding-top: 0.6rem !important;
  }

</style>
