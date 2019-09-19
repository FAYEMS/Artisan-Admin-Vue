// initial state
const state = {
  count: 0,
};

// getters
const getters = {
  getDoubleCount() {
    return state.count + 2;
  },
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
