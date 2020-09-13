<template>
  <div class="product-description-wrapper">
    <div class="product-description container">
      <div class="row">
        <div class="col-md-9 col-lg-6 mx-auto p-0">
          <div class="product-description__head mx-auto">
            <div
              class="product-description__text product-description__text--pink mx-auto text-center text-uppercase"
            >WOMEN COLLECTION</div>
            <h2 class="mt-3 mx-auto text-center text-uppercase">Moschino Cheap And Chic</h2>
            <p class="text-center">
              Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures before cutting-edge
              services. Completely visualize parallel core competencies rather than exceptional portals.
            </p>
            <div class="d-flex justify-content-center text-uppercase row">
              <div class="product-description__text">
                <span>material:</span>cotton
              </div>
              <div class="ml-5 product-description__text">
                <span>designer:</span>binburhan
              </div>
            </div>
            <div class="product-description__price text-center">$561</div>
          </div>
          <form action class="product-description__form pr-5 pl-5 mx-auto">
            <div class="form-row d-flex justify-content-between">
              <div class="div">
                <label class="product-description__text text-uppercase" for="color">CHOOSE COLOR</label>
                <select class="form-control text-muted" id="color">
                  <option>Red</option>
                  <option>Red</option>
                  <option>Red</option>
                </select>
              </div>
              <div class="div">
                <label class="product-description__text text-uppercase" for="size">CHOOSE SIZE</label>
                <select class="form-control text-muted" id="size">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div class="div">
                <label class="product-description__text text-uppercase" for="quantity">QUANTITY</label>
                <input type="text" class="form-control text-muted" placeholder="2" id="quantity" />
              </div>
            </div>
            <button type="button" class="btn-block btn btn-outline-primary">
              <img src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/cart-pink.png" alt />Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>