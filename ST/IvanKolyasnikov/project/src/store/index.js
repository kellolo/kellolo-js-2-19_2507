import Vue from 'vue'
import Vuex from 'vuex'
import { get, put, del, post } from "../utils/reqs.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    itemsFiltered: [],
    itemsBasket: [],
    basketSum: null,
    basketURL: "/api/basket",
    catalogUrl: "/api/catalog",
    qItemPages: 6,
    priceFilter: {
      min: 0,
      max: 1000
    }
  },

  mutations: {

    getCatalog(state) {
        get(state.catalogUrl)
        .then(items => {
            items.map(item => item.quantity = 1)
            state.items = [...items];
            state.itemsFiltered = [...state.items];
        });
    },

    filterItem(state, priceFilter = {min: 100, max: 1000}) {
      state.itemsFiltered = [...state.items];
      state.itemsFiltered = state.itemsFiltered
          .filter(item => priceFilter.min <= +item.price && +item.price <= priceFilter.max)
    },


    getCart(state) {
      get(state.basketURL).then((basket) => {
        state.itemsBasket = basket.contents;
      });
    },

    countingGoods(state) {
      state.basketSum = null;
      state.itemsBasket.forEach((item) => (state.basketSum += +item.price * +item.quantity));
    },

    add(state, {item, count=1, size=item.size[0], color=item.color[0]}) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      if (!find) {
          let newItem = Object.assign({}, item, {quantity: count, size: size, color: color});
          post(state.basketURL, newItem).then((res) => {
          if (res.status) {
            state.itemsBasket.push(newItem);
          } else {
              console.log("Server err");
          }
          });
      } else {
          put(`${state.basketURL}/${item.id}`, count, size, color).then((res) => {
          if (res.status) {
              find.quantity += count;
              find.size = size;
              find.color = color;
          } else {
              console.log("Server err");
          }
          });
      }
    },

    remove(state, {item, size, color}) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      if (find.quantity > 1) {
          put(`${state.basketURL}/${item.id}`, -1, size, color).then((res) => {
          if (res.status) {
              find.quantity--;
              find.size = size;
              find.color = color;
          } else {
              console.log("Server err");
          }
          });
      } else {
          del(`${state.basketURL}/${item.id}`).then((res) => {
          if (res.status) {
            state.itemsBasket.splice(state.itemsBasket.indexOf(find), 1);
          } else {
              console.log("Server err");
          }
          });
      }
    },

    quantity(state, {item, count, size=item.size[0], color=item.color[0]}) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      put(`${state.basketURL}/${item.id}`, count, size, color).then((res) => {
        if (res.status) {
            find.quantity += count;
            find.size = size;
            find.color = color;
        } else {
            console.log("Server err");
        }
      })
    },

    tolalQuantity(state, {item, quantity}) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      put(`${state.basketURL}/${item.id}`, quantity).then((res) => {
        if (res.status) {
            find.quantity = quantity;
        } else {
            console.log("Server err");
        }
      })
    },

    dell(state, item) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      del(`${state.basketURL}/${item.id}`).then((res) => {
          if (res.status) {
            state.itemsBasket.splice(state.itemsBasket.indexOf(find), 1);
          } else {
              console.log("Server err");
          }
          })
  }
  },
  actions: {
  },
  modules: {
  }
})
