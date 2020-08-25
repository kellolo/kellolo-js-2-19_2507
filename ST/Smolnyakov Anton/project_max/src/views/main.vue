<template>
    <div>
        <!-- HEADER HERE-->
        <header_  ref="header"/>
        <div class="headerLine"></div>

        <!--NAVIGATION TOP HERE-->
        <navTop />

        <!--NEW ARRIVALS HERE-->
        <newArr />

        <main>
            <div class="container my-5 pb-0 pb-lg-5 px-0">
                <div class="d-flex justify-content-between">
                    <!--DETAILS HERE-->
                    <details_ />

                    <div class="catalogAll d-flex flex-column">
                        <!--CATALOG FEATURES HERE-->
                        <catalogFeaturesTop />

                        <!--CATALOG HERE-->
                        <catalog @add="addItem"/>

                        <!--CATALOG PAGINATION HERE-->
                        <catalogPagination />
                    </div>
                </div>
            </div>

            <!--PRODUCTS FEATURES-->
            <productsFeatures />
        </main>

        <!--SUBSCRIBE HERE-->
        <subscribe />

        <!--FOOTER HERE-->
        <footerB />

        <!--COPYRIGHTS HERE-->
        <copyrights />
    </div>
</template>

<script>
    import header from "../components/header.vue";
    import navTop from "../components/navTop.vue";
    import newArr from "../components/newArr.vue";
    import details from "../components/details.vue";
    import catalogFeaturesTop from "../components/catalogFeaturesTop.vue"
    import catalog from "../components/catalog.vue";
    import catalogPagination from "../components/catalogPagination.vue"
    import productsFeatures from "../components/productsFeatures.vue";
    import subscribe from "../components/subscribe.vue";
    import footer from "../components/footer.vue";
    import copyrights from "../components/copyrights.vue";

    export default {

        components: {
            'header_': header,
            'navTop': navTop,
            'newArr': newArr,
            'details_': details,
            'catalogFeaturesTop': catalogFeaturesTop,
            'catalog': catalog,
            'catalogPagination': catalogPagination,
            'productsFeatures': productsFeatures,
            'subscribe': subscribe,
            'footerB': footer,
            'copyrights': copyrights,
        },

        methods: {
            parentGet(url) {
                return fetch(url)
                    .then(data => data.json());
            },

            addItem(item) {
                this.$refs.header.$refs.cart.add(item)
            }
        },

        mounted() {
            console.log(this.$refs.header.$refs)
        }
    }
</script>

<style scoped>

</style>