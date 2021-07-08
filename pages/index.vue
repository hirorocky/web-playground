<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="menu">
        <div class="links">
          <span
            v-for="menuContent in menuContents"
            :key="menuContent.index"
            class="menu-content"
            @mouseover="changeInfo(menuContent)"
          >
            <nuxt-link :to="menuContent.to">{{
              menuContent.linkText
            }}</nuxt-link>
          </span>
        </div>
      </div>
      <div class="informations">
        <div class="title">Playground</div>
        <div class="menu-info">
          <div class="menu-title">{{ selectedMenuTitle }}</div>
          <div class="menu-detail">{{ selectedMenuDetail }}</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuContents: [
        {
          index: 0,
          to: '/space1',
          linkText: '1',
          title: '動物園',
          detail: '追従するメニューとジャンプ',
        },
      ],
      selectedMenuTitle: '',
      selectedMenuDetail: '',
    }
  },
  methods: {
    changeInfo(menuContent) {
      // console.log(index)
      this.selectedMenuTitle = menuContent.title
      this.selectedMenuDetail = menuContent.detail
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  z-index: -1;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('/web-playground/toppage/bg.svg');
  background-size: cover;
  font-family: 'Russo One', 'Noto Sans JP';
  font-weight: 700;
}

.content {
  flex-grow: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  .menu {
    margin-right: 5vw;
    .menu-content {
      margin-left: 5vw;
      font-size: 1.3rem;
      a {
        color: #377775;
        &:visited {
          color: #377775;
        }
      }
    }
  }

  .informations {
    border-left: 6px solid;
    font-size: 3rem;
    margin-right: 10vw;
    padding-left: 10vw;
    .menu-info {
      font-size: 1rem;
    }
  }
}
</style>
