<template>
  <main
    class='error-section-main d-flex fill-height align-center justify-center flex-column'
    :style='`background-image: url(${background_for_error})`'
  >
    <logo-for-dock/>

    <div class='title mt-6'>
      <span>{{ title }}</span> <i v-html='icon_for_error'/>
    </div>

    <div class='description mt-6'>
      <span>{{ before_field }} {{timer_count}} {{after_field}}</span>
    </div>

  </main>
</template>

<script>
import LogoForDock from '@/components/UI/logoForDock.vue';
import { legacyIcons } from '@/mixin/legacyIcons';
import background_for_error from '@/assets/svg-error-on-background.svg'
import router from '@/router';
export default {
  name: 'errorPage',
  mixins: [legacyIcons],
  components: { LogoForDock },
  data: () => ({
    background_for_error,
    before_field: '',
    after_field: '',
    timer_count: '',
    action: ''
  }),
  methods: {
    routerParserTimer() {
      const splitedDescription = this.$route.meta.description.split('{{timer}}')

      this.before_field = splitedDescription[0]
      this.after_field = splitedDescription[1]
    },
    setTimerCount() {
      this.timer_count = this.$route.meta.timer
    },
    setAction() {
      this.action = this.$route.meta.action
    },
    runTimer() {
      const redirectInterval = setInterval(() => {
        if (this.timer_count <= 0) {
          clearInterval(redirectInterval)

          if (this.action === 'redirect') {
            return router.replace({name: 'preview'})
          }
          // return router.go(this.$router.currentRoute)

        }
        this.timer_count -= 1
      }, 1000)

    }
  },
  mounted() {
    this.routerParserTimer()
    this.setTimerCount()
    this.setAction()
    this.runTimer()
  },
  computed: {
    title () {
        return this.$route.meta.title
    },
  },
};
</script>

<style lang='scss'>

main {
  &.error-section-main {

    .title {
      display: flex;
      align-items: center;
      border-radius: 40px;

      padding: 10px;

      border: 1.5px solid #6563EE;
      background: #1E1E25;

      span {
        padding: 0 30px 0 20px;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }

    .description {
      opacity: 0.5;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    i {
      max-height: 55px;

      rect {
        animation: blink 4s ease infinite;
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  }
}



</style>