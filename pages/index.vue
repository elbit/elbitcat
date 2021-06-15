<template>
  <div class="cards-wrapper" :class="{ display_cards: !headerIsOpen}" >
    <Card :data="projectes" />
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  async asyncData({ $content, params }) {
    const projectes = await $content('projectes', params.slug).fetch()

    return {
      projectes,
    }
  },
  data() {
    return {
      //  bubbleIsOpen: false,
       headerIsOpen:true //for mobile onlu
    }
  },
  methods: {
    // onScroll() {
    //   this.isScrolling = true
    //   console.log('scrolled')
    // }
  },
  mounted() {
    //CLARAMENTE VUEX
    EventBus.$on('OPEN_PROJECT', (data) => {
      // this.bubbleIsOpen = true
      this.headerIsOpen = true
    }),
    EventBus.$on('bubbleClosed', (data) => {
      // this.bubbleIsOpen = false
      this.headerIsOpen = false
      })
    EventBus.$on('gotoProjects', (data) => {
      // this.bubbleIsOpen = false
      this.headerIsOpen = false
      })
    EventBus.$on('goHome', (data) => {
      // this.bubbleIsOpen = false
      this.headerIsOpen = true
      console.log('gohome')
      })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
   computed: {
    // dogImage() {
    //   // if (!this.img) {
    //   //   return
    //   // }
    //   const fileName = this.img

    //   for (let i = 0; i < fileName.length; i++) {
    //     require(`../assets/img/proyectos/${fileName[i]}`) // the module request
    //   }
    // },
    bbState(){ return this.$store.state.bb} 
  },
}
</script>

<style lang="scss">
.cards-wrapper {
  // border: solid 10px green;
  /* margin-top:19vh; */
  width: auto;
  overflow-x: auto;
  overflow-y: hidden;
  height: 79vh;
}

.blur {
  opacity:0.5;
}

@media (max-width: 768px) {
  .cards-wrapper {
    // display:none;
    margin-top:20vh;
    height: auto !important; //why?
    overflow-x: auto;
    overflow-y: auto;
  }
  // .display_cards {
  //   display:block;
  // }
}
</style>
