import { apiRequest } from '@/services/axios';
import { isSuccessfullResponse } from '@/store/helpers/isSuccessfullResponse';

export default {
  namespaced: true,
  state: {
    usersPage: [],
    countUsers: null,
    status_passwordIsChangeForUser: null,
    isLoading: false,

    statusDeleteUSer: null,
  },
  getters: {
    getStatusLoading(state) {
      return state.isLoading;
    },
    getCountUsers(state) {
      return state.countUsers;
    },
    getSelectedPageWithUsers(state) {
      return state.usersPage;
    },
    getStatusCodeDeleteUser(state) {
      return state.statusDeleteUSer;
    },
  },
  mutations: {
    SET_LOADER(state, payload) {
      state.isLoading = payload;
    },
    SET_COUNT_USERS(state, payload) {
      state.countUsers = payload;
    },
    SET_SELECTED_PAGE(state, payload) {
      state.usersPage = payload;
    },
    SET_SEARCH(state, payload) {
      state.usersPage = payload;
    },
    SET_STATUS_DELETE_USER(state, payload) {
      state.statusDeleteUSer = payload;
    },
    SET_STATUS_CHANGE_PASSWORD_FOR_USER(state, payload) {
      state.status_passwordIsChangeForUser = payload;
    },
  },
  actions: {
    async deleteUser({ commit }, username) {
      try {
        const response = await apiRequest({
          method: 'DELETE',
          url: `/users/${username}`,
        });

        if (isSuccessfullResponse(response.status)) {
          commit('SET_STATUS_DELETE_USER', response.status);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    async searchOrSortUser({ commit }, { search, sortBy, page, limit }) {
      try {
        const response = await apiRequest({
          method: 'GET',
          url: '/users',
          params: {
            sortBy: sortBy,
            includes: search,
            page: page,
            limit: limit,
          },
        });

        if (isSuccessfullResponse(response.status)) {
          commit('SET_SEARCH', response.data);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    async getCountUsers({ commit }) {
      try {
        const response = await apiRequest({
          method: 'GET',
          url: `/users/count`,
        });

        if (isSuccessfullResponse(response.status)) {
          commit('SET_COUNT_USERS', response.data.count);
        }
      } catch (error) {
        // console.log(error.response.data.error)
      }
    },
    async changePasswordForUser({ commit }, { username, password }) {
      try {
        const response = await apiRequest({
          method: 'PATCH',
          data: { password },
          url: `/users/change/password/${username}`,
        });

        if (isSuccessfullResponse(response.status)) {
          commit('SET_STATUS_CHANGE_PASSWORD_FOR_USER', response.data);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    async createUser({ commit }, payload) {
      try {
        const response = await apiRequest({
          method: 'POST',
          data: payload,
          url: '/users',
        });

        if (isSuccessfullResponse(response.status)) {
          //okay commit
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    async getSelectedPage({ commit }, { page, limit }) {
      try {
        const response = await apiRequest({
          method: 'GET',
          params: {
            page: page,
            limit: limit,
          },
          url: '/users',
        });

        if (isSuccessfullResponse(response.status)) {
          commit('SET_SELECTED_PAGE', response.data);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
  },
};
