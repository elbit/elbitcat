<template>
  <div class="container">
    <div>
      
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi illum quos accusamus quis delectus voluptate, quibusdam est? Totam, voluptatem delectus distinctio temporibus quas ex sit illum dolore vero ut dolor debitis culpa aperiam minima quod fugiat iusto nobis? Optio ipsa labore, earum doloribus quam dolorem quis sit dicta eveniet quasi! Assumenda cum aliquid sequi deserunt iusto? Impedit, consequatur reiciendis aliquid, optio alias numquam iusto distinctio expedita, saepe atque qui blanditiis officia perspiciatis beatae sequi consectetur debitis quis a architecto adipisci. Deleniti qui unde ex, iure amet neque tempora voluptatum, officia illo totam id minus harum? Dolorem placeat aperiam natus quasi corrupti nam nemo reprehenderit libero quibusdam? Placeat id laborum, cupiditate sint perferendis rem architecto voluptas nisi modi nihil reprehenderit error nostrum, amet veritatis voluptates hic labore debitis sapiente repellat facilis eaque. Quia, facere. At velit recusandae minus, ea culpa tempora obcaecati neque possimus ratione consequatur aliquam esse! Adipisci aliquid perspiciatis placeat, tempore eius pariatur animi deleniti! Quibusdam eligendi dolor repellat minima? Obcaecati velit necessitatibus blanditiis perferendis. Suscipit corporis ut, omnis ducimus dolor placeat similique aut quaerat quasi voluptatem reiciendis possimus odit ullam. Iusto excepturi laborum omnis eaque aut? Hic nisi tempore sequi autem et incidunt magnam sunt id nobis aliquam accusantium porro qui blanditiis, beatae natus illum error aut asperiores reprehenderit quae! Ab quo quam iste accusantium, doloribus laudantium architecto assumenda alias iusto nostrum numquam tempora maxime velit consectetur rerum rem totam, harum tenetur eos incidunt doloremque possimus saepe nam. Perspiciatis optio a ipsum temporibus consequatur odit quas laboriosam ullam ducimus maxime in pariatur, aspernatur rem vel repellendus aperiam quo blanditiis nemo deleniti, architecto dicta harum, molestiae sint ab? Optio quae eaque, aliquam harum perspiciatis nihil libero blanditiis dolorum possimus aut similique ex, eius ratione impedit illo necessitatibus eos numquam debitis cum. Natus ipsa cum, accusamus modi nostrum repellat veritatis fuga maiores illo accusantium cupiditate officia quis vitae culpa molestias labore aliquam quisquam perferendis voluptates aliquid ipsum voluptatem aperiam iste unde. Sunt fuga animi provident, quis tenetur eos omnis vel totam blanditiis corrupti id sed pariatur qui maiores doloribus recusandae eveniet? Beatae facilis itaque deleniti nulla impedit. Magni reprehenderit esse minus placeat alias? Accusamus quod ducimus nemo pariatur mollitia ea dolorum neque possimus ex dignissimos! Asperiores provident ipsam dolore odio, odit libero eos soluta facere quidem suscipit, totam saepe corrupti voluptas iste velit tempora incidunt. Repellendus debitis excepturi sequi iste voluptate possimus eaque labore, beatae cupiditate cum eligendi, laboriosam illum.
      

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
