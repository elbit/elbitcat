<template>
  <ul>
    <li v-for="category of pro" :key="category.id">
      {{ category.category}} 
      lorem category
    </li>
    lorem categori
  </ul>
</template>

<script>
export default {
  props: ['pro'],
}
</script>

<style>
</style>