<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->

    <v-app-bar app elevation="4" color="primary" dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon
        v-if="showBackBtn"
        @click.stop="$router.go(-1)"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>

      <v-app-bar-title>
        {{routeDisplayName}}
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showBackBtn() {
      return this.$route.name !== 'MainNav';
    },
    routeDisplayName() {
      const lastMatchRoute = this.$route.matched[this.$route.matched.length - 1];
      const displayName = lastMatchRoute.props.default ?
        lastMatchRoute.props.default.displayName : null;

      return displayName || 'Оперативный план';
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/base.scss';
</style>
