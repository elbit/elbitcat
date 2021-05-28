<template>
  <div
    class="bubble"
    :class="{ speaking: isSpeaking, mobile_bubble: isClosed, colorBG }"
  >
    <vue-typed-js :strings="[dataspeech]" :key="dataspeech" :typeSpeed="10">
      <div class="bubble-message">
        <span class="text typing"></span> <br />
        <!-- <span v-if="home" @click="pricesdata()" class="bubble-link">Preus</span> -->
        <span v-if="!home"
          ><a class="bubble-link" target="blank" :href="url">{{ url }} {{ test }}</a>
          |</span >

        <!-- <span v-if="!home"   class="link">
               <NuxtLink to="/" >Qué més necessites?</NuxtLink>
            </span> -->
      </div>
    </vue-typed-js>
      
    <div class="button-nav">
      <button class="goto" @click.prevent="closeBubbleMobile()">
        veure projectes 
      </button>
      <button class="goto" @click.prevent="closeBubbleMobile()">
        contacte
      </button>
      <button class="goto" @click.prevent="closeBubbleMobile()">serveis</button>
    </div>

    <div class="bubble-project">
      <!-- <img
            v-for="imgs of post.img.slice(0,1)"
            :key="imgs.slug"
            :class="{ img_active: isSpeaking, colorBG }"
            :src="imgs"
          > -->

      <div class="bubble-project_img">
        <div v-for="imgs of img" :key="imgs.slug">
          <img :class="{ img_active: isSpeaking }" :src="imgs" />
        
        </div>
        <!-- <div>
          <img
            :class="{ img_active: isSpeaking, colorBG }"
            :src="dogImage"
            alt="{{}}"
          />
        </div>
        <div>
          <img
            :class="{ img_active: isSpeaking, colorBG }"
            :src="dogImage"
            alt="{{}}"
          />
        </div>
        <div>
          <img
            :class="{ img_active: isSpeaking, colorBG }"
            :src="dogImage"
            alt="{{}}"
          />
        </div>
        <div>
          <img
            :class="{ img_active: isSpeaking, colorBG }"
            :src="dogImage"
            alt="{{}}"
          />
        </div> -->
      </div>

      <div class="bubble-project_copy">
        
        <h2 class="bubble-project_copy-title">{{ data.title }}</h2>
        <ul>
          <li>
            {{ data.description }}
          </li>
        </ul>
      </div>
    </div>
    <button
      class="close-button"
      @click="closeBubble()"
      @click.prevent="emitMethod()"
    >
      tanca
    </button>
    <!-- <Categories /> -->
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'
// import vClickOutside from 'v-click-outside'

export default {
  data() {
    return {
      //tabs: ['Home', 'Posts', 'Archive'],
      isActive: true,
      isSpeaking: false,
      isClosed: false,
      eventBus: false,
      menu: 'contacte',
      colorBG: 'red',
      chosenName: '',
      dataspeechAfter: [
        'Vols veure més projectes? pues ala a fer scrool lateral',
        'aquest projecte esta molt be link',
        'es una salsa o una crema?',
      ],
      
    }
  },
  // directives: {
  //     clickOutside: vClickOutside.directive
  //   },
  props: {
    test:'',
    dataspeech: {
      default: 'Hola,soc el Bit.cat!<br>Qué necessites?',
      type: String,
    },
    strings: '',
    home: false,
    // strings: '',
    url: '',
    img: [],
    // title: '',
    // description: '',
    alt: '',
    data:{}
  },
  methods: {
    resetSpeech() {
      this.dataspeech
    },
    pricesdata() {
      this.dataspeech =
        "Fem el teu pressupost a mida de les teves necessitats, sempre prioritzant la millor manera d'ajudar-te. 15 anys d'experiencia en"
    },
    resetFields() {
      Object.assign(this.$data, this.$options.data.call(this))
      Object.assign(this.$data, this.$options.data())
      console.log('enga')
    },
    closeBubble() {
      var chosenNumber = Math.floor(Math.random() * this.dataspeechAfter.length)
      this.isSpeaking = false
      // this.dataspeech[1] = ["t'agradat aquest projecte? pues sino pots mirar els altres", "como dijo ferran adria esque un tomate"]
      this.dataspeech = this.dataspeechAfter[chosenNumber]
      // this.dataspeech = post.speechAfter
    },
    closeBubbleMobile() {
      // this.isClosed = !this.isClosed;
      console.log('yeah')
      EventBus.$emit('bubbleMobileClosed')
      this.dataspeech = 'quins projectes OMG!'
    },
    emitMethod(item) {
      // console.log('click3e')
      EventBus.$emit('bubbleClosed', item)
    },
    // onClickOutside (event) {
    //       this.isSpeaking = true ;
    //       console.log('outside')
    //   },
    // ifOnClickOutside() {
    //   if(this.eventBus == true) {
    //    this.isSpeaking = false ;
    //   }
    // }
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => {
      console.log('reload css')
      ;(this.eventBus = true), (this.isActive = true), (this.isSpeaking = true)
    }),
    EventBus.$on('goHome', (data) => {
      this.dataspeech = 'T,han agradat els projectes, ara nomes et falta contactar'
    })

    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
  computed: {
    dogImage() {
      // if (!this.img) {
      //   return
      // }
      const fileName = this.img

      for (let i = 0; i < fileName.length; i++) {
        require(`../assets/img/proyectos/${fileName[i]}`) // the module request
      }
    },
  },
}
</script>


