<template>
<div>
    <arrivals />

    <clothes />

    <also />
    <section class="center">
        <catalog @add = "addItem" />
    </section>
</div>
</template>

<script>
import catalog from '../components/catalog'
import arrivals from '../components/arrivals'
import clothes from '../components/clothes'
import also from '../components/also'
export default {
    components: {
        catalog,
        'arrivals': arrivals,
        'clothes': clothes,
        'also': also,
    },
    methods: {
        addItem(item) {
			this.$parent.$refs.bask.add(item);
		}
    },
}
</script>


<style>

</style>