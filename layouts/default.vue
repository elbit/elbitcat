<template>
  <div :class="{ noscroll: isClosed }">
    <div class="header-container">
      <Header />
    </div>
    <div class="content-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>

</script>


<style>
html {
  /* font-display:  subpixel-antialiased; */
  /* font-smooth: antialiased; */
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

body {
  /* height: 100%; */
  boxrder: 4px solid rebeccapurple;
  /* position:absolute; */
  width: 100%;

  /* overflow: hidden; */
  /* height: -webkit-fill-available;
  height: 100vh; */
  height: var(--app-height);
}
@media (max-width: 768px) {
  body {
    height: auto;
    /* border: 4px solid forestgreen; */
  }
  .noscroll  .cardbase{
  overflow:hidden!important;
  height:100vh!important;
  background-color:green;
}
}

html {
  height: -webkit-fill-available;
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
  /* max-height: 100%; */
}



</style>
<script>
import EventBus from '../components/global/event-bus'

export default { 
  data() {
    return {
      isClosed: true,
    }
  },

  mounted() {
      EventBus.$on('bubbleMobileClosed', (data) => {
        this.isClosed = !this.isClosed
      })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },

}



</script>
