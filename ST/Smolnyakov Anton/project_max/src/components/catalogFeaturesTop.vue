<template>
    <div>
    <div class="d-flex productFeaturesAll" id="catalogFeaturesTop">
        <div class="productFeaturesPattern no-gutters">
            <div class="productFeaturesTitle">Trending now</div>
            <div class="productFeatures row col-12 no-gutters pt-2">
                <a href="#" class="col-5 border-right">Bohemian</a>
                <a href="#" class="col-4 border-right pl-3">Floral</a>
                <a href="#" class="col-3 pl-3">Lace</a>
                <a href="#" class="col-3 border-right">Floral </a>
                <a href="#" class="col-4 border-right pl-3">Lace</a>
                <a href="#" class="col-5 pl-3">Bohemian</a>
            </div>
        </div>
        <div class="productFeaturesSize no-gutters">
            <div class="productFeaturesTitle">Size</div>

            <form class="productSizes row col-12 no-gutters pt-2">
                <div class="col-3 productFeatures">
                    <input type="checkbox" name="size">
                    <label for="size">xxs</label>
                </div>
                <div class="col-3 productFeatures pl-lg-2">
                    <input type="checkbox" name="size">
                    <label for="size">xs</label>
                </div>
                <div class="col-3 productFeatures pl-lg-2">
                    <input type="checkbox" name="size">
                    <label for="size">s</label>
                </div>
                <div class="col-3 productFeatures">
                    <input type="checkbox" name="size">
                    <label for="size">m</label>
                </div>
                <div class="col-3 productFeatures">
                    <input type="checkbox" name="size">
                    <label for="size">l</label>
                </div>
                <div class="col-3 productFeatures pl-lg-2">
                    <input type="checkbox" name="size">
                    <label for="size">xl</label>
                </div>
                <div class="col-3 productFeatures ml-lg-2">
                    <input type="checkbox" name="size">
                    <label for="size">xxl</label>
                </div>
            </form>
        </div>
        <div class="productFeaturesPrice">
            <form>
                <div class="form-group productFeaturesTitle mb-0">
                    <label for="formControlRange">Price</label>
                    <input type="range" class="form-control-range" id="formControlRange">
                </div>
            </form>
        </div>
    </div>
    <div class="d-flex">
        <div class="w-100 mt-4 sortBy d-flex justify-content-around justify-content-md-start">
            <form class="py-3">
                <label class="px-2 ml-3 mb-0" for="sortBy">Sort By</label>
                <select class="sortBy">
                    <option selected>Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </form>
            <form class="py-3">
                <label class="px-2 ml-3 mb-0" for="sortBy">Show</label>
                <select class="sortBy">
                    <option selected>09</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </form>
        </div>
    </div>
   </div>
</template>

<script>

</script>

<style scoped>

</style>