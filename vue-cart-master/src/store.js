import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [
      {
        name: 'Harry Potter : Philosopher\'s stone',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Harry Potter : Chamber of Secrets',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },{
        name: 'Harry Potter : Prisoner of Azkaban',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Prisoner_of_azkaban_UK_poster.jpg/220px-Prisoner_of_azkaban_UK_poster.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },{
        name: 'Harry Potter : Goblet of Fire',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg/220px-Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },{
        name: 'Harry Potter : Order of the Phoenix',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg/220px-Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },{
        name: 'Harry Potter : Half-Blood Prince',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg/220px-Harry_Potter_and_the_Half-Blood_Prince_poster.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },{
        name: 'Harry Potter : Dealthy Hallows',
        price: 100,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg/220px-Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.notebooks,
    getAllProducts: state => state.notebooks,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
