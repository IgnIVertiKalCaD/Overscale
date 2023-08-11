<template>
  <div class="player-info">
    <v-btn
      v-ripple="false"
      class="btn-player-info v-btn--selected"
    >
      <section class='d-flex w-100 align-center justify-space-between'>
        <div class='d-flex align-center'>
          <img class="head" :src="head"/>
          <p
          >{{ username }}</p>
        </div>

        <i @click='redirectToMainAndLogout()' v-html='icon_for_exit_from_account'/>
      </section>
    </v-btn>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions, mapGetters} from "vuex";
import { legacyIcons } from '@/mixin/legacyIcons';
import router from '@/router';
export default defineComponent({
  name: "playerInfo",
  mixins: [legacyIcons],
  methods: {
    ...mapActions({
      sendReqToGetHead: 'user/getHead',
      logout: 'auth/logout',

    }),
    async redirectToMainAndLogout() {
      await this.logout()
      await router.push({name: 'preview'})
    }
  },

  async mounted() {
    await this.sendReqToGetHead(this.username)
  },
  computed: {
    ...mapGetters({
      username: 'auth/getUsername',
      head: 'user/getUserHead',
    })
  }
})
</script>

<style lang="scss">
.player-info {
  background: #1E1E25;
  border-radius: 24px;
  overflow: hidden;

  .btn-player-info {
    box-shadow: none;
    height: max-content;
    background: none;
    transition: all .3s;
    outline: none;
    cursor: default;

    p {
      width: 100%;
      font-size: 16px;
      text-transform: none;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }

    i {
      cursor: pointer;
      transform: translateX(5px);
      padding: 10px;
      transition: opacity .2s ease;

      opacity: 0.5;
      &:hover {
        opacity: 0.75;
      }
      &:active {
        opacity: 1;
      }
    }

    &.v-btn--active {
      color: white;
      background: #6563EE;
    }
    .v-btn__content {
      width: 250px;
    }
    .head {
      height: 50px;
      position: relative;
      border-radius: 20px;
      margin: 5px 10px 5px -10px;
    }
  }
  .v-btn__overlay {display: none}
}
</style>