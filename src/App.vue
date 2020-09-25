<template>
  <v-app id="inspire">
    <app-bar>
      <template v-slot:drawerToggleSlot>
        <v-btn @click="toggleDrawer" icon color="transparent">
          <v-avatar class="pa-5">
            <img src="./assets/ratslogo_simple.png" scale="0.5" />
          </v-avatar>
        </v-btn>
      </template>
    </app-bar>

    <nav-bar :drawerToggle="drawer" />
    <v-main>
      <v-container fluid>
        <!-- Provides the application the proper gutter -->
        <v-container class="fill-height" fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-container>
    </v-main>

    <!-- <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  components: {
    NavBar: () => import('./components/NavBar'),
    AppBar: () => import('./components/AppBar'),
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: true,
    image: './assets/ratslogo_simple.png',
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
