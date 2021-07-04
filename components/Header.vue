<template>
  <div class="header">
    <nuxt-link to="/">Playground</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.header {
  font-family: 'Russo One', 'Noto Sans JP';
  font-weight: 700;
  width: 100%;
  height: 5vh;
  padding-top: 1vh;
  background-color: black;
  text-align: center;
  color: #fff;
  a {
    text-decoration-line: none;
    color: rgb(202, 202, 202);
    &:visited {
      color: rgb(202, 202, 202);
    }
  }
}
</style>
