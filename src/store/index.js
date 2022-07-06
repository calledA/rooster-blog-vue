import { createStore } from "vuex";

export default createStore({
  state: {
    token:""
  },
  mutations: {
    setToken(token) {
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})