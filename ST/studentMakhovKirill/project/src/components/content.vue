<template>
  <div class="content">
    <topBanner />
    <offers />
    <featuredItems />
    <offerWomen />
    <subscribe />
  </div>
</template>

<script>
import featuredItems from "../components/featuredItems.vue";
import topBanner from "../components/topBanner.vue";
import offers from "../components/offers.vue";
import offerWomen from "../components/offerWomen.vue";
import subscribe from "../components/subscribe.vue";
export default {
  components: {
    topBanner,
    offers,
    offerWomen,
    subscribe,
    featuredItems,
  },
};
</script>

<style>
</style>