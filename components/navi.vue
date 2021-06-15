<template>
  <div>
    <nav>
      <a href="" @click.prevent="gotoProjects()"> Veure projectes</a>
      <NuxtLink to="/contacte">contacte</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    gotoProjects() {
      this.$store.dispatch('closeMH')
      this.$store.dispatch('closeBB')
    },
  },
}
</script>

<style lang="scss" scoped>
nav > a {
  // borxder: 1px solid black;
  display: block;
  text-align: center;
  padding: 0.5rem;
  width: 100%;
  font-weight: 100;
  margin-bottom: 5px;
  font-family: 'Major Mono Display', monospace;
  &:nth-child(1) {
    background-color: #98cbf9;
  }
  &:nth-child(2) {
    background-color: #b2e3d8;
  }
  &:nth-child(3) {
    background-color: #ffadb6;
  }
  &:nth-child(4) {
    background-color: #ffeac1;
  }
  &:nth-child(5) {
    background-color: #ffadb6;
  }
}
</style>