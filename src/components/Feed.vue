<template>
  <div class="">Feed {{ apiUrl }}</div>
</template>

<script>
// @ is an alias to /src
import {actionTypes} from '@/store/modules/feed';
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  components: {},
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
  },
};
</script>
