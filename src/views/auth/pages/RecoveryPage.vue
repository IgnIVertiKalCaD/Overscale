<script>
import IgniButton from '@/components/UI/button.vue';
import { authMixin } from '@/views/auth/mixins/authMixin';

export default {
  name: 'RecoveryPage',
  mixins: [authMixin],
  data: () => ({
    valid: ''
  }),
  components: { IgniButton },
};
</script>

<template>
  <section class='template'>
    <span class='title-email mb-4'>Введите адрес электронной почты, который был использован для регистрации. Вам будет выслано письмо с дальнейшими инструкциями по сбросу пароля.</span>
    <v-form v-model='valid'>
      <v-text-field
        variant='solo'
        class='input-default flex-0-0 mb-0'

        v-for='(item, index) of recoveryPassword' :key='index'
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

    <div class='d-flex flex-column'>
      <igni-button class='mb-4'>Отправить письмо</igni-button>

      <router-link :to='{name: `registration`}'>
        <p class='registration'>Зарегистрироваться</p>
      </router-link>
    </div>

  </section>
</template>

<style scoped lang='scss'>

</style>