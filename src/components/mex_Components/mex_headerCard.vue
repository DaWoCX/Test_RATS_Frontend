// Basic for a mex Header Card - reveal-actions passed by solt:passthrough-reveal-actions
<template>
  <base-material-card :color="headerColor" hover-reveal>
    <template v-slot:heading>
      <v-row>
        <v-col cols="1">
          <v-icon large>{{ headerIcon }}</v-icon>
        </v-col>
        <!-- Just for spacing, maybe there is another way to do this -->
        <v-col cols="1"> </v-col>
        <v-col cols="8">
          <h4>{{ headerTitle }}</h4>
        </v-col>
      </v-row>
    </template>
    <template v-slot:reveal-actions>
      <slot name="passthrough-reveal-actions" />
      <!-- <v-tooltip bottom>
        <template v-slot:activator="{ attrs, on }">
          <v-btn v-bind="attrs" icon v-on="on" @click="resyncWithRest">
            <v-icon>mdi-cog-box</v-icon>
          </v-btn>
        </template>
      </v-tooltip> -->
    </template>
  </base-material-card>
</template>

<script>
export default {
  name: 'mexHeaderCard',
  components: {
    BaseMaterialCard: () => import('../ct_components/MaterialCard'),
  },
  props: {
    headerColor: {
      type: String,
      default: 'primary',
    },
    headerTitle: {
      type: String,
      default: 'This is a title',
    },
    headerIcon: {
      type: String,
      default: 'mdi-alien',
    },
  },
  method: {
    resyncWithRest() {
      console.log('Go Fuck yourself');
    },
  },
};
</script>

<style></style>
