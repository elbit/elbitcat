<template>
    <div class="bubble-project_img">
        <div class="bubble-project_img-wrapper" v-for="img of data" :key="img.slug">
          <nuxt-img :src="img" />
        </div>
    </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
img {
    opacity: 1!important;
}
</style>