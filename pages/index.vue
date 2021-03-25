<template>
  
    <div class="cards-wrapper">
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
.cards-wrapper {
  boxrder: solid 5px red;
  /* margin-top:19vh; */
  width:auto;
  overflow-x: auto;
  overflow-y: hidden;
  height: 79vh; 
}

@media (max-width: 768px) {
  .cards-wrapper {
    /* margin-top:30vh; */
    height: 70vh; 
  } 
}
</style>
