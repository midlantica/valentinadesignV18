<template>
  <main>

    <section class="twoCol">

      <p class="largeCopy">Thanks for your interest in carrying my products 😀</p>

      <h3 class="marT0 marBH marT1">Prints</h3>
      <p>You can order prints at <a href="http://www.valentinaharper.com">ValentinaHarper.com</a>. If you would like to purchase prints wholesale, please email me at <a href="mailto:valentina@valentinadesign.com">valentina@valentinadesign.com</a> with your name, email, and shop information and I will send a Wholesale discount code to shop.</p>

      <h3 class="marBH marT1">Wholesale info:</h3>
      <ul>
        <li><b>PACKING:</b> Each print come in a cello bag with a chipboard backing</li>
        <li><b>WHOLESALE PRICING:</b> $7.5 each (8x10 inches) print</li>
        <li><b>MINIMUM ORDERS (first time order):</b> A minimum order of $150</li>
        <li><b>RE-ORDERS:</b> $100</li>
        <li><b>DELIVERY & SHIPPING:</b> Though your shipment will likely go out sooner, please allow up to 1-2 weeks for your order to ship. Shipping cost $15</li>
      </ul>

      <h3 class="marBH marT1" >Home Decor</h3>
      <p>If you are interested in ordering  duvet covers, pillow cases, shower curating, trays, and other decor products, visit <a href="https://www.denydesigns.com/" target="_blank">DenyDesigns</a> to get the wholesale information .</p>

      <h3 class="marBH marT1">Coloring Books</h3>
      <p>You can order my coloring books at <a href="http://www.foxchapelb2b.com">Fox Chapel Publishing</a>.</p>

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
        class: 'wholesale'
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 0;
  }

  ul {
    margin: 0.25rem;
    padding: 0 0 0 1rem;
  }

  p.largeCopy {
    font-size: 1.3rem;
    margin: 0 0 1rem;
    letter-spacing: 0.9px;
  }

  h1, h2, h3, h4, h5 h6 {
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
