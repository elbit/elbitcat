<template>
  <section class="tableofcontent">
    <h3>Projectes</h3>
    <div id="toc">
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
    </div>
  </section>
</template>

<script>
import EventBus from './global/event-bus'

export default {
  data() {
    return {
      projectes: [],
    }
  },

  props: ['pro'],

  methods: {
    emitMethod(item) {
      console.log('click3e')
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

