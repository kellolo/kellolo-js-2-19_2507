<template>
<div>
  <arrivals />

  <shop />

  <productoffer />

</div>
</template>

<script>
import arrivals from '../components/arrivals'
import shop from '../components/shop'
import productoffer from '../components/productoffer'
export default {
    components: {
        'arrivals': arrivals,
        'shop': shop,
        'productoffer': productoffer,
    },
}
</script>

<style>

</style>