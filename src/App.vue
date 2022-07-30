<template>
  <div class="container">
    <keep-alive>
      <HomePage
        v-if="page == 'home'"
        @countA="addCount"
        :count="count"
      ></HomePage>
    </keep-alive>
    <keep-alive>
      <FavoritePage
        v-if="page == 'favorite'"
        @countA="addCount"
        :count="count"
      ></FavoritePage>
    </keep-alive>
    <keep-alive>
      <CardPage v-if="page == 'cart'"></CardPage>
    </keep-alive>
    <keep-alive>
      <OrderPage v-if="page == 'order'"></OrderPage>
    </keep-alive>
    <UserPage v-if="page == 'user'"></UserPage>
  </div>

  <NavBar @nav-change="nav" :page="page" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import FavoritePage from "./components/FavoritePage.vue";
import CardPage from "./components/CardPage.vue";
import OrderPage from "./components/OrderPage.vue";
import UserPage from "./components/UserPage.vue";
import { haptic } from "./assets/js/nativeFunc.js";
export default {
  data() {
    return {
      page: "home",
      count: 0,
    };
  },
  components: {
    NavBar,
    HomePage,
    FavoritePage,
    CardPage,
    OrderPage,
    UserPage,
  },
  methods: {
    nav(page) {
      haptic.select();
      this.page = page;
    },
    addCount() {
      this.count++;
    },
  },
};
</script>

<style>
html {
  --primaryBg: #f5f5f5;
  --secondaryBg: white;
  --color1: #fe6e02;
}
@media (prefers-color-scheme: dark) {
  html {
    --primaryBg: #1c1c1e;
    --secondaryBg: #2a2a2a;
  }
}
</style>
