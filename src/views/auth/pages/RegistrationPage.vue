<script>
import { authMixin } from '@/views/auth/mixins/authMixin';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import IgniButton from '@/components/UI/button.vue';

export default {
  name: 'RegistrationPage',
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

        v-for='(item, index) of regList' :key='index'
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
        <p>Я прочитал и принимаю</p>&nbsp<a href='http://localhost:8080' class='rules-class'>правила</a>&nbsp<p>проекта</p>
      </label>

    </div>

    <div class='d-flex flex-column mt-4'>
      <igni-button class='mb-4'>Зарегистрироваться</igni-button>

      <router-link :to='{name: `auth`}'>
        <p class='registration'>Войти</p>
      </router-link>
    </div>

  </section>
</template>

<style lang='scss'>
a {
  &.rules-class {
    opacity: 0.5;
    color: #6563EE;
    transition: opacity .2s ease;

    &:hover {
      opacity: 1;
    }
    &:hover:active {
      opacity: .75;
    }
  }
}
</style>