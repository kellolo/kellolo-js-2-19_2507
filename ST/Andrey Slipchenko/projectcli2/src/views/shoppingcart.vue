<template>
<div>
    <arrivals />
    
    <shopping />
</div>
</template>

<script>
import arrivals from '../components/arrivals'
import shopping from '../components/shopping'
export default {
    components: {
        'arrivals': arrivals,
        'shopping': shopping,
    },
}
</script>

<style>

</style>