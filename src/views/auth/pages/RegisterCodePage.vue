<script>
import VOtpInput from 'vue3-otp-input';
import IgniButton from '@/components/UI/button.vue';

export default {
  name: 'RegisterCodePage',
  data: () => ({
    test: '',
    email: 'gomosek228@dayn.com',
  }),
  methods: {
    handleOnComplete() {
      console.log(this.test);
      setTimeout(() => {
        this.test = '';
        this.$refs.inputOTP.clearInput()
      },1000)
    }
  },
  components: { IgniButton, VOtpInput },
};
</script>

<template>
  <section class='template'>
    <div class='title-email mb-4 d-block'>
      <span>На указанный Вами email&nbsp</span>
      <span class='title-email-text'>{{ email }}</span>
      <span>&nbsp было выслано письмо с пин-кодом для подтверждения владения почтой</span>
    </div>

    <v-otp-input
      ref='inputOTP'
      class='justify-space-between'
      input-classes='otp-input'
      :value='test'
      v-model:value="test"
      separator=''
      :num-inputs='6'
      :should-auto-focus='true'
      :is-input-num='true'
      @on-complete='handleOnComplete'
    />

    <div class='d-flex flex-column mt-6'>
      <igni-button class='mb-4'>Войти</igni-button>

      <div class='d-flex justify-space-between'>
          <p class='registration'>Выслать код повторно</p>

        <router-link :to='{name: `preview`}'>
          <p class='registration'>Выйти</p>
        </router-link>
      </div>


    </div>

  </section>
</template>

<style lang='scss'>
.title-email-text {
  color: #6563EE;
}

.otp-input {
  background: #1E1E25;
  border: 1.4px solid #151519;
  outline: none;
  text-align: center;
  font-size: 24px;
  border-radius: 16px;

  user-select: none;

  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;

  &:focus-visible {
    border: 1px solid #6563EE;

  }
}
</style>