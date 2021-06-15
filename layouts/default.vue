<template>
 <div :class="{ mh_open: mhState=='open' }">  <!-- no esta actiu a -->
    <div class="header-container">
      <Header />
    </div>
    <div class="content-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  data() {
    return {
      isClosed: true,
    }
  },
  mounted() { //no esta en us pq
    EventBus.$on('bubbleMobileClosed', (data) => {
      this.isClosed = !this.isClosed
    })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // }); 
  },
  computed: {
     bbState(){ return this.$store.state.bb} ,
    mhState(){ return this.$store.state.mobile_header} 
  },
}
</script>

<style lang="scss">
html {

  height: -webkit-fill-available; //this is working?

  font-display: subpixel-antialiased;
  font-smooth: antialiased;
  font-family: $copy;
  font-weight: 100;
  font-display: swap;
}

body {
  // border: 2px solid rebeccapurple;
  width: 100%;
}

@media (max-width: 768px) {
  body {
    height: auto;
    /* border: 4px solid forestgreen; */
  }
  .mh_open {
    height:100%
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img,
svg {
  max-width: 100%;
}
</style>
