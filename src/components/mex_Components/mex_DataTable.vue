<template>
  <div class="pa-5">
    <base-material-card :icon="cardIcon" :title="cardName" :color="cardColor">
      <v-data-table
        :loading="spinnerData.isSpinning"
        :loading-text="spinnerData.spinnerText"
        :headers="tableHeaders"
        :items="tableData"
        :single-select="tableSingleSelect"
        item-key="id"
        :show-select="tableShowSelect"
        :hide-default-footer="tableHideFooter"
      >
      </v-data-table>
    </base-material-card>
  </div>
</template>

<script>
export default {
  name: 'mexDataTable',
  components: {
    BaseMaterialCard: () => import('../ct_components/MaterialCard'),
  },
  props: {
    cardName: String,
    cardIcon: String,
    cardColor: String,
    tableHeaders: Array,
    tableData: Array,
    tableSingleSelect: String,
    tableShowSelect: String,
    spinnerData: Object,
    tableHideFooter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
