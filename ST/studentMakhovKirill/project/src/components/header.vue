<template>
  <header class="header">
    <div class="header__header container">
      <div class="logo">
        Bran<span>d</span>
      </div>
      <div class="header__search">
        <form class="header__searchform">
          <button
            type="button"
            class="header__search-browse btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Browse</button>
          <div class="dropdown-menu">
            <a class="dropdown-item disabled text-uppercase" href="#">women</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Dresses</a>
            <a class="dropdown-item" href="#">Tops</a>
            <a class="dropdown-item" href="#">Sweaters/Knits</a>
            <a class="dropdown-item" href="#">Jackets/Coats</a>
            <a class="dropdown-item" href="#">Blazers</a>
            <a class="dropdown-item" href="#">Denim</a>
            <a class="dropdown-item" href="#">Skirts/Shorts</a>
            <a class="dropdown-item" href="#">Accessories</a>
            <a class="dropdown-item disabled text-uppercase" href="#">men</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Tees/Tank tops</a>
            <a class="dropdown-item" href="#">Shirts/Polos</a>
            <a class="dropdown-item" href="#">Sweaters</a>
            <a class="dropdown-item" href="#">Sweatshirts/Hoodies</a>
            <a class="dropdown-item" href="#">Blazers</a>
            <a class="dropdown-item" href="#">Jackets/vests</a>
            <input
              class="header__search-input"
              name="search"
              type="text"
              placeholder="Search for Item..."
            />
            <button class="header__search-buton">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <input
            class="header__search-input"
            name="search"
            type="text"
            placeholder="Search for Item..."
          />
          <button class="header__search-buton">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="header__cart">
        <a href="#" class="header__cart-a">
          <img
            id="hide"
            class="header__cart-img"
            src="https://raw.githubusercontent.com/K-Real-Mh/Static/master/imgs/headerCart.png"
            alt="headerCart"
            @click="showBasket = !showBasket"
          />
        </a>
        <!--BASKETHERE-->
        <basket v-show="showBasket" />
      </div>
      <div class="header__account">
        <button class="header__btn">
          My Account
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    </div>
    <div class="header__line"></div>
    <div class="header__footer">
      <nav class="header__burger navbar navbar-expand-lg navbar-light bg-light text-uppercase">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">Man</a>
              <a class="nav-item nav-link" href="#">Women</a>
              <a class="nav-item nav-link" href="#">Kids</a>
              <a class="nav-item nav-link" href="#">Accoseriese</a>
              <a class="nav-item nav-link" href="#">Featured</a>
              <a class="nav-item nav-link" href="#">Hot Deals</a>
            </div>
          </div>
        </div>
      </nav>
      <nav class="header__nav">
        <a href="#">Home</a>
        <a href="#">Man</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Accoseriese</a>
        <a href="#">Featured</a>
        <a href="#">Hot Deals</a>
      </nav>
    </div>
  </header>
</template>

<script>
import basket from "../components/basket.vue";
export default {
  components: {
    basket,
  },
  data() {
    return {
      showBasket: false,
    };
  },
};
</script>

<style>
</style>