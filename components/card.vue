<template>
<transition name="fade">
  <div class="cardbase"  v-show="mhState ==='close'&&$mq =='sm' &&bbState ==='close'|| bbState ==='close'&&$mq !=='sm' " >
    <!-- cardbase_show: mhState ==='close'  :class="{ cardbase_hidden: bbState ==='open' }" includes(someValue-->
    <div class="card" v-for="post of data" :key="post.slug">
    
      <div class="card-header">
        <h1>{{ post.title }} {{bbState}}</h1>
      </div>

      <div class="img-wrapper" :class="post.padding">
        <!-- <img :src="require(`~/assets/img/proyectos/${post.img[0]}`)" alt="{{}}" /> -->
        <img
          v-for="imgs of post.img.slice(0, 1)" d
          :key="imgs.slug"
          :src="imgs"
        />
      </div>

      <div class="card-content">
        
        <categories :data="post.categories" />

        <div class="info">
          <a
            class="info-button"
            href=""
            @click.prevent="openProject(post), openbb(), (isBlur = true)"
            >més info</a>
        </div>
      </div>
    
    </div>
  </div>
  </transition>
</template>

<script>

import EventBus from './global/event-bus'

export default {
 
  data() {
    return {
      //projectes: [],
      isBlur: false,
      hideBack: false,
    }
  },

  props: ['data'], // data en aquests cas "projectes" desde index, no es pot fer directament aqui $context

  methods: {
    openProject(item) {
      // console.log('click3e')
      EventBus.$emit('OPEN_PROJECT', item)
      this.hideBack = !this.hideBack
    },
    openbb(){
      this.$store.dispatch('openBB'),
      this.$store.dispatch('closeMH')
    }
  },
  mounted() {
    EventBus.$on('bubbleClosed', (data) => {
      ;(this.isBlur = false)((this.hideBack = !this.hideBack))
    })

    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
  computed: { 
    bbState(){ return this.$store.state.bb} ,
    mhState(){ return this.$store.state.mobile_header} 
  },
  //  async fetch () {
  //   this.projectes = await this.$content('projectes').fetch();
  //  console.log(this.projectes)
  //   // return projectes
  // },
}
</script>

<style scoped lang="scss">
.cardbase {
  width: auto;
  /* display: flex; */
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
  overflow-x: auto;
  overflow-y: hidden;
  boxrder: 10px solid fuchsia;
  display: flex;
  /* height: 80vh; */
  padding-bottom: 1vh;
  padding-left: 2rem;
  padding-top: 4vh;
  padding-right: 4rem;
  height: 100%;
  z-index: 1;
  /* position:fixed;
  bottom:0; */
  /* max-height: -webkit-fill-available; */
}
.cardbase_hidden { //bb open / oproject
  opacity: 0.3;
  @media (max-width: 768px) {
    display:none;
  }
}

.card {
  border: solid #333 1px;
  width: 1000px;
  min-width: 500px;
  padding: 0.5rem;
  transition: all 0.5s;
  display: inline-block;
  margin-right: 2rem;
  height: 97%;
  z-index: 1;
}

.card-header {
  height: 10%;
}

.card h1 {
  font-family: 'Major Mono Display', monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.card h1 a {
  text-decoration: none;
  font-size: 1.8vw;
  font-size: clamp(1rem, 1.8vw, 3rem);
}

.img-wrapper {
  background: #dcdcdc;
  height: 80%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  boxrder: royalblue 4px solid;

  img {
    max-width: 100%;
    /* -webkit-filter: drop-shadow(5px 5px 10px rgb(51, 51, 51)); */
    transition: all 0.5s;
    max-height: 100%;
    margin: 0 auto;
  }
  
}

.card-content {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  // height: 10%;
  boxrder: hotpink 4px solid;
}

.info-button {
  padding: 0.1rem 0.3rem;
  font-family: 'Major Mono Display', monospace;
  font-size: 0.7rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

.info-button {
  border: 1px solid #333;
  margin: 0;
  width: 100%;
}

.padding-h {
  padding-left: 4rem;
  padding-right: 4rem;
}

.padding-v {
  padding-top: 2rem;
  padding-bottom: 2rem;
}


.project-website:hover {
  text-decoration: underline;
}

/* .card:hover img {
    /* transform: perspective(35em) rotatey(-10deg) scale(1.05); 
  } */

@media (max-width: 768px) {
  .cardbase {
    /* height: 90vh; */
    // borxder: 5px solid green;

    padding: 2vh;
    display: block; //show for buuble close, closed by default on open to avoid scrool bg
    // display:none;
    width: 100%;
    /* margin-top: 25% */
  }
  .cardbase_show {
    display: block!important;//ok something is bad here
  }
  .card {
    /* width: 75vw; */
    width: 100%;
    min-width: 100%;
    margin-bottom: 4rem;
    margin-right: 0;
    /* min-width: 75vw;
    max-height: 64vh; */
  }

  .img-wrapper {
    height: 30%;
    padding: 1rem;
  }
  .card h1 {
    font-size: 5vw;
  }
  .hidden {
    display: none;
  }

  .info {
    width: 45%;
    /* border: red solid 1px; */
    text-align: center;
  }
  // .cardbase_display {
  // display: none;
  // }
}

@media (min-width: 769px) and (min-height: 768px) {
  .cardbase {
    height: 80vh;
  }
  .card {
    width: 800px;
    max-width: 800px;
    min-width: 800px;
    background-color: seashell;
  }
}

.blur {
  opacity: 0.3;
}


</style>

