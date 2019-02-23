import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

import tasks from "./modules/tasks";
import taskLists from "./modules/taskLists";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    tasks,
    taskLists,
  },
});
