<template>
  <div>
    <header_ />
    <content_ />
    <foot />
    <copyright />
  </div>
</template>

<script>
import catalog from '../components/catalog.vue';
import foot from '../components/footer.vue';
import copyright from '../components/copyright.vue';
import header_ from '../components/header.vue';
import content_ from '../components/content.vue';
export default {
	components: {
		catalog,
		foot,
		copyright,
		header_,
		content_
	},
	methods: {
		parentGet(url) {
			return fetch(url).then(d => d.json())
		}
	}
};
</script>

<style>
</style>