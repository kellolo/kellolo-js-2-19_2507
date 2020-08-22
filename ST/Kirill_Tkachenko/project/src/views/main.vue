<template>
<div>
    <header-block />

    <div class="topBanner">
        <div class="container topBannerContent px-sm-0">
            <div class="bgText">
                <a href="#">
                    <div class="topBannerText1">THE BRAND</div>
                </a>
                <a href="#">
                    <div class="topBannerText2">OF LUXERIOUS <span>FASHION</span></div>
                </a>
            </div>
        </div>
    </div>

    <main-block />

    <footer-block />
</div>
</template>

<script>
import HeaderBlock from "../components/Header.vue";
import MainBlock from "../components/Main.vue";
import FooterBlock from "../components/Footer.vue";

export default {
    name: "App",
    components: {
        HeaderBlock,
        MainBlock,
        FooterBlock,
    },
}
</script>

<style>

</style>
