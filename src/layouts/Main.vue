<template>
<div>
  <div class="wrapper">
    <headerTop/>
    <Navvy/>
    <slot/>
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
  }
}
</script>

<style lang="scss">

</style>