<style lang="scss">
.bubble {
  position: relative;
  padding: 0 0.5rem;
  width: 100%;
  height: 15vh;

  border: 1px #333 solid;
  color: #333;
  background-color: white;

  font-family: 'Roboto Mono', monospace;
  font-size: 1.3rem;
  font-size: calc(20px + 11 * ((100vw - 800px) / 2000));
  line-height: 1.2;
  font-style: italic;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;
  animation-direction: normal;

  @media (max-width: 768px) {
    height: 100%;
    // background-color: red;
    font-size: 2rem;
    font-weight: 400;
    border: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    borxder: 1px solid pink;
  }

  &-message {
    text-align: center;
    width: 100%;
    background-size: 0%;
    borxder: 1px solid teal;
    transition: all 1s ease-in-out;

    @media (max-width: 768px) {
      line-height: 1.2;
    }
  }
  .typed-element {
    width: 100%;
  }

  &-link {
    text-decoration: underline;
    color: #e35bff;
  }

  &-project {
    display: none;
    height: 100%;
    // transition: all 0.6s ease-in-out;
  }
  &-project_copy {
    font-family: roboto;
    font-size: 14px;
    font-style: normal;
    border-left: solid #333 1px;
    padding-left: 2rem;
    line-height: 1.5;
    height: 100%;
    margin-top:2rem;
    &-title {
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
  &-project_img {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-right: 1rem;
    // height: 100%;
    // transition: all 0.6s ease-in-out;
    div {
      // background: #dcdcdc;
      height: 50%;
      // padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      borxder: royalblue 1px solid;
      padding: 0.5rem;

      @media (max-width: 768px) {
        width: 100%;
      }
      // border:1px solid red;
    }
  }
  &-project_img img {
    // height: 5px;
    // visibility: hidden;
    // transform-origin:  top;
    transition: opacity 2s ease-in-out;
    //  animation-direction: normal;
    transition-delay: 2s;
    opacity: 0;
     max-height: 100% !important;
     max-width: 100%;
    margin: 0 auto;
    borxder:fuchsia 1px solid;
    
  }

  .close-button {
    display: none;
    background-color: pink;
    border: 1px solid #333;
    padding: 0.2rem 0.5rem;
  }
}

////Bubble project open
.speaking {
  height: 95vh;
  z-index: 2;
  padding: 1rem;
  width:102%;

  // box-shadow: 0px 5px 8px 5px silver;
  background-color: white;
  //  background: linear-gradient(90deg, #9be4ff, #daf1ec) no-repeat;
  // background-size: 0%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  // transition: all 0.6s ease-in-out;
  /* animation: gradient 2s ; */

  &.bubble .bubble-message {
    text-align: center;
    // border: red solid 1px;
    width: 100%;
    // margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #333;
    background-size: 100%;
    // background: linear-gradient(90deg, #9be4ff, #daf1ec) no-repeat;
  }
  .bubble-project {
    display: flex;
    // border: 1px solid red;
    width: 100%;
    // padding: 1rem;
    overflow: auto;
    
    @media (max-width: 768px) {
      flex-direction: column;
      display: block;
      height: auto;
    }
  }

  .bubble-project_img .img_active {
    max-height: 100%;
    opacity: 1;
    //  visibility: visible; //https://stackoverflow.com/questions/23581309/css3-animation-transition-opacity-not-working/23581403
  }

  .close-button {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;

    margin-top: 1rem;
    margin-right: 1rem;
  }

  
}
.logo-line rect {
    // box-shadow: 0px 5px 8px 5px silver;
  }
.head {
  transform: perspective(1000px) rotateY(35deg);
  transition: transform 1s ease 0s;
}

.goto {
  display: none;
}
@media (max-width: 768px) {
  .goto {
    borxder: 1px solid black;
    // background-color: blueviolet;

    // bottom: 0;
    // margin-bottom:2rem;
    display: block;
    padding: 0.5rem;
    width: 100%;
    font-weight: 100;
    margin-bottom: 5px;
    font-family: 'Major Mono Display', monospace;
    &:nth-child(1) {
      background-color: #98cbf9;
    }
    &:nth-child(2) {
      background-color: #b2e3d8;
    }
    &:nth-child(3) {
      background-color: #ffadb6;
    }
  }
  .button-nav {
    width: 100%;
    font-size: 1.5rem;
  }
}
</style>