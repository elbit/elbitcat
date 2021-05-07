<template>
  
    <div class="cards-wrapper" :class="{blur: isSpeaking}">
      <Card :pro="projectes" /> 
    </div>
  
</template>

<script>

import EventBus from '../components/global/event-bus';

export default {

  
  async asyncData({ $content, params }) {
    const projectes = await $content('projectes', params.slug).fetch();
    
    return {
      projectes,
    };
  },
  data() {
    return {
      
      isSpeaking: false,
    }
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => { 
      this.isSpeaking = true  
      // this.key++
    }),
    EventBus.$on('bubbleClosed', (data) => {
      this.isSpeaking = false
      // this.key++
    })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
};



</script>

<style>
.cards-wrapper {
  borxder: solid 10px green;
  /* margin-top:19vh; */
  width:auto;
  overflow-x: auto;
  overflow-y: hidden;
  height: 79vh; 
}

@media (max-width: 768px) {
  .cards-wrapper {
    /* margin-top:30vh; */
   height: auto!important;
   overflow-x: auto;
  overflow-y: auto;
  } 
}

/* .blur {
  -webkit-backface-visibility: hidden;
-webkit-perspective: 1000;
-webkit-transform: translate3d(0,0,0);
-webkit-transform: translateZ(0);
backface-visibility: hidden;
perspective: 1000;
transform: translate3d(0,0,0);
transform: translateZ(0);
  filter: blur(5px); 
} */
</style>
