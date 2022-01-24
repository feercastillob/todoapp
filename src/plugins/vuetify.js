import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken4, // #E53935
        secondary: colors.red.darken4, // #FFCDD2
        accent: colors.green.darken4, // #3F51B5
      },
    },
  },
});
