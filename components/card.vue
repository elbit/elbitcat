<template>
  <!-- <div id="toc">
      <ul>
        <li
          v-for="post of pro"
          :key="post.slug"
          @click="emitMethod(post.speech)"
        >
          {{ post.title }} {{ post.id }}

          <nuxt-content :document="post" />
        </li>
      </ul>

      
    </div> -->
  <div class="cardbase">
    <div class="card" v-for="post of pro" :key="post.slug">
      <div class="card-header">
        <h1>{{ post.title }}</h1>
      </div>

      <div class="img-wrapper" :class="post.padding">
        <img :src="require(`~/assets/img/proyectos/${post.img}`)" alt="{{}}" />
      </div>

      <div class="card-content">
        <!-- <Categories :pro="projectes" /> -->
        <ul class="categories">
          <li
            v-for="category of post.categories.slice(0, 3)"
            :key="category.slug"
            :class="category"
          >
            {{ category}}
          </li>
        </ul>
        <div><a class="info" href="" @click.prevent="emitMethod(post)">més info</a></div>
        
      </div>
      <!-- <a  class="project-website" :href="post.url" target="_blank">{{post.url}}</a> -->

      <!-- <nuxt-content :document="post" /> -->
    </div>
  </div>
</template>

<script>
import EventBus from './global/event-bus'

export default {
  data() {
    return {
      //projectes: [],
    }
  },

  props: ['pro'],

  methods: {
    emitMethod(item) {
      // console.log('click3e')
      EventBus.$emit('EVENT_NAME', item)
    },
  },
  //  async fetch () {
  //   this.projectes = await this.$content('projectes').fetch();
  //  console.log(this.projectes)
  //   // return projectes
  // },
}
</script>

<style scoped>
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
  height:100%;
  /* position:fixed;
  bottom:0; */
  max-height: -webkit-fill-available;
}
/* .cardbase:last-child {
  margin-right:3rem;
  } */
.card {
  border: solid #333 1px;
  width: 1000px;
  min-width: 500px;
  padding: 0.5rem;
  transition: all 0.5s;
  display: inline-block;
  margin-right: 2rem;
  height: 97%;
}

/* .card:last-child{
  
  margin-right:1000px;
 
} */
.card-header {
  height: 10%;
}
.card-content {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 10%;
  boxrder: hotpink 4px solid;
}
.img-wrapper {
  background: #dcdcdc;
  height: 80%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
   boxrder: royalblue 4px solid;
}

.card h1 {
  font-family: 'Major Mono Display', monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  /* margin-top: 0.5rem; */
  text-align: center;
  /* //text-transform: capitalize; */
}
.card h1 a {
  text-decoration: none;
  font-size: 1.8vw;
  font-size: clamp(1rem, 1.8vw, 3rem);
}



img {
  max-width: 100%;
  /* -webkit-filter: drop-shadow(5px 5px 10px rgb(51, 51, 51)); */
  transition: all 0.5s;
  max-height: 100%;
  margin: 0 auto;
}

.padding-h {
  padding-left: 4rem;
  padding-right: 4rem;
}
.padding-v {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.wordpress {
  background-color: #98cbf9;
}

.tailwind {
  background-color: #ffadb6;
}

.disseny {
  background-color: LemonChiffon;
}

.categories {
}
.categories li,
.info {
  padding: 0.1rem 0.3rem;
  font-family: 'Major Mono Display', monospace;
  font-size: 0.7rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}
.categories li:last-child {
  align-self: flex-end;
}
/* .info {
  font-size: 0.7rem;
  line-height: 1;
} */

.info {
  border: 1px solid #333;
}
/* .project-website {
  color:pink;
} */
.project-website:hover {
  text-decoration: underline;
}

/* .card:hover img {
    /* transform: perspective(35em) rotatey(-10deg) scale(1.05); 
  } */
@media (max-width: 768px) {
  .cardbase {
    /* height: 90vh; */
    borxder: 5px solid green;

    padding: 2vh;
    display: block;
    width: 100%;;
  }
  .card {
    /* width: 75vw; */
    max-width: 100%;
    margin-bottom: 4rem;
    /* min-width: 75vw;
    max-height: 64vh; */
  }

  .img-wrapper {
    height: 45vh;
    padding: 1rem;
  }
  .card h1 {
    font-size: 5vw;
  }
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
</style>

