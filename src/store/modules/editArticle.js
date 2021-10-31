import articleApi from '@/api/article';

const state = {
  validationErrors: null,
  isSubmitting: false,
  isLoading: false,
  article: null,
};

export const mutationTypes = {
  updateArticleStart: '[updateArticle] update Article Start',
  updateArticleSuccess: '[updateArticle] update Article Success',
  updateArticleFailure: '[updateArticle] update Article Failure',

  getArticleStart: '[updateArticle] get Article Start',
  getArticleSuccess: '[updateArticle] get Article Success',
  getArticleFailure: '[updateArticle] get Article Failure',
};

export const actionTypes = {
  updateArticle: '[updateArticle] update Article',
  getArticle: '[updateArticle] get Article',
};

const mutations = {
  [mutationTypes.updateArticleStart](state) {
    state.isSubmitting = true;
  },
  [mutationTypes.updateArticleSuccess](state) {
    state.isSubmitting = false;
  },
  [mutationTypes.updateArticleFailure](state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },

  [mutationTypes.getArticleStart](state) {
    state.isLoading = true;
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false;
    state.article = payload;
  },
  [mutationTypes.getArticleFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.updateArticle](context, {slug, articleInput}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.updateArticleStart);
      articleApi
        .updateArticle(slug, articleInput)
        .then(article => {
          context.commit(mutationTypes.updateArticleSuccess, article);
          resolve(article);
        })
        .catch(result => {
          context.commit(
            mutationTypes.updateArticleFailure,
            result.response.data.errors
          );
        });
    });
  },
  [actionTypes.getArticle](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getArticleStart);
      articleApi
        .getArticle(slug)
        .then(article => {
          context.commit(mutationTypes.getArticleSuccess, article);
          resolve(article);
        })
        .catch(() => {
          context.commit(mutationTypes.getArticleFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
