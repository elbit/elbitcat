 <template>
  <div class="header">
    <div class="logox">
      <Logo />
    </div>
    <div class="b-wrapper">
      <Bubble :dataspeech="speech" :strings="speech" :home="home" />
    </div>
  </div>
</template>

<script>
import EventBus from '../components/global/event-bus'

export default {
  data() {
    return {
      speech: 'soc elbit cat',
      home: true,
    }
  },
  mounted() {
    EventBus.$on('EVENT_NAME', (data) => {
      this.speech = data
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
  /* backdrop-filter: blur(20px); */
  height: 20vh;
}

@media (max-width: 768px) {
  .header {
    height: 40vh;
  }
}

.logox {
  /* width: 20%; */
  max-width: 150px;
  bordxer: solid 1px greenyellow;
  max-height: 150px;
}
.b-wrapper {
  width: calc(100% - 150px);
  borxder: 1px solid salmon;
}
</style>