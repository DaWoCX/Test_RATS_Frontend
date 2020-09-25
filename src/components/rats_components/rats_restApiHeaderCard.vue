<template>
  <mex-header-card :headerTitle="headerTitle" :headerColor="headerColor" :headerIcon="headerIcon">
    <template v-slot:passthrough-reveal-actions>
      <v-row align="center" justify="center">
        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <div class="mx-2">
              <v-btn v-bind="attrs" v-on="on" @click="headerFunctionSync" small>
                <v-icon left>mdi-sync</v-icon>
                Resync
              </v-btn>
            </div>
          </template>

          <span>ReSync Settings</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <div class="mx-2">
              <v-btn v-bind="attrs" v-on="on" @click="headerFunctionSyncSettings" small>
                <v-icon left>mdi-cog-box</v-icon>
                Sync Settings
              </v-btn>
            </div>
          </template>

          <span>ReSync Settings</span>
        </v-tooltip>
      </v-row>
    </template>
  </mex-header-card>
</template>

<script>
export default {
  components: {
    mexHeaderCard: () => import('../mex_Components/mex_headerCard'),
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
    },
    headerFunctionSync: Function,
    headerFunctionSyncSettings: Function,
  },
};
</script>

<style></style>
