<template>
  <ul class="tag-list">
    <li
      class="tag-default tag-pill tag-outline"
      v-for="tag in tagList"
      :key="tag"
    >
      {{ tag }}
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'McvTagList',
  props: {
    tagList: {
      type: Array,
      required: true,
    },
  },
  components: {},
};
</script>
