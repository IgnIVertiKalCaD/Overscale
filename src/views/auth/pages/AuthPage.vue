<script>
import { authMixin } from '@/views/auth/mixins/authMixin';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import IgniButton from '@/components/UI/button.vue';

export default {
  name: 'AuthPage',
  components: { IgniButton },
  mixins: [authMixin],
  data: () => ({
    username: 'ixliynez',
    password: '123123123',
    valid: false,
  }),
  methods: {
    sendDataToAuth() {
      this.isBlocked = true;
      this.setLoader(true);

      this.authentication({ usernameOrEmail: this.username, password: this.password });
    },
    ...mapMutations({
      setLoader: 'auth/SET_LOADER',
      resetStatus: 'auth/SET_RESET_STATUS',
    }),
    ...mapActions({
      authentication: 'auth/authentication',
    }),
  },
  computed: {
    ...mapGetters({
      isLoading: 'auth/getStatusLoader',
      status: 'auth/getStatus',
    }),
  },
  mounted() {
  },
};
</script>

<template>
  <section class='template'>
    <v-form v-model='valid'>
      <v-text-field
        variant='solo'
        class='input-default flex-0-0 mb-0'

        v-for='(item, index) of authList' :key='index'
        :placeholder='item.placeholder'
        :type="showPasswordField && item.type === 'password' ? 'text' : !showPasswordField && item.type === 'password' ? 'password' : 'text' "
        :maxlength='item.maxSymbols'
        :rules='item.rule'

        @blur='unfocuse()'
        @focus='focuse()'
        @input='updatePersonalData(item.type, $event.target.value)'
      >
        <template #message='{ message }'>
          <p>{{ $t(message) }}</p>
        </template>

        <template #prepend-inner>
          <span class='prepend-icon'><i v-html='item.icon' /></span>
        </template>

        <template #append-inner>
          <span @click='showPasswordField = !showPasswordField' class='input-icon' v-if='item.isToggleField'
                v-html='getIcon' />
        </template>
      </v-text-field>

    </v-form>
    <div class='d-flex align-center justify-space-between'>
      <label class='material-checkbox'>
        <input type='checkbox'>
        <span class='checkmark'></span>
        <p>Запомнить меня</p>
      </label>

      <router-link :to='{name: `resetPassword`}'>
        <p class='forgot-password'>Забыли пароль?</p>
      </router-link>

    </div>

    <div class='d-flex flex-column mt-4'>
      <igni-button class='mb-4'
                   @click='sendDataToAuth()'
      >Войти
      </igni-button>

      <router-link :to='{name: `registration`}'>
        <p class='registration'>Зарегистрироваться</p>
      </router-link>
    </div>

  </section>
</template>

<style lang='scss'></style>