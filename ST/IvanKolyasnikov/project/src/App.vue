<template>
 <div id="app">
        <!-- HEADER -->
        <Header ref="head" />
      
        <div class="headerLine"></div>

        <!-- NAVIGATION -->
        <Navigation />

        <transition name="component-fade" mode="out-in">
            <router-view/>
        </transition>

        <!-- FOOTER -->
        <Footer />

    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Navigation,
    Footer,
  },

};
</script>

<style lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
