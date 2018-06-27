<template>
<div>
  <div class="wrapper">
    <headerTop/>
    <Navvy/>
    <!-- <transition> -->
      <router-view/>
    <!-- </transition> -->
    <Footy/>
  </div>
</div>
</template>

<script>
  import HeaderTop from './components/HeaderTop'
  import Navvy from './components/Navvy'
  import Social from './components/Social'
  import Footy from './components/Footy'

  export default {
    components: {
      HeaderTop,
      Navvy,
      Social,
      Footy
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Valentina Design',
      // all titles will be injected into this template
      titleTemplate: '%s | Valentina Art - Inspired and Inspirational'
    }
  }
</script>

<style lang="scss">

</style>
