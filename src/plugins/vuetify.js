import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.lightBlue.base,
        accent: colors.cyan.base,
      },
    },
  },
};

export default new Vuetify(opts);
