<template>
  <div>
    <div class="wrapper">
      <headerTop/>
      <Navvy/>
      <main class="twoColMain">
        <h2>Thanks!</h2>
        <p>Your information was submitted successfully.</p>
      </main>
      <Footy/>
    </div>
  </div>
</template>

<script>
  import HeaderTop from './components/HeaderTop'
  import Navvy from './components/Navvy'
  import Footy from './components/Footy'

  export default {
    components: {
      HeaderTop,
      Navvy,
      Footy
    }
  }
</script>

<style lang="scss" scoped>
  main {
    margin: 2em auto;
    h2, p {
      text-align: center;
      font-size: 150%;
    }
  }
</style>
