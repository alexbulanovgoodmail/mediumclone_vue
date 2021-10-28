import {createStore} from 'vuex';
import auth from '@/store/modules/auth';
import feed from '@/store/modules/feed';
import article from '@/store/modules/article';
import popularTags from '@/store/modules/popularTags';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    article,
    popularTags,
  },
});
