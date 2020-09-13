<template>
  <div class="container-fluid container-fluid--grey">
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="container row d-flex justify-content-center">
        <div class="carousel-inner col-7">
          <div class="carousel-item active" data-interval="10000">
            <img
              src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/Slide1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/Slide1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/Slide1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true">
          <i class="fas fa-angle-left"></i>
        </span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true">
          <i class="fas fa-angle-right"></i>
        </span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>