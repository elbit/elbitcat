<template>
  
    <div class="card-wrapper">
      <Card :pro="projectes" /> 
    </div>
  
</template>

<script>

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
.card-wrapper {
   /* display: flex; */
  margin-bottom: 0;
  /* flex-wrap: wrap; */
  /* width: 100%; */
  borxder: solid 1px red;
  margin-top:20vh;
  width:auto;
  overflow-x: auto;
  overflow-y: hidden;
  height: auto;
  
}

@media (max-width: 768px) {
  .card-wrapper {
    margin-top: 40vh;
  }
}
</style>
