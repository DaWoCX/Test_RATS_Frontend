<template>
  <v-container>
    <!-- <v-row align="center" justify="center">
      <p class="display-4">Rest Api Test Suite</p>
    </v-row> -->
    <header class="app__title">
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <h1>
            <roller class="roller" text="Rest" transition="2" :charList="['r', 'e', 'P', 'i', 'I', 't', 's', 'u']" />
          </h1>
        </v-col>
        <v-col cols="auto">
          <h1>
            <roller class="roller" text="API" transition="2" :charList="['r', 'e', 'P', 'i', 'I', 't', 's', 'u']" />
          </h1>
        </v-col>
        <v-col cols="auto">
          <h1>
            <roller class="roller" text="Test" transition="2" :charList="['r', 'e', 'P', 'i', 'I', 't', 's', 'u']" />
          </h1>
        </v-col>
        <v-col cols="auto">
          <h1>
            <roller class="roller" text="Suite" transition="2" :charList="['r', 'e', 'P', 'i', 'I', 't', 's', 'u']" />
          </h1>
        </v-col>
      </v-row>
    </header>
    <v-row class="ma-15" align="center" justify="center">
      <img src="../assets/ratslogo_simple.png" />
    </v-row>
  </v-container>
</template>

<script>
// import Roller from 'vue-roller';
export default {
  components: {
    Roller: () => import('vue-roller'),
  },
};
</script>

<style>
.roller * {
  font-family: 'Major Mono Display', monospace;
}

.app__title {
  position: relative;
  width: 100%;
  /* height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  font-size: 2em;
  /*background-color: #354952; */
  color: white;
}
</style>
