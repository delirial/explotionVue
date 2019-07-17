
import Vue from 'vue';
import Vuex from 'vuex';
import ping from 'node-http-ping';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: false,
    apiState: false,
    responseTime: 0,
  },
  mutations: {
    takeState(state) {
      ping('https://api-explotion.herokuapp.com/')
        .then((time) => {
          console.log(time);
          console.log(state.responseTime);
          state.responseTime = time;
        })
        .catch(() => console.log('Failed to ping google.com'));
    },
    changeStatus(state) {
      if (state.responseTime > 0) state.apiState = true;
    },
  },
  actions: {

  },
});
