<template>
<div>
  <main>
    <NavGallery/>
      <section class="twoColMain gallery">
        <vue-images :imgs="images"
                    :modalclose="modalclose"
                    :keyinput="keyinput"
                    :mousescroll="mousescroll"
                    :showclosebutton="showclosebutton"
                    :showcaption="showcaption"
                    :imagecountseparator="imagecountseparator"
                    :showimagecount="showimagecount"
                    :showthumbnails="showthumbnails">
        </vue-images>
      </section>

  </main>
</div>
</template>

<script>
import NavGallery from '../components/NavGallery'
import vueImages from 'vue-images'

export default {
  components: {
    NavGallery,
    vueImages: vueImages.default
  },
  head: {
    bodyAttrs: {
      class: 'digital-artwork'
    }
  },
  data () {
    return {
      images: [
        { imageUrl: '../../static/img/lightbox/gallery/prints/barkysimeto.jpg' },
        { imageUrl: '../../static/img/lightbox/gallery/prints/emaline.jpg' },
        { imageUrl: '../../static/img/lightbox/gallery/prints/frisky_christy.jpg' }
      ],
      modalclose: true,
      keyinput: true,
      mousescroll: true,
      showclosebutton: true,
      showcaption: true,
      imagecountseparator: 'of',
      showimagecount: true,
      showthumbnails: true
    }
  }
}

</script>

<style lang="scss">
// @import '~assets/css/base';
@import '../assets/css/gallery';

</style>
