<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>

    <v-app-bar app elevation="4" color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Оперативный план</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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
  mounted() {
    console.log(this.$vuetify);
  },
};
</script>

<style></style>
