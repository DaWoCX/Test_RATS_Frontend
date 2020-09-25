<template>
  <v-container fluid>
    <v-row>
      <h1 class="font-weight-light">
        Test Area
      </h1>
    </v-row>
  </v-container>
</template>

<script>
import endpointsService from '../services/endpoints.service';
import configsService from '../services/configs.service';

export default {
  components: {},
  data() {
    return {
      // #################### Table Data ####################
      serverEndpointsHeaders: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'Endpoint_ID',
        },
        {
          text: 'Rest ID',
          align: 'start',
          sortable: false,
          value: 'Endpoint_RestID',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'Endpoint_Name',
        },
        {
          text: 'Request Method',
          align: 'start',
          sortable: true,
          value: 'Endpoint_ReqMethod',
        },
        {
          text: 'URI',
          align: 'start',
          sortable: true,
          value: 'Endpoint_URI',
        },
        {
          text: 'Type',
          align: 'start',
          sortable: true,
          value: 'Endpoint_Type',
        },
        {
          text: 'Is Active',
          align: 'start',
          sortable: true,
          value: 'Endpoint_IsActive',
        },
      ],

      serverConfigsHeaders: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'Config_ID',
        },
        {
          text: 'Rest ID',
          align: 'start',
          sortable: false,
          value: 'Config_RestID',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'Config_Name',
        },
        {
          text: 'Enabled',
          align: 'start',
          sortable: false,
          value: 'Config_Enabled',
        },
        {
          text: 'Type',
          align: 'start',
          sortable: false,
          value: 'Config_Type',
        },
      ],
      serverEndpointsTableData: [],
      serverConfigsTableData: [],

      // #################### Spinner Data ####################
      serverEndpointsTableSpinner: {
        isSpinning: false,
        spinnerText: 'Load Endpoints',
        spinnerColor: 'red',
      },
      serverConfigsTableSpinner: {
        isSpinning: false,
        spinnerText: 'Load Configs',
        spinnerColor: 'red',
      },
    };
  },
  created() {
    this.fetchServerEndpoints();
    this.fetchServerConfigs();
  },
  methods: {
    fetchServerEndpoints() {
      this.serverEndpointsTableSpinner.isSpinning = true;
      endpointsService
        .getAllServerEndpoints()
        .then(response => {
          this.serverEndpointsTableData = response.data;
          this.serverEndpointsTableSpinner.isSpinning = false;
        })
        .catch(err => {
          console.log(err);
          this.serverEndpointsTableSpinner.isSpinning = false;
        });
    },
    fetchServerConfigs() {
      this.serverConfigsTableSpinner.isSpinning = true;
      configsService
        .getAllServerConfigs()
        .then(response => {
          this.serverConfigsTableData = response.data;
          this.serverConfigsTableSpinner.isSpinning = false;
        })
        .catch(err => {
          this.serverConfigsTableSpinner.isSpinning = false;
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
