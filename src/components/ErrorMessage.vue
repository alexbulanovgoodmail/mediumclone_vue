<template>
  <div>{{ message }}</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'McvErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Something went wrong',
    },
  },
  components: {},
};
</script>
