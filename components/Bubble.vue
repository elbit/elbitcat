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

    <div class="bubble" :class="{speaking: isSpeaking, colorBG}" vx-click-outside="ifOnClickOutside">
      <vue-typed-js :strings="[dataspeech]" :key="dataspeech" :typeSpeed="10">
        
        <div>
          
            <span class="text typing"></span> <br>
            <span v-if="home" @click="pricesdata()" class="link">Preus</span>
            <span v-if="!home" ><a class="link" target="blank" :href="url">{{url}} </a> |</span>
            
            <!-- <span v-if="!home"   class="link">
               <NuxtLink to="/" >Qué més necessites?</NuxtLink>
            </span> -->
            <button class="closeBubble-button" @click="closeBubble()" @click.prevent="emitMethod()">tanca</button>
        </div> 
        
      </vue-typed-js>

      <!-- <Categories /> -->
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus';
import vClickOutside from 'v-click-outside'

export default {
  data() {
    return {
      tabs: ['Home', 'Posts', 'Archive'],
      isActive: true,
      isSpeaking: false,
      eventBus: false,
      menu: 'contacte',
      colorBG:'red'

      //dataspeech: { default: 'default speech', type: String },
      //speech: 'mmm'
      // key: 0
    }
  },
  directives: {
      clickOutside: vClickOutside.directive
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
      this.dataspeech = "Fem el teu pressupost a mida de les teves necessitats, sempre prioritzant la millor manera d'ajudar-te. 15 anys d'experiencia en"
    },
    resetFields() {
            Object.assign(this.$data, this.$options.data.call(this));
            Object.assign(this.$data, this.$options.data());
            console.log('enga')
        },
    closeBubble(){
      this.isSpeaking = false
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
      this.eventBus = true,
      this.isActive = true,
      this.isSpeaking = true
      
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
  position:relative;
  border: 1px silver solid;
  padding: 0 0.5rem;
  color:#333;
  /* height: 40px; */
  width: 100%;
  font-family: 'VT323', monospace;
  font-size: calc(25px + 11 * ((100vw - 800px) / 2000));
  /* font-size: 1.4rem; */
  background-color:white;
  /* height:10vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.1;
  /* margin-top:1vh; */

}

.speaking.bubble{
  /* background-color: rgb(238, 238, 238); */
 
  align-items:flex-start;
  padding-top:2rem;

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
  background: linear-gradient(90deg, #9be4ff, #daf1ec) no-repeat;
	background-size: 0% ;
	animation: gradient 2s ;
}
@keyframes gradient {
	
	100% {
		background-size: 100%;
	}
  0% {
    background-size: 0%;}
}

.speaking {
height: 90vh;
z-index: 2;
background-color:white;

}

button {
display:none
}

.speaking .closeBubble-button {
  display:inline-block;
  position:absolute;
  bottom:0;
  right:0;
  border: 1px solid #333;
  background-color: pink;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding:1rem;
}




</style>