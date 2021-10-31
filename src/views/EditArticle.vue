<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <mcv-article-form
      v-if="initialValues"
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/editArticle';
import McvArticleForm from '@/components/ArticleForm';
import McvLoading from '@/components/Loading';
export default {
  name: 'McvEditArticle',
  components: {
    McvArticleForm,
    McvLoading,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.editArticle.isSubmitting,
      isLoading: (state) => state.editArticle.isLoading,
      article: (state) => state.editArticle.article,
      validationErrors: (state) => state.editArticle.validationErrors,
    }),
    initialValues() {
      if (!this.article) {
        return null;
      } else {
        return {
          title: this.article.title,
          description: this.article.description,
          body: this.article.body,
          tagList: this.article.tagList,
        };
      }
    },
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug;
      this.$store
        .dispatch(actionTypes.updateArticle, {slug, articleInput})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}});
        });
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug,
    });
  },
};
</script>
