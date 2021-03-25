<template>
  <div class="">
    <Header />
    <Nuxt />
  </div>
</template>

<style>
html {
/* font-display:  subpixel-antialiased; */
/* font-smooth: antialiased; */
font-family: 'Roboto',sans-serif;
font-weight: 100;
}

body {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

img, svg {
  max-width:100%;
  /* max-height: 100%; */
}
.page-container {
    padding: 2rem;
    padding-top:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* max-width: 1300px; */
    /* max-width: clamp(80%, 50vw, 1900px); */
    margin: 0 auto;
    /* position: relative; */
  }


</style>
