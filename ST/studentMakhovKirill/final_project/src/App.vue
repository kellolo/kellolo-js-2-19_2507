<template>
  <div id="app">
    <header_ ref="head" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view @add="addItem" />
	 <subscribe />
	 <foot />
    <copyright />
  </div>
</template>

<script>
import foot from "./components/footer.vue";
import copyright from "./components/copyright.vue";
import header_ from "./components/header.vue";
import subscribe from "./components/subscribe.vue";
export default {
  components: {
    foot,
    copyright,
	 header_,
	 subscribe
  },
  methods: {
    parentGet(url) {
      return fetch(url).then((d) => d.json());
    },
    addItem(item) {
      this.$refs.head.add(item);
    },
  },
};
</script>

<style>
</style>
