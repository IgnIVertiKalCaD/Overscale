<template>
  <v-layout class='dock-template position-sticky'>
    <v-container
      class='pa-0'
    >
      <v-row
        align='center'
      >
        <v-col>
          <div class='decorate_name_project'>
            <logo-for-dock />
            <span><b></b> Ixlinez is love</span>
          </div>
        </v-col>

        <v-col class='dock-main'>

        </v-col>

        <v-col class='d-flex flex-row-reverse'>

          <player-info
            v-if='isAuth'
          />
          <router-link v-else :to="{name: 'auth'}">
            <igni-button class='dock-button-auth'>Войти</igni-button>
          </router-link>
          <button
            v-if='isAuth'
            class='enter-to-admin'><i v-html='icon_enter_in_admin'/></button>

        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

import { dockList } from '@/components/global/dock/listWithRulesForRender';
import PlayerInfo from '@/components/UI/playerInfo.vue';
import { legacyIcons } from '@/mixin/legacyIcons';
import IgniButton from '@/components/UI/button.vue';

export default defineComponent({
  name: 'dock',
  mixins: [legacyIcons],
  components: { IgniButton, PlayerInfo },
  data: () => ({
  }),
  methods: {
    parserPerms(needPerm) {
      return this.getPerms?.find(perm => perm === needPerm);
    },
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      isAuth: 'auth/getStatusAuth',
      getPerms: 'auth/getPerms',
    }),
  },
});
</script>

<style lang='scss'>
.dock-template {
  padding: 10px 0;
  top: 0;
  background: #0D0D11;
  //box-shadow: 0 2px 50px 20px #0D0D11;

  .dock-button-auth {
    padding: 11px 20px;
  }

  button {
    &.enter-to-admin {
      display: flex;
      width: 60px;
      height: 60px;
      padding: 14px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 24px;
      background: #1E1E25;
      margin-right: 6%;

      i {
        height: 18px;
        width: 18px;
      }
    }
  }

  .decorate_name_project {
    span {
      color: #8F8F94;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: center;

      b {
        background: #8F8F94;
        width: 1.5px;
        height: 16px;
        margin: 0 15px;
      }
    }
  }

}
</style>