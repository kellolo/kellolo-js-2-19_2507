<template>
  <div class="container container-none">
    <div class="row">
      <aside class="col-3">
        <div class="accordion accordion-my" id="accordionExample">
          <div class="card card-my">
            <div class="card-header card-header-my" id="headingOne">
              <div class="card-header__line card-header-my__line"></div>
              <h2 class="mb-0">
                <button
                  class="text-uppercase btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse collapse-my"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >Category</button>
              </h2>
              <i class="fas fa-caret-down"></i>
            </div>
            <div
              id="collapseOne"
              class="collapse collapse-my show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body card-body-my">
                <a href="#">Accessories</a>
                <a href="#">Bags</a>
                <a href="#">Denim</a>
                <a href="#">Hoodies & Sweatshirts</a>
                <a href="#">Jackets & Coats</a>
                <a href="#">Pants</a>
                <a href="#">Polos</a>
                <a href="#">Shirts</a>
                <a href="#">Shoes</a>
                <a href="#">Shorts</a>
                <a href="#">Sweaters & Knits</a>
                <a href="#">T-Shirts</a>
                <a href="#">Tanks</a>
              </div>
            </div>
          </div>
          <div class="card card-my">
            <div class="card-header card-header-my" id="headingTwo">
              <div class="card-header__line card-header-my__line"></div>
              <h2 class="mb-0">
                <button
                  class="text-uppercase btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >BRAND</button>
              </h2>
              <i class="fas fa-caret-down"></i>
            </div>
            <div
              id="collapseTwo"
              class="collapse collapse-my"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body card-body-my">
                <a href="#">Accessories</a>
                <a href="#">Bags</a>
                <a href="#">Denim</a>
                <a href="#">Hoodies & Sweatshirts</a>
                <a href="#">Jackets & Coats</a>
                <a href="#">Pants</a>
                <a href="#">Polos</a>
                <a href="#">Shirts</a>
                <a href="#">Shoes</a>
                <a href="#">Shorts</a>
                <a href="#">Sweaters & Knits</a>
                <a href="#">T-Shirts</a>
                <a href="#">Tanks</a>
              </div>
            </div>
          </div>
          <div class="card card-my">
            <div class="card-header card-header-my" id="headingThree">
              <div class="card-header__line card-header-my__line"></div>
              <h2 class="mb-0">
                <button
                  class="text-uppercase btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  dESIGNER
                  <i class="fas fa-caret-down suka"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse collapse-my"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body card-body-my">
                <a href="#">Accessories</a>
                <a href="#">Bags</a>
                <a href="#">Denim</a>
                <a href="#">Hoodies & Sweatshirts</a>
                <a href="#">Jackets & Coats</a>
                <a href="#">Pants</a>
                <a href="#">Polos</a>
                <a href="#">Shirts</a>
                <a href="#">Shoes</a>
                <a href="#">Shorts</a>
                <a href="#">Sweaters & Knits</a>
                <a href="#">T-Shirts</a>
                <a href="#">Tanks</a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main class="col-9">
        <div class="sort-nav">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="product-head">
              <div class="col">
                <h3 class="product-head__text product-head__text--bold">Trending now</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item product-head__particle">
                      <a class="product-head__text" href="#">Bohemian</a>
                    </li>
                    <li class="breadcrumb-item product-head__particle">
                      <a class="product-head__text" href="#">Floral</a>
                    </li>
                    <li class="breadcrumb-item product-head__particle">
                      <a class="product-head__text" href="#">Lace</a>
                    </li>
                    <li class="breadcrumb-item product-head__particle">
                      <a class="product-head__text" href="#">Lace</a>
                    </li>
                    <li class="breadcrumb-item product-head__particle">
                      <a class="product-head__text" href="#">Floral</a>
                    </li>
                    <li class="breadcrumb-item product-head__particle">
                      <a class="product-head__text" href="#">Bohemian</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="col">
                <h3 class="product-head__text product-head__text--bold">Size</h3>
                <form class="product-head__form row">
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox1">XXS</label>
                  </div>
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox2">XS</label>
                  </div>
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox3">S</label>
                  </div>
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox4"
                      value="option4"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox4">M</label>
                  </div>
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox5"
                      value="option5"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox5">L</label>
                  </div>
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox6"
                      value="option6"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox6">XL</label>
                  </div>
                  <div class="form-check form-check-inline product-head__particle col-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox7"
                      value="option7"
                    />
                    <label class="form-check-label product-head__text" for="inlineCheckbox7">XXL</label>
                  </div>
                </form>
              </div>
              <div class="col">
                <h3 class="product-head__text product-head__text--bold">Price</h3>
                <form>
                  <div class="form-group product-head__particle">
                    <input type="range" class="form-control-range" id="formControlRange" />
                  </div>
                </form>
                <div class="d-flex justify-content-between product-head__particle">
                  <div class="product-head__text">$52</div>
                  <div class="product-head__text">$400</div>
                </div>
              </div>
            </div>
          </div>
          <nav class="navbar navbar-light">
            <form class="sort__form">
              <div class="sort__text">Sort By</div>
              <div class="sort__select-wrap">
                <div class="sort__select-side">
                  <i class="fas fa-caret-down"></i>
                </div>
                <select class="sort__text sort__select">
                  <option selected>Name</option>
                  <option>Price</option>
                </select>
              </div>
              <div class="sort__text">Show</div>
              <div class="sort__select-wrap">
                <div class="sort__select-side">
                  <i class="fas fa-caret-down"></i>
                </div>
                <select class="sort__text sort__select">
                  <option selected>09</option>
                  <option>18</option>
                  <option>28</option>
                  <option>37</option>
                </select>
              </div>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div class="row product-head">
          <div class="col">
            <h3 class="product-head__text product-head__text--bold">Trending now</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item product-head__particle">
                  <a class="product-head__text" href="#">Bohemian</a>
                </li>
                <li class="breadcrumb-item product-head__particle">
                  <a class="product-head__text" href="#">Floral</a>
                </li>
                <li class="breadcrumb-item product-head__particle">
                  <a class="product-head__text" href="#">Lace</a>
                </li>
                <li class="breadcrumb-item product-head__particle">
                  <a class="product-head__text" href="#">Lace</a>
                </li>
                <li class="breadcrumb-item product-head__particle">
                  <a class="product-head__text" href="#">Floral</a>
                </li>
                <li class="breadcrumb-item product-head__particle">
                  <a class="product-head__text" href="#">Bohemian</a>
                </li>
              </ol>
            </nav>
          </div>
          <div class="col">
            <h3 class="product-head__text product-head__text--bold">Size</h3>
            <form class="product-head__form row">
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox1">XXS</label>
              </div>
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox2">XS</label>
              </div>
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox3">S</label>
              </div>
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox4"
                  value="option4"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox4">M</label>
              </div>
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox5"
                  value="option5"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox5">L</label>
              </div>
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox6"
                  value="option6"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox6">XL</label>
              </div>
              <div class="form-check form-check-inline product-head__particle col-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox7"
                  value="option7"
                />
                <label class="form-check-label product-head__text" for="inlineCheckbox7">XXL</label>
              </div>
            </form>
          </div>
          <div class="col">
            <h3 class="product-head__text product-head__text--bold">Price</h3>
            <form>
              <div class="form-group product-head__particle">
                <input type="range" class="form-control-range" id="formControlRange" />
              </div>
            </form>
            <div class="d-flex justify-content-between product-head__particle">
              <div class="product-head__text">$52</div>
              <div class="product-head__text">$400</div>
            </div>
          </div>
        </div>
        <div class="sort">
          <form class="sort__form">
            <div class="sort__text">Sort By</div>
            <div class="sort__select-wrap">
              <div class="sort__select-side">
                <i class="fas fa-caret-down"></i>
              </div>
              <select class="sort__text sort__select">
                <option selected>Name</option>
                <option>Price</option>
              </select>
            </div>
            <div class="sort__text">Show</div>
            <div class="sort__select-wrap">
              <div class="sort__select-side">
                <i class="fas fa-caret-down"></i>
              </div>
              <select class="sort__text sort__select">
                <option selected>09</option>
                <option>18</option>
                <option>28</option>
                <option>37</option>
              </select>
            </div>
          </form>
        </div>
         <div class="products d-flex flex-wrap justify-content-between">
				<item 
					v-for="item of items" 
					:key="item.id"
					:item="item"
					class="products__item"
				/>
 			</div>
        <div class="product-bottom row">
          <div class="col-4">
            <div class="product-bottom__crumb">
              <a href="#">
                <i class="fas fa-angle-left"></i>
              </a>
              <a class="product-bottom__a-active" href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <div>
                <a href="#">6</a>
                <a href="#">.....</a>
                <a href="#">20</a>
              </div>
              <a class="product-bottom__a-active" href="#">
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary">View All</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/reqs.js';

export default {
	components: { item },
	data() {
		return {
			// url: 'https://raw.githubusercontent.com/K-Real-Mh/Static/master/JSON/catalog.json',
			url: '/api/catalog',
			items: []
		}
	},
	mounted() {
		get(this.url)
		.then(d => { this.items = d })
	},
};
</script>

<style>
</style>