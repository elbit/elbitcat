<template>
  <div class="project_description">
    <nuxt-content :document="data" />
    <categories :data="data.categories" class="categories"/>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
  
  .project_description {
    font-family: $copy;
    font-size: 0.8rem;
    font-style:normal;
    line-height: 1.5;
    width: 35% ;
    border:red solid 1px;
    
    &::v-deep h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    }
  }
  .categories {
    margin-top:1rem;
  }
</style>