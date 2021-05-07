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

    <div class="bubble" :class="{speaking: isSpeaking, colorBG}" >
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
      <div class="bubble-project">

            <div class="bubble-project_img"><img :src="dogImage" alt="{{}}" /></div>
           
           <p class="bubble-project_copy">Lorem-content</p>

           
            </div>
      <!-- <Categories /> -->
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus';
// import vClickOutside from 'v-click-outside'

export default {
  data() {
    return {
      tabs: ['Home', 'Posts', 'Archive'],
      isActive: true,
      isSpeaking: false,
      eventBus: false,
      menu: 'contacte',
      colorBG:'red',
      chosenName: '',
      dataspeechAfter: ['Vols veure més projectes? pues ala a fer scrool lateral','aquest projecte esta molt be link', 'es una salsa o una crema?']
    }
  },
  // directives: {
  //     clickOutside: vClickOutside.directive
  //   },
  props: {
    dataspeech: { default: 'Hola, soc el bit! qué necessites?', type: String },
    strings: '',
    home: false,
    strings: '',
    url: '',
    img: '',
    description: ''
   
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
      var chosenNumber = Math.floor(Math.random() * this.dataspeechAfter.length);
      this.isSpeaking = false
      // this.dataspeech[1] = ["t'agradat aquest projecte? pues sino pots mirar els altres", "como dijo ferran adria esque un tomate"]
      this.dataspeech = this.dataspeechAfter[chosenNumber];
      // this.dataspeech = post.speechAfter
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
  computed: {
   
    dogImage () {
      if (!this.img) {
        return
      }

      const fileName = this.img

      return require(`../assets/img/proyectos/${fileName}`) // the module request
    }
  }
  
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
  border: 1px #333 solid;
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
  transition: all .5s ease-in-out;
  /* margin-top:1vh; */
  height: 100px;

}

.speaking.bubble{
  /* background-color: rgb(238, 238, 238); */
 
  align-items:flex-start;
  padding-top:2rem;
  flex-direction: column;
  
box-shadow: 5px 500px 400px 400px rgba(247, 247, 247, 0.8);

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
  transition: all .3s ease-in-out;
	/* animation: gradient 2s ; */
}

.bubble-project_img {
  max-width: 66%;
}

.bubble-project_img img {
  height:0;
  transition: all .3s ease-in-out;
 
}
.speaking .bubble-project_img img {
  height:auto;
  
 
}
.speaking .bubble-project_img{
  height:90%;
}


/* @keyframes gradient {
	
	100% {
		background-size: 100%;
	}
  0% {
    background-size: 0%;}
} */

.speaking {
height: 95vh;
z-index: 2;
background-color:white;
padding: 1rem;

}

.bubble-project {
  display:none;
  height:100%;
}

.bubble-project_copy {
  font-family: roboto;
  font-size:18px;
}

.speaking .bubble-project  {
  display:flex;
  border:1px solid red;
  width: 100%;
  padding: 1rem;
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
  padding:0.2rem 0.5rem;
}

@media (max-width: 768px) { 

  .bubble {
    height: 100%;
  }

}


</style>