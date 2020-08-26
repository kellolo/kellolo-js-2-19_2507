<template>
    <div>
        <div class="row row-cols-3" id="catalog">
    <!--        CATALOG ITEMS HERE-->
            <item v-for="item of items"
                  :key="item.id"
                  :item="item"
            />
        </div>
        <div class="d-flex flex-column align-items-center justify-content-around mt-5 flex-sm-row justify-content-sm-between">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">20</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <button type="button" class="productsButton mt-4 mt-sm-0">View all</button>
        </div>
    </div>
</template>

<script>
    import item from './item.vue';
    import { get } from "../utils/reqs"
    export default {
        components: { item },
        data() {
            return {
                // url: "https://raw.githubusercontent.com/Smolnyakov/static/master/online-store-api/JSON/catalog.json",
                url: "/api/catalog",
                items: [],
            }
        },

        mounted() {
            get(this.url)
                .then(data => { this.items = data});
        }
    }
</script>

<style scoped>

</style>