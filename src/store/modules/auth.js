const state = {
  isSubmitting: false,
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
  },
};

const actions = {};

export default {
  state,
  actions,
  mutations,
};
