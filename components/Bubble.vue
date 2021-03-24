<template>
  <!-- <div>
     <transition name="custom-classes-transition" enter-active-class="animate__animated animate__slideInLeft" appear>
        <p  id="typedtext" class="animate__animated" :class="{ slide_right: isActive }" :key="dataspeech">
            {{ dataspeech }}
            <span v-if="!home"  @click="resetSpeech()">
                <NuxtLink to="/">Torna al menú bbbibib</NuxtLink>
            </span>
          
        </p>
        
    </transition> 

    <vue-typed-js :strings="[dataspeech]" :key="dataspeech">
      <h1>Hey <span class="typing"></span></h1>
    </vue-typed-js>

  </div> -->

  <div class="bubble-container">
    <div class="bubble-line"></div>

    <div class="bubble" :class="{speaking: isSpeaking}">
      <vue-typed-js :strings="[dataspeech]" :key="dataspeech" :typeSpeed="10">
        <div>
            <span class="text typing"></span> 
            <span v-if="home" @click="pricesdata()" class="link">Preus</span>
            <span v-if="!home" ><a class="link" target="blank" :href="url">{{url}} </a> |</span>
            <!-- <span v-if="!home"   class="link">
               <NuxtLink to="/" >Qué més necessites?</NuxtLink>
            </span> -->
        </div> 
        
      </vue-typed-js>

      <!-- <Categories /> -->
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  data() {
    return {
      tabs: ['Home', 'Posts', 'Archive'],
      isActive: true,
      isSpeaking: false,
      menu: 'contacte'

      //dataspeech: { default: 'default speech', type: String },
      //speech: 'mmm'
      // key: 0
    }
  },
  props: {
    dataspeech: { default: 'Hola, soc el bit! qué necessites?', type: String },
    strings: '',
    home: false,
    strings: '',
    url:'',
   
  },
  methods: {
    resetSpeech() {
      this.dataspeech 
    },
    pricesdata() {
      this.dataspeech = "Fem el teu pressupost a mida de les teves necessitats, sempre prioritzant la millor manera d'ajudar-te. Lorem impsum en el bit fem treball a mida artesans, pillar textes del projecte scic"
    },
    resetFields() {
            Object.assign(this.$data, this.$options.data.call(this));
            Object.assign(this.$data, this.$options.data());
            console.log('enga')
        }
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => {
      console.log('reload css')
      this.isActive = true,
      this.isSpeaking = true
      // this.key++
    })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
}
</script>

<style >
.bubble-container {
  display: flex;
  /* height: 40px; */
  width: 100%;
  borxder: solid 1px green;
  height:100%;
}
/* .bubble-wrapper {
  width: 100%;
  height: 40px;
  border: salmon 1px solid;
} */
 /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
.bubble {
  border: 1px silver solid;
  padding: 1rem 1rem;
  color:#333;
  /* height: 40px; */
  width: 100%;
  font-family: 'VT323', monospace;
  font-size: calc(14px + 12 * ((100vw - 320px) / 1680));
  /* font-size: 1.4rem; */
  background-color:white;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

/* .bubble-line {
  width: 5%;
  height: 40px;
 
  border-bottom: solid silver 1px;
  margin-right: 5px;
  margin-left: px;
  margin-top: 9px;
  transform: rotate(-15deg);
} */

/* @media (max-width: 768px) {
 .bubble-line {
  width: 5%;
  height: 40px;
 
  border-bottom: solid silver 1px;
  margin-right: 5px;
  margin-left: px;
  margin-top: 60px;
  transform: rotate(-15deg);
}
} */

.link {
  text-decoration: underline;
  color: #e35bff;
}

/* https://css-tricks.com/snippets/css/typewriter-effect/ */
.text {
  /* display: inline-block; */
  line-height: 1;

  boxrder: 1px blue solid;
}
.speaking {
  border: #e35bff 1px solid; 
}
</style>