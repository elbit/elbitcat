 <template>
  <div class="header">
    <div class="logo-wrapper" @click="resetFields()">
       <Logo-line />   
    </div>
    <div class="b-wrapper">
      <Bubble  :url="post.url" :dataspeech="post.speech" :strings="post.speech" :home="home" :img="post.img" />
      
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  data() {
    return {
      strings: 'Hola, soc el bit ! qué necessites?<br> <a @click.prevent="console.log(`menu`)" class="link" href="/"> Contacte</a> / <a class="link" href="/"> Preus</a> / <a class="link" href="/"> Freelance</a> ',
      home: true,
      post:[]
    }
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => {
      this.post = data
      this.home = false
    })
    // EventBus.$on("reset", () => {
    //   Object.assign(this.$data, this.$options.data()); //https://stackoverflow.com/questions/35604987/is-there-a-proper-way-of-resetting-a-components-initial-data-in-vuejs

    // });
  },
  async asyncData({ $content }) {
    const page = await $content('projectes').fetch()

    return {
      page,
    }
  },
  methods: {
        resetFields () {
            Object.assign(this.$data, this.$options.data.call(this));
        }
    }
}
</script>

<style scoped>
.header {
  display: flex;
  margin: 3vh 0;
  padding: 0 2rem;
  flex-wrap: nowrap;
  width: 100%;
  boxrder: solid 1px green;
  background-color: white;
  top: 0;
  height: 15vh; /* 15 +6  */
}

.logo-wrapper {
  max-width: 14vw;
  boxder: solid 1px greenyellow;
  cursor: pointer;
}
.b-wrapper {
  width: calc(100vw - 14vw);
  borxder: 1px solid salmon;
}

@media (max-width: 768px) {
  .header {
    height: 100vh;
    margin: 0;
    border:lightseagreen solid 4px;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding:0;
    margin: 0 3vw;
  }
  .logo-wrapper {
    width: 100%;
    max-width: 100%;
    border:violet solid 1px;
    height:30vh;
  }
  .b-wrapper {
  width: 100%;
  height: 69vh;
  border:tomato 1px solid;
  
  } 
}
</style>