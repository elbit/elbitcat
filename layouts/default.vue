<template>
  <div>
    <div class="header-container">
      <Header />
    </div>
    <div class="content-container">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  /* font-display:  subpixel-antialiased; */
  /* font-smooth: antialiased; */
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

body {
  height: 100vh;
  border: 10px solid rebeccapurple;
  position:absolute;
  width: 100%;

  /* overflow: hidden; */
  height: -webkit-fill-available;
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

img,
svg {
  max-width: 100%;
  /* max-height: 100%; */
}

</style>
