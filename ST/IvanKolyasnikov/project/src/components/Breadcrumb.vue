<template>
    <nav aria-label="breadcrumb" class="container">
        <div class="news row flex-column flex-sm-row container justify-content-between  align-items-center pt-5 pb-5 mx-0">
            <div class="newsAr">
                <h2>news arrivals</h2>
            </div>
            <ol aria-label="breadcrumb" class="newsNav d-flex">
                <li class="breadcrumb-item newsNavlink"> <router-link :to="{name: 'Index'}">Home</router-link></li>
                <li class="breadcrumb-item newsNavlink">Men</li>
                <li class="breadcrumb-item active newsNavLinkActive" aria-current="page">news arrivals</li>
            </ol>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Breadcrubm'
}
</script>

<style>

</style>