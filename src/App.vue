<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.$store.commit('setDarkMode', true);
    } else {
      this.$store.commit('setDarkMode', false);
    }
  },
  /*
    watch: {
        darkMode: function () {
            const htmlElement = document.documentElement;
            if (this.darkMode) {
                htmlElement.setAttribute('theme', 'dark');
            } else {
                htmlElement.setAttribute('theme', 'light');
            }
        }
    }
    */
};
</script>
