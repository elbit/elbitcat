<template>
  <ul>
    <li v-for="category of data" :key="category.id" :class="category">
      {{ category }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang="scss" scoped>
ul {
  display:flex;
  justify-content: space-between;
}

li {
  padding: 0.25rem 0.5rem;
  font-family: 'Major Mono Display', monospace;
  font-size: 0.7rem;
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
.desenvolupament {
  background-color: #D9C8FC;
}
</style>