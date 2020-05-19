import Vuetify from "vuetify";

export default (Vue, App, router) => {
  new Vue({
    el: "#app",
    router,
    vuetify: new Vuetify(),
    render: (h) => h(App),
  });
};
