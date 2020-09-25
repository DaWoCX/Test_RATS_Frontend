<template>
  <v-container fluid>
    <v-row>
      <h1 class="font-weight-light">
        Rest API
      </h1>
    </v-row>
    <v-row justify="center">
      <rats-rest-api-header-card
        :headerTitle="connectedToURL"
        headerColor="primary"
        headerIcon="mdi-server-network"
        :headerFunctionSync="syncWithRestApi"
        :headerFunctionSyncSettings="syncWithRestApi"
      />
    </v-row>
    <v-row>
      <v-row>
        <v-col cols="12">
          <rats-endpoint-table
            cardName="REST API Server Endpoints"
            cardIcon="mdi-check-bold"
            cardColor="primary"
            :tableHeaders="serverEndpointsHeaders"
            :tableData="serverEndpointsTableData"
            :spinnerData="serverEndpointsTableSpinner"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <mex-data-table
            cardName="REST API Server Configs"
            cardIcon="mdi-server"
            cardColor="primary"
            :tableHeaders="serverConfigsHeaders"
            :tableData="serverConfigsTableData"
            :spinnerData="serverConfigsTableSpinner"
          />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import endpointsService from '../services/endpoints.service';
import configsService from '../services/configs.service';

export default {
  components: {
    ratsEndpointTable: () => import('../components/rats_components/rats_endpointTable'),
    mexDataTable: () => import('../components/mex_Components/mex_DataTable'),
    ratsRestApiHeaderCard: () => import('../components/rats_components/rats_restApiHeaderCard'),
  },
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

      connectedToURL: 'Connected to localhost://8081',
    };
  },
  created() {
    this.syncWithRestApi();
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
    syncWithRestApi() {
      this.fetchServerConfigs();
      this.fetchServerEndpoints();
    },
  },
};
</script>

<style></style>
