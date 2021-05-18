<template>
 
    
    <div class="bubble" :class="{ speaking: isSpeaking, mobile_bubble: isClosed, colorBG }">
      
      <vue-typed-js :strings="[dataspeech]" :key="dataspeech" :typeSpeed="10">
        
        <div class="bubble-message">
          <span class="text typing"></span> <br />
          <span v-if="home" @click="pricesdata()" class="bubble-link">Preus</span>
          <span v-if="!home"><a class="bubble-link" target="blank" :href="url">{{ url }} </a> |</span>

          <!-- <span v-if="!home"   class="link">
               <NuxtLink to="/" >Qué més necessites?</NuxtLink>
            </span> -->
        </div>

      </vue-typed-js>

      <button class="goto" @click.prevent="closeBubbleMobile()">Veure projectes</button>

      <div class="bubble-project">
        
        <div class="bubble-project_img">
          
          <div><img :class="{ img_active: isSpeaking, colorBG }" :src="dogImage" alt="{{}}" /></div>
          <div><img :class="{ img_active: isSpeaking, colorBG }" :src="dogImage" alt="{{}}" /></div>
          <div><img :class="{ img_active: isSpeaking, colorBG }" :src="dogImage" alt="{{}}" /></div>
          <div><img :class="{ img_active: isSpeaking, colorBG }" :src="dogImage" alt="{{}}" /></div>
        
        </div>

        <div class="bubble-project_copy">
            <h2 class="bubble-project_copy-title" >Descripció</h2>
          <ul>
            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam autem veniam possimus architecto voluptatum laudantium, nesciunt unde, sequi reprehenderit labore error totam voluptas perspiciatis eos obcaecati quaerat repellat officia consectetur nulla ipsa sapiente beatae. Praesentium hic nobis eius tempore amet tempora reiciendis nostrum velit iure, accusamus asperiores sit exercitationem ad, sunt, quo quas nulla voluptate.</li>
           

          </ul>
         
          
        </div>

        
      
      </div>
       <button class="close-button" @click="closeBubble()" @click.prevent="emitMethod()">
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
      tabs: ['Home', 'Posts', 'Archive'],
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
    dataspeech: { default: 'Hola, soc el bit! qué necessites?', type: String },
    strings: '',
    home: false,
    strings: '',
    url: '',
    img: '',
    description: '',
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
    closeBubbleMobile(){
        // this.isClosed = !this.isClosed;
        console.log('yeah');
        EventBus.$emit('bubbleMobileClosed')
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
      console.log('reload css');
      (this.eventBus = true), (this.isActive = true), (this.isSpeaking = true)
    })

    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
  computed: {
    dogImage() {
      if (!this.img) {
        return
      }

      const fileName = this.img

      return require(`../assets/img/proyectos/${fileName}`) // the module request
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

  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  font-size: calc(25px + 11 * ((100vw - 800px) / 2000));
  line-height: 1;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: all 0.3s ease-in-out;
  animation-direction: normal;

  @media (max-width: 768px) { 

    height:100%;
    // background-color: red;
    font-size: 3rem;
    
  }
 
  &-message {
    text-align: center;
    width:100%;
    background-size:0%;
    transition: all 1s ease-in-out;
  }
  .typed-element {
    width:100%;
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
    font-size: 16px;
    border-left: solid #333 1px;
    padding-left: 2rem;
    line-height: 1.5;
    &-title {
      font-weight:bold;
      font-size: 1.5rem;
      margin-bottom:1rem;
    }
  }
  &-project_img {
   min-width: 75%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-right: 1rem;
    // transition: all 0.6s ease-in-out;
    div {
      width:50%;
       @media (max-width: 768px) {  
         width:100%;
    
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
  
  // box-shadow: 5px 60vh 300px 300px rgba(247, 247, 247, 0.8);
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
    width:100%;
    margin-bottom: 2rem;
    padding-bottom:2rem;
    border-bottom: 1px solid #333;
    background-size: 100%;
    // background: linear-gradient(90deg, #9be4ff, #daf1ec) no-repeat;
  }
  .bubble-project {
    display: flex;
    // border: 1px solid red;
    width: 100%;
    padding: 1rem;
     overflow: auto;
      @media (max-width: 768px) {  
        flex-direction: column;
    
  }
  }

  .bubble-project_img  .img_active{
   max-height:100%;
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
.head {
     transform: perspective(1000px) rotateY(35deg);
     transition: transform 1s ease 0s;
  }

.goto {
 display:none;
}
@media (max-width: 768px) { 

    .goto {
  border: 1px solid black;
  background-color: blueviolet;
  position: absolute;
  bottom: 0;
  margin-bottom:2rem;
  display: block;
}
  }



</style>