<template>
  <div>
    <v-list flat>
      <v-list-item-group
        color="accent"
      >
        <v-list-item
          v-for="(rout, index) in nav"
          :key="rout.path"
          @click="navItemClick(rout)"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ index + 1 }}. {{ rout.props.displayName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  computed: {
    nav() {
      const routes = this.$router.options.routes;

      return routes.filter(rout => rout.name === 'OperPlan')[0].children;
    },
  },
  methods: {
    navItemClick(rout) {
      console.log(rout);

      this.$router.push({ name: rout.name });
    },
  },
};
</script>

<style></style>
