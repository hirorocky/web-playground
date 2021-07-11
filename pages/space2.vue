<template>
  <div class="container">
    <Header></Header>
    <div class="background"></div>
    <div id="content">
      <div class="item">
        <div class="item-text">
          <div class="title">水族館</div>
          <div class="detail">どんな生き物がいるのかな？</div>
        </div>
      </div>

      <div
        v-for="item in items"
        :id="item.title"
        :key="item.id"
        class="item"
        data-aos="fade-down"
        data-aos-anchor-placement="top-center"
      >
        <kinesis-container>
          <kinesis-element :strength="30">
            <img class="item-image" :src="item.image" />
          </kinesis-element>
        </kinesis-container>
        <kinesis-container>
          <kinesis-element :strength="10" type="rotate">
            <div class="item-text">
              <div class="title">{{ item.title }}</div>
              <div class="detail">{{ item.detail }}</div>
            </div>
          </kinesis-element>
        </kinesis-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'キハダマグロ',
          detail: '泳がないと生きられない',
          image: '/web-playground/space2/tuna.png',
        },
        {
          id: 2,
          title: 'トラフグ',
          detail: '解毒してから食べましょう',
          image: '/web-playground/space2/fugu.png',
        },
        {
          id: 3,
          title: 'ヤリイカ',
          detail: '一夜干しおいしい',
          image: '/web-playground/space2/squid.png',
        },
        {
          id: 4,
          title: '毛ガニ',
          detail: '無言で食べましょう',
          image: '/web-playground/space2/crab.png',
        },
        {
          id: 5,
          title: 'ムラサキウニ',
          detail: 'とげとげ痛い',
          image: '/web-playground/space2/urchin.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#content {
  display: flex;
  flex-direction: column;
  grid-row-gap: 30vh;
  background-color: rgb(61, 101, 155);
  text-align: center;
  min-height: 100vh;
  padding: 50vh 0;
}
.item {
  .item-image {
    width: auto;
    height: auto;
    max-width: 25%;
  }
  .item-text {
    font-family: 'Noto Sans JP';
    font-weight: 700;
    text-shadow: 3px 3px 3px #00000073;
    .title {
      color: #fff;
      font-size: 2rem;
    }
    .detail {
      color: #fff;
      font-size: 1rem;
    }
  }
}
</style>
