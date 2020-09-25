<template>
  <v-container>
    <v-row justify="center">
      <v-progress-circular indeterminate :color="spinnerColor"> </v-progress-circular>
    </v-row>
    <v-row justify="center">
      <v-chip class="ma-2" :color="spinnerColor" label text-color="white">
        {{ spinnerText }}
      </v-chip>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    spinnerColor: String,
    spinnerText: String,
  },
};
</script>

<style></style>
