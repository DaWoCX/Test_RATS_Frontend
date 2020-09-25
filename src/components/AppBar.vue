<template>
  <v-app-bar app clipped-left>
    <slot name="drawerToggleSlot"></slot>
    <v-divider vertical inset class="mx-4" />
    <v-toolbar-title
      >Rest API TestSuite
      <v-icon :color="statusLamp.color">{{ statusLamp.icon }}</v-icon>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawerToggle: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      statusLamp: {
        icon: 'mdi-alarm-light',
        color: 'red',
      },
    };
  },
  created() {
    this.pingRest();
  },
  methods: {
    toggleDrawer() {
      this.drawerToggle = !this.drawerToggle;
    },
    pingRest() {
      fetch(`http://localhost:8889`, { mode: 'no-cors' }).then(resp => {
        if (resp.status === 200) {
          this.statusLamp.color = 'green';
        } else {
          this.statusLamp.color = 'red';
        }
      });
    },
  },
};
</script>

<style></style>
