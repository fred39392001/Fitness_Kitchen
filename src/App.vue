<template>
  <div id="app">
    <Toast/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/all';

body{
  height: 100vh;
  font-family: "Noto Sans TC", "Arimo", sans-serif;
}
</style>

<script>
import Toast from '@/components/Toasts.vue';

export default {
  name: 'App',
  components: {
    Toast,
  },
  data() {
    return {
    };
  },
};
</script>
