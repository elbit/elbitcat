<template>
  <div
    class="header"
    :class="
      mobileHeaderState === 'open' ? 'mobile_header_open' : 'mobile_header'
    "
  >
    <div class="logo-wrapper" @click="goHome(), closebbState()">
      <NuxtLink to="/">
        <Logo-line />
        <Logo />
      </NuxtLink>
    </div>

    <div class="b-wrapper">
      <!-- is better to segment props or pass all on data:post? -->
      <!-- MH {{mobileHeaderState}} /
      BB{{BBState}} /
      MQ{{$mq}}-->
      <Bubble
        :url="post.url"
        :dataspeech="post.speech"
        :strings="post.speech"
        :home="home"
        :img="post.img"
        :title="post.title"
        :description="post.description"
        :data="post"
      />

      <navi />

    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  data() {
    return {
      strings: 'Hola, soc el bit ! qué necessites? header', //this is used?
      home: true, //what is this
      post: [],
      //isClosed: false, to clean
      isOpen: true, // gotoprojects mobile
    }
  },
  mounted() {
    EventBus.$on('OPEN_PROJECT', (data) => {
      this.post = data //data received to pass to bubble prop form click "more info" on card
      this.home = false //to render conditional comps (nav) is is home or project etc and also pass to bubble prop
      this.isOpen = !this.isOpen //header opened only moblile
    }),
      EventBus.$on('gotoProjects', (data) => {
        //menu mobile
        this.isOpen = !this.isOpen //header opened only moblile
      })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
  // async asyncData({ $content }) { //is this in use
  //   const page = await $content('projectes').fetch()
  //   return {
  //     page,
  //   }
  // },

  methods: {
    goHome() {
      Object.assign(this.$data, this.$options.data.call(this))
      EventBus.$emit('goHome')
      this.isOpen = !this.isOpen
      this.home = true
      this.$store.dispatch('openMH')
      // Object.assign(this.$data, this.$options.data(this));
      //triggers a cta "t'han agradat" bubble speech
    },
    closebbState() {
      this.$store.dispatch('closeBB')
      // console.log('bbstate')
    },
    // gotoProjects() {
    //    this.$store.dispatch('closeMH')
    //    this.$store.dispatch('closeBB')
    // }
  },
  computed: {
    mobileHeaderState() {
      return this.$store.state.mobile_header
    },
    BBState() {
      return this.$store.state.bb
    },
  },
}
</script>

<style  lang="scss" >
.header {
  display: flex;
  margin: 3vh 0;
  padding: 0 2rem;
  flex-wrap: nowrap;
  width: 100%;
  // border: solid 1px green;
  background-color: white;
  top: 0;
  height: 15vh; /* 15 +6  */
}

.logo-wrapper {
  max-width: 14vw;
  // border: solid 1px greenyellow;
  cursor: pointer;
}
.b-wrapper {
  width: calc(100vw - 14vw);
  // border: 1px solid salmon;
}

@media (max-width: 768px) {
  .header-container {
    height: 100vh;
  }
  .header {
    margin: 0;
    padding: 1rem;
  }
  .logo-wrapper {
    width: 100%;
    max-width: 100%;
    // border: violet solid 1px;
    //height: 30%;
  }
  .b-wrapper {
    width: 100%;
    //height: 40%;
    // border: tomato 1px solid;
    // background-color:green;
  }

  .Logo-line {
    display: none;
  }

  /* /// Stycky mobile header-bubble ///
  /////////////////////////////////// */

  .mobile_header {
    height: 20vh;
    background-color: #d6fcd9;
    //box-shadow: 5px 5px 50px 10px skyblue;
    flex-direction: column;
    padding: 0.2rem 1rem;
    position: fixed;
    z-index: 2;
    border-bottom: 2px #d6fcd9 solid;

    .logo-wrapper {
      width: 100%;
      height: 50%;
      // margin-right: 2%;
    }
    .b-wrapper {
      width: 100%;
      height: 50%;
      //border: 1px dashed gray;
    }

    .bubble {
      font-size: 1.4rem;
    }

    .goto {
      display: none;
    }
  }
  //bubble opened
  .mobile_header_open {
    height: 100%;
    display:flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    background-color:white;
    //border: red 2px solid;

    .logo-wrapper {
      width: 100%;
      height: 30%;
      border: 1px solid red;
      //background-color:red;
    }
    .b-wrapper {
      width: 100%;
      height:70%;
      //:auto;
       display:flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid green;
    }

    .bubble {
      height:35%;
    }

    .navi {
      height:35%;
    }

    //ATENCIO .speaking is overridint specificity
    .close-button {
      position: fixed !important;
      bottom: 0 !important;
      right: 0 !important;
      top: auto !important;
      width: 50%;
    }

    // .bubble {
    //   // height:40vh;
    //   overflow: auto;
    //   position:relative!important;
    // }

    //   .goto-mobile-bubble {
    //   display: inline-block;
    //   // width: 47%;
    // }
  }
}
</style>