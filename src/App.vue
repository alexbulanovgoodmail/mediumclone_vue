<template>
  <mcv-top-bar />

  <router-view />
</template>

<script>
import McvTopBar from '@/components/TopBar';
export default {
  name: 'McvApp',
  components: {
    McvTopBar,
  },
};
</script>