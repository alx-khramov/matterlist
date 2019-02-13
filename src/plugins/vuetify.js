import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#05abf2",
    secondary: "#e91e63",
    accent: "#cddc39",
    error: "#f44336",
    warning: "#ffc107",
    info: "#00bcd4",
    success: "#8bc34a",
  },
  options: {
    customProperties: true,
  },
});
