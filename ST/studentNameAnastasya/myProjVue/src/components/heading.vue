<template>
    <div>
        <header class="header center">
      <div class="header__left">
        <a href="index.html" class="logo"><img src="../assets/img/logo.png"> Bran
            <span class="logo__span">d</span>
        </a>
        <form class="search">
          <div class="searchBrowse">
            Browse
            <i class="fas fa-caret-down"></i>
            <div class="searchBrowse__drop drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li>
                    <a class="drop__a" href="#">Dresses</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Tops</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Sweaters/Knits</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Jackets/Coats</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Blazers</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Denim</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Leggings/Pants</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Skirts/Shorts</a>
                  </li>
                  <li>
                    <a class="drop__a" href="#">Accessories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <input name="search" type="text" placeholder="Search for Item..." />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="header__right">
        <img
          id="cart"
          class="header__cart"
          src="https://raw.githubusercontent.com/AnastasyaChe/static/master/cart.png"
          alt="headerCart"
          @click="showBasket = !showBasket"
        />
        
        <div class="button">
          My Account
          <i class="fas fa-caret-down"></i>
		  <div class="button__drop button__drop_drop">
		  <basket v-show="showBasket" ref="bask"/>
		  </div>
        </div>
      </div>
    </header>
    </div>
</template>
<script>
import basket from './basket.vue'
export default {
    components: {basket},
    data() {
    return {
      showBasket: false,
    }
 }, 
  methods: {
	  parentGet(url) {
		  return fetch(url).then(d => d.json())
    }
    
  },
   
};

  

</script>
 