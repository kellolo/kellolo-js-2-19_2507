<template>
    <div>
		<header class="header center">
      <div class="header__left">
        <a href="index.html" class="logo">
          Bran
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
		  <basket v-show="showBasket" />
		  </div>
        </div>
      </div>
    </header>
    <input id="switcher" type="checkbox" />
    <label class="open" for="switcher">
      <i class="fas fa-bars"></i>
    </label>
    <nav class="nav center">
      <ul class="menu">
        <li class="menu__list">
          <a class="menu__link" href="#">Home</a>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Men</a>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Women</a>
          <div class="menu__drop drop">
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
              </ul>

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
              </ul>
            </div>
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
              </ul>
              <div class="drop__img">
                Super
                <br />sale!
              </div>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Kids</a>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Accoseriese</a>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Featured</a>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Hot Deals</a>
        </li>
      </ul>
      <label class="close" for="switcher">
        <i class="far fa-window-close"></i>
      </label>
    </nav>

    <main>
      <div class="blackman">
        <div class="slide center">
          <div class="slide__text">
            <h1 class="slide__h1">THE BRAND</h1>
            <h2 class="slide__h2">
              OF LUXERIOUS
              <span class="slide__span">FASHION</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="offers center">
        <div class="offers__left">
          <div class="offers__item">
            <img
              class="offers__photos"
              src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer1.jpg"
              alt="photo"
            />
            <div class="offers__lable">
              <div class="lable__top">Hot deal</div>
              <div class="lable__down">For men</div>
            </div>
          </div>
          <div class="offers__item">
            <img
              class="offers__photos"
              src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer2.jpg"
              alt="photo"
            />
            <div class="offers__lable">
              <div class="lable__top">LUXIROUS & trendy</div>
              <div class="lable__down">ACCESORIES</div>
            </div>
          </div>
        </div>
        <div class="offers__right">
          <div class="offers__item">
            <img
              class="offers__photos"
              src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer3.jpg"
              alt="photo"
            />
            <div class="offers__lable">
              <div class="lable__top">30% offer</div>
              <div class="lable__down">women</div>
            </div>
          </div>

          <div class="offers__item">
            <img
              class="offers__photos"
              src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer4.jpg"
              alt="photo"
            />
            <div class="offers__lable">
              <div class="lable__top">new arrivals</div>
              <div class="lable__down">FOR kids</div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="fetured center">
          <h2 class="fetured__items">Fetured Items</h2>
          <p class="fetured__text">Shop for items based on what we featured in this week</p>
        </div>
        <catalog />
      </section>
    </main>
    <div class="allBrowse">
      <button class="button allBrowse__button" onclick="document.location='product.html'">
        Browse All Product
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
    <div class="women center">
      <div class="women__left">
        <div class="women__banner">
          <h2 class="banner__offer">
            30%
            <span class="banner__span">OFFER</span>
          </h2>
          <h2 class="banner__for">FOR WOMEN</h2>
        </div>
      </div>
      <div class="women__right">
        <div class="freeDelivery">
          <h2 class="freeD">Free Delivery</h2>
          <p class="worldWide">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with
            extensive models.
          </p>
        </div>
    
        <div class="freeDelivery">
          <h2 class="freeD">Free Delivery</h2>
          <p class="worldWide">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with
            extensive models.
          </p>
        </div>
        <div class="freeDelivery">
          <h2 class="freeD">Free Delivery</h2>
          <p class="worldWide">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with
            extensive models.
          </p>
        </div>
      </div>
    </div>
    <div class="subscribeBlock">
      <div class="subscribe center">
        <div class="subscribe__left">
          <div>
            <img
              class="subscribePhoto"
              src="https://raw.githubusercontent.com/AnastasyaChe/static/master/Layer_41.jpg"
              alt="alt"
            />
          </div>
          <section class="subscribeText">
            <div class="subscribeReview">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a.
              Aliquam
              condimentum mattis neque sed pretium”
            </div>
            <div class="subscribeData">
              <div class="subscribeName">Bin Burhan</div>
              <div class="subscribeCity">Dhaka, Bd</div>
            </div>
          </section>
        </div>
        <div class="subscribe__right">
          <div class="subscText">
            <h2 class="subs1">Subscribe</h2>
            <p class="subs2">For our NEWLETTER AND PROMOTION</p>
          </div>

          <form class="search2">
            <input
              class="subscribeInput"
              name="subscribeInput"
              placeholder="Enter Your Email"
              type="email"
            />
            <button class="subscribeBtn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
	<company />
	<footer class="footerNoborder">
      <div class="footer center">
        <div class="data">&copy; 2017 Brand All Rights Reserved.</div>
        <div class="socialIcons center">
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="icon">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="icon">
            <i class="fab fa-invision"></i>
          </div>
          <div class="icon">
            <i class="fab fa-pinterest-p"></i>
          </div>
          <div class="icon">
            <i class="fab fa-google-plus-g"></i>
          </div>
        </div>
      </div>
    </footer>
	</div>
  
</template>
<script>
import catalog from "../components/catalog.vue";
import basket from "../components/basket.vue";
import company from "../components/company.vue";
export default {
  components: {
    basket,
	catalog, 
	company
  },

  data() {
    return {
      showBasket: false,
    }
  },
  methods: {
	  parentGet(url) {
		  return fetch(url).then(d => d.json())
    }

  }
}
</script>