 <template>
  <div class="header">
    <div class="logox" @click="resetFields()">
       <Logo-line />
      
    </div>
    <div class="b-wrapper">
      <Bubble  :url="post.url" :dataspeech="post.speech" :strings="post.speech" :home="home" />
      
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
  padding: 3vh 2rem;
  flex-wrap: wrap;
  width: 100%;
  boxrder: solid 1px red;
  position: fixed;
  background-color: white;
  top: 0;
  height: 20vh;
}



.logox {
  /* width: 20%; */
  max-width: 150px;
  bordxer: solid 1px greenyellow;
  max-height: 150px;
  cursor: pointer;
}
.b-wrapper {
  width: calc(100% - 150px);
  borxder: 1px solid salmon;
}

@media (max-width: 768px) {
  .header {
    height: 40vh;
    flex-direction: column-reverse;
      flex-wrap:  wrap;
  }
  .logox {
    width: 100%;
  }
  .b-wrapper {
  width: 100%;
  
  } 
}
</style>