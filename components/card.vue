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
    <div
      class="card"
      v-for="post of pro"
      :key="post.slug"
     
    >
      <h1>{{ post.title }}</h1>

      <div class="img-wrapper" :class="post.padding">
        <img :src="require(`~/assets/img/proyectos/${post.img}`)" alt="{{}}" />
      </div>
    <div class="card-content">
      <!-- <Categories :pro="projectes" /> -->
      <ul class="categories">
        <li
          v-for="category of post.categories"
          :key="category.slug"
          :class="category"
        >
          {{ category }}
        </li>
      </ul>

      <a class="info" href=""  @click.prevent="emitMethod(post)" >més info</a>
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
  border: 1px solid green;
  display: flex;
  height: 80vh;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-top: 3vh;
  padding-right: 4rem;
}
/* .cardbase:last-child {
  margin-right:3rem;
  } */
.card {
  border: solid silver 1px;
  width: 1000px;
  min-width: 500px;
  padding: 0.5rem;
  /* //width: 100%; */
  /* float: left; */

  /* margin-bottom: 1rem; */
  transition: all 0.5s;
  display: inline-block;
  margin-right: 2rem;
}

/* .card:last-child{
  
  margin-right:1000px;
 
} */

.card-content {
  display:flex;
  justify-content: space-between;
   margin-top: 1rem;
  height: 5vh;

}

@media (max-width: 768px) {
  .cardbase {
    height: 60vh;
  }
  .card {
    width: 70vw;
    max-width: 70vw;
    min-width: 70vw;
  }
}

@media (min-height: 768px) {
  .cardbase {
    height: 80vh;
  }
  .card {
    width: 800px;
    max-width: 800px;
    min-width: 800px;
    background-color:seashell;
  }
}

/* .card:hover {
    position:absolute;
    width: calc(100% - 4rem);
    background-color:pink;
    z-index: 1000;
    left:2rem;
    top:20vh;
    height: 75vh;
  } */

/* .active {
    transform: perspective(75em) rotatey(4deg);
    box-shadow: rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
      rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;

    /* max-width: 100%; 
    width: 100%;
  } */

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

.img-wrapper {
  background: #dcdcdc;
  /* padding:5rem 3rem; */
  /* width:40%;
  height:30%; */
  height: 55vh;
  padding: 1rem; 
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  /* -webkit-filter: drop-shadow(5px 5px 10px rgb(51, 51, 51)); */
  transition: all 0.5s;
  max-height: 100%;
  margin:0 auto;
}

/* .info {
  border: 1px solid #ddd;
  font-family:'Major Mono Display', monospace; 
  padding: 0.5rem;
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.1rem 0.3rem;
} */

.padding-h {
  padding-left: 4rem;
  padding-right: 4rem;
}
.padding-v{
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
.categories li, .info {
  padding: 0.1rem 0.3rem;
  font-family: 'Major Mono Display', monospace;
  font-size: 0.7rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}
/* .info {
  font-size: 0.7rem;
  line-height: 1;
} */

.info  {
  border: 1px solid #ddd;
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
</style>

