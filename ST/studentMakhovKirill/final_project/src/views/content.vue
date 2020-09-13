<template>
  <div class="content">
    <topBanner />
    <offers />
    <featuredItems />
    <offerWomen />
  </div>
</template>

<script>
import featuredItems from "../components/featuredItems.vue";
import topBanner from "../components/topBanner.vue";
import offers from "../components/offers.vue";
import offerWomen from "../components/offerWomen.vue";
export default {
  components: {
    topBanner,
    offers,
    offerWomen,
    featuredItems,
  },
};
</script>

<style>
</style>