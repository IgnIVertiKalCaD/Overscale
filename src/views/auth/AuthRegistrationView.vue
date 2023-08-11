<template>
  <div class="AuthRegistration-template fill-height d-flex justify-center align-center"
       :style='`background-image: url(${background_for_error})`'
  >

    <div class='d-flex flex-column'>
      <logo-for-dock class='mb-4' :class-name='`justify-center`' />

      <router-view v-slot='{ Component, route }'>
        <transition :name='route.meta.animation' mode='out-in'>
          <component :is='Component' />
        </transition>
      </router-view>

    </div>

  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent} from 'vue'
import {mapGetters} from "vuex";
import background_for_error from '@/assets/svg-error-on-background.svg';
import IgniButton from '@/components/UI/button.vue';

export default defineComponent({
  name: "AuthRegistrationView",
  data: () => ({
    background_for_error
  }),
  methods: {
  },
  computed: {
    ...mapGetters({
        isAuth: 'auth/getStatusAuth'
    })
  },
  mounted() {

  },
  components: {
    IgniButton,
  },
  watch: {
    isAuth: {
      handler() {
        if (this.isAuth) {
          this.$router.push({name: 'profile'})
        }
      }
    }
  }
})
</script>

<style lang="scss">
.height-400 {
  height: 400px;
}
@mixin default-style-text-link {
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #FFF;
  font-size: 16px;
  opacity: .5;
  transition: opacity .2s ease;
  &:hover {
    opacity: 1;
  }
  &:hover:active {
    opacity: .75;
  }
}

.AuthRegistration-template {
  background-repeat: no-repeat;
  background-size: cover;

  .v-field {
    transition: box-shadow .2s;
    box-shadow: none;
  }
  .v-field--focused {
    box-shadow: 0 0 0 1.6px #6563EE;

    .prepend-icon {
      transform: translate(-10px, -5px);
      padding: 12px !important;

      width: 54px !important;
      height: 54px !important;

      svg { path {transition: .3s ease; fill: white;}} //refacrtor

    }
  }

  .v-input--error {
    padding-bottom: 12px;
  }

  .mb-30px {
    margin-bottom: 30px;
  }

  .v-input .v-messages {
    color: #F44 !important;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .v-input {
    transform: scale(1);
    transition: all .2s linear;
    position: relative;

  }

  .template {
    width: 430px;

    .title-email {
      display: flex;
      color: rgba(255, 255, 255, 0.50);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    p {
      &.forgot-password {
        @include default-style-text-link;
      }

      &.registration {
        @include default-style-text-link;

      }
    }

    .material-checkbox {
      display: flex;
      align-items: center;
      cursor: pointer;

      p {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        opacity: 0.5;
      }

      .checkmark {
        position: relative;
        display: inline-block;
        width: 32px;
        height: 32px;
        background-image: url("@/assets/icons/checkbox-uncheck.svg");
        margin-right: 10px;
      }

      input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      input[type="checkbox"]:checked ~ .checkmark:after {
        display: block;
        width: 32px;
        height: 32px;
        content: '';
        background-image: url("@/assets/icons/checkbox-check.svg");
      }
    }

    .input-default {

      .v-field {
        border-radius: 16px;
        background: #1E1E25;
        padding: 2px 8px;
        align-items: center;

        .prepend-icon {
          transition: .2s ease;
          border-radius: 10px;
          background: #151519;
          display: flex;
          position: absolute;
          justify-content: center;
          align-items: center;
          margin-right: 5px;
          padding: 8px;

          height: 48px;
          width: 48px;

          i {
            height: 32px;
          }
        }

        .v-field__prepend-inner {
          height: fit-content;
        }

        .v-field__input {
          color: #FFF;
          padding-left: 60px;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        }
      }

    }

    a {
      text-align: center;
    }
  }
}

</style>