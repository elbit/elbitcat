 <template>
  <div class="header" :class="{ mobile_bubble: isClosed }">
    <div class="logo-wrapper" @click="resetFields()">
      <Logo-line />
      <Logo />
    </div>
    <div class="b-wrapper">
      <Bubble
        :url="post.url"
        :dataspeech="post.speech"
        :strings="post.speech"
        :home="home"
        :img="post.img"
      />
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  data() {
    return {
      strings:
        'Hola, soc el bit ! qué necessites?<br> <a @click.prevent="console.log(`menu`)" class="link" href="/"> Contacte</a> / <a class="link" href="/"> Preus</a> / <a class="link" href="/"> Freelance</a> ',
      home: true,
      post: [],
      isClosed: false,
    }
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => {
      this.post = data
      this.home = false
    }),
      EventBus.$on('bubbleMobileClosed', (data) => {
        this.isClosed = !this.isClosed
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
    resetFields() {
      Object.assign(this.$data, this.$options.data.call(this))
    },
  },
}
</script>

<style  lang="scss">
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
    height: 100%;
    margin: 0;
    boxder: lightseagreen solid 4px;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    margin: 0;
    position: fixed;
    transition: all 1s;
  }
  .logo-wrapper {
    width: 100%;
    max-width: 100%;
    borxder: violet solid 1px;
    height: 25%;
  }
  .b-wrapper {
    width: 100%;
    height: 75%;
    borxder: tomato 1px solid;
    /* background-color:green; */
  }

  .Logo-line {
    display: none;
  }

  /* /// Stycky mobile header-bubble ///
  /////////////////////////////////// */

  .mobile_bubble {
    height: 15%;
    background-color: greenyellow;
    box-shadow: 5px 5px 50px 10px skyblue;
    flex-direction: row;
     padding: 0.2rem 1rem;

    .logo-wrapper {
      width:14%;
      height: 100%;
      margin-right:2%;
     }
    .b-wrapper {
      width:84%;
    }

    .bubble {
      font-size:1.4rem;
    }

    .goto {
      display:none;
    }
  }
}
</style>