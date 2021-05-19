import Vue from "vue";
import Vuex from "vuex";
import ui from "./ui";
import polApi from "./polApi";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ui, polApi },
  state,
  mutations,
  actions,
  getters
});
