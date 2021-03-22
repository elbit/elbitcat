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

    <div class="bubble">
      <vue-typed-js :strings="[dataspeech]" :key="dataspeech" :typeSpeed="30">
        <div>
            <span class="text typing"></span> 
            <span v-if="!home"  @click="resetSpeech()" class="link">
                <NuxtLink to="/" >Torna al menú</NuxtLink>
            </span>
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
      //dataspeech: { default: 'default speech', type: String },
      //speech: 'mmm'
      // key: 0
    }
  },
  props: {
    dataspeech: { default: 'default speech', type: String },
    strings: '',
    home: false,
    strings: '',
   
  },
  methods: {
    resetSpeech() {
      this.dataspeech 
    },
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => {
      console.log('reload css')
      this.isActive = true
      // this.key++
    })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
}
</script>

<style scoped>
.bubble-container {
  display: flex;
  /* height: 40px; */
  width: 100%;
  borx: ;der: solid 1px green;
}
/* .bubble-wrapper {
  width: 100%;
  height: 40px;
  border: salmon 1px solid;
} */
.bubble {
  border: 1px silver solid;
  padding: 1rem 1rem;
  color: #333;
  /* height: 40px; */
  width: 100%;
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  background-color:white;

}

.bubble-line {
  width: 5%;
  height: 40px;
  /* border:red solid 1px; */
  border-bottom: solid silver 1px;
  margin-right: 5px;
  margin-left: px;
  margin-top: 9px;
  transform: rotate(-15deg);
}

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
</style>