<template>
  <div class="pa-5">
    <v-card>
      <v-card-title>{{ viewHeaderTitle }}</v-card-title>
      <v-card-subtitle>{{ viewHeaderSubtitle }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    viewHeaderTitle: {
      type: String,
      default: 'This is the title',
    },
    viewHeaderSubtitle: {
      type: String,
      default: 'This is the subtitle',
    },
  },
};
</script>

<style></style>
