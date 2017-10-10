<template>
<div>
  <div class="wrapper">
    <headerTop/>
    <Navvy/>
    <router-view/>
    <Footy/>
  </div>
</div>
</template>

<script>
import HeaderTop from './components/HeaderTop'
import Navvy from './components/Navvy'
// import Index from './Pages/Index'
import Social from './components/Social'
import Footy from './components/Footy'

export default {
  components: {
    HeaderTop,
    Navvy,
    // Index,
    Social,
    Footy
  }
}
</script>

<style lang="scss">

</style>
