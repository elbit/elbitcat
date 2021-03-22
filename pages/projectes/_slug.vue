<template>
  <article>
    <nuxt-content :document="projecte" />
  </article>
</template>

<script>

export default {
  async asyncData({ $content, params }) {
    const projecte = await $content('projectes', params.slug).fetch()

    return {
      projecte
    }
  }
}
    

</script>

<style>

</style>