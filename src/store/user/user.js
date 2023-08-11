import {apiRequest} from "@/services/axios";
import { steve } from "@/assets/common/steve"

import {bufferToBase64png} from "@/store/helpers/bufferToBase64png";
import {isSuccessfullResponse} from "@/store/helpers/isSuccessfullResponse";

export default {
    namespaced: true,
    state: {
        head: sessionStorage.getItem('head') || '',
        skin: sessionStorage.getItem('skin') || '',
        cape: sessionStorage.getItem('cape') || '',
        user: JSON.parse(sessionStorage.getItem('user')) || '',
        error: null,
    },
    getters: {
        getUserHead(state) {
            return state.head;
        },
        getUserSkin(state) {
            return state.skin
        },
        getUserCape(state) {
            return state.cape
        },
        getUserData(state) {
            return state.user;
        }
    },
    mutations: {
        SET_USER_HEAD(state, payload) {
            state.head = payload
            sessionStorage.setItem("head", payload)
        },
        SET_USER_SKIN(state, payload) {
            state.skin = payload
            sessionStorage.setItem('skin', payload)
        },
        SET_USER_CAPE(state, payload) {
            state.cape = payload
            sessionStorage.setItem('cape', payload)
        },
        SET_USER_DATA(state, payload) {
            state.user = payload;
            sessionStorage.setItem('user', JSON.stringify(payload))
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
    },
    actions: {
        async getHead({commit}, username) {
            try {
                const response = await apiRequest({
                    method: 'GET',
                    params: {
                        defaultSkin: true,
                    },
                    responseType: 'arraybuffer',
                    url: `/users/assets/${username}/head`,
                })

                if (isSuccessfullResponse(response.status)) {
                    commit('SET_USER_HEAD', bufferToBase64png(response.data))
                }
            } catch (error) {
                commit('SET_ERROR', error)
                console.log(error)
            }
        },
        async getCurrentUser({commit}) {
            try {
                const response = await apiRequest({
                    method: 'GET',
                    url: '/users/@me',
                });
                if (isSuccessfullResponse(response.status)) {
                    commit('SET_USER_DATA', response.data)

                    if (response.data.assets.SKIN) {
                        commit('SET_USER_SKIN', response.data.assets.SKIN.url)
                    } else {
                        commit('SET_USER_SKIN', steve)
                    }

                    if (response.data.assets.CAPE) {
                        commit('SET_USER_CAPE', response.data.assets.CAPE.url)
                    } else {
                        commit('SET_USER_CAPE', '')
                    }
                }
            } catch (error) {
                console.log(error);
                commit('SET_ERROR', error);
            }
        },

        //
        async removerAssets({commit}, typeAssets) {
            try {
                const response = await apiRequest({
                    method: "DELETE",
                    url: `/users/assets/@me/${typeAssets}`
                })

                if (isSuccessfullResponse(response.status)) {
                    typeAssets === 'skin'
                        ? commit("SET_USER_SKIN", steve)
                        : commit("SET_USER_CAPE", null)
                }

            } catch (error) {
                commit("SET_ERROR_ASSETS_CONTROLLER", error)
            }
        },
        async changeAssets({commit}, {payload, typeAssets}) {
            try {
                const response = await apiRequest({
                    method: 'PATCH',
                    data: payload,
                    url: `/users/assets/@me/${typeAssets}`
                });
            } catch (error) {
                console.log(error)
            }
        }
    }
}