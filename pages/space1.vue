<template>
  <div class="container">
    <Header></Header>
    <div id="menu">
      <div v-for="hero in heroes" :key="hero.id" class="menu-item">
        <nuxt-link v-scroll-to="'#' + hero.title" to>
          {{ hero.title }}
        </nuxt-link>
      </div>
    </div>
    <div id="heroes">
      <div v-for="hero in heroes" :id="hero.title" :key="hero.id" class="hero">
        <div class="hero-text">
          <div class="title">{{ hero.title }}</div>
          <div class="detail">{{ hero.detail }}</div>
        </div>
        <img class="hero-image" :src="hero.image" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroes: [
        {
          id: 1,
          title: 'Dog',
          detail: '「ワン」と吠えるかわいい生き物',
          image: '/images/space1/dog.jpg',
        },
        {
          id: 2,
          title: 'Cat',
          detail: '「ニャン」と鳴くかわいい生き物',
          image: '/images/space1/cat.jpg',
        },
        {
          id: 3,
          title: 'Monkey',
          detail: '「ウキー」と叫ぶかわいい生き物',
          image: '/images/space1/monkey.jpg',
        },
        {
          id: 4,
          title: 'Alligator',
          detail: '「ゴロロロ」と鳴くかわいい生き物',
          image: '/images/space1/alligator.jpg',
        },
        {
          id: 5,
          title: 'Lion',
          detail: '「ガオー」と叫ぶかわいい百獣王',
          image: '/images/space1/lion.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#menu {
  position: fixed;
  top: 10vh;
  right: 5vw;
  z-index: 3;
  background-color: #00000023;
  padding: 20px 10px;
  .menu-item {
    font-size: 1.5rem;
    font-family: 'Noto Sans JP';
    text-align: right;
    font-weight: 300;
    a {
      color: #fff;
      text-decoration-line: blink;
      &:visited {
        color: #fff;
      }
    }
  }
}
.hero {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  .hero-image {
    z-index: 1;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    max-width: inherit;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hero-text {
    position: absolute;
    top: 50vh;
    z-index: 2;
    font-family: 'Noto Sans JP';
    font-weight: 700;
    text-shadow: 3px 3px 3px #00000073;
    .title {
      margin-left: 3.5vw;
      color: #fff;
      font-size: 4rem;
    }
    .detail {
      margin-left: 3vw;
      color: #fff;
      font-size: 1.5rem;
    }
  }
}
</style>
