import {createStore} from 'vuex';

export const store = createStore({
  // namespaced: true,
  state: {
    details:[],
    favs:[]
  },
  mutations: {
    setDetails(state, detail){
      state.details = detail;
    },
    setFavs(state, fav){
      state.favs.push(fav);
    },
    removeFav(state, pokemon){
      state.favs = state.favs.filter((item) => item.name !== pokemon.name);
    }
  }
});