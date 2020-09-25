import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken2,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.lighten1,
        success: colors.lightGreen.darken1,
      },
      dark: {
        primary: colors.grey.darken2,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.lighten1,
        success: colors.lightGreen.darken1,
      },
    },
  },
});

export default vuetify;
