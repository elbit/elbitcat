<template>
  <div class="container">
    <div>
      <PostList :pro="projectes" />
      lorem p1
      {{projectes}}

    </div>
  </div>
</template>

<script>
// import EventBus from "../components/global/event-bus";

export default {

  async asyncData({ $content, params }) {
    const projectes = await $content('projectes', params.slug).fetch();
    
    return {
      projectes,
    };
  },
};

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
 

}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
