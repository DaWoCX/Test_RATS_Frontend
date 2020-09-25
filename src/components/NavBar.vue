<template>
  <v-navigation-drawer v-model="drawerToggle" app clipped>
    <v-list dense>
      <v-list-item link to="/restapi">
        <v-list-item-action>
          <v-icon>mdi-api</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>REST API</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/testarea">
        <v-list-item-action>
          <v-icon>mdi-test-tube</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Test-Area</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/settings">
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawerToggle: {
      type: Boolean,
      value: true,
    },
  },
};
</script>

<style></style>
