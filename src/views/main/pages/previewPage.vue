<template>
<div class='fill-height'>
  <dock />

  <div class='v-container inner-header'>
    <section class='header d-flex'>
      <div class='left-section'>
        <span>Артур пирожков <br> а Нагиев просто бомба</span>

        <section class='mt-9'>
          <p>anitisas s ad dasasst penis</p>

          <div class='mt-9 d-flex buttons-and-online'>
            <div>
              <igni-button class='mr-2'>Start play</igni-button>
              <igni-button :class-name="'outlined-button'">Game over</igni-button>
            </div>

            <div class='mt-6 online-section'>
              <span class='d-flex align-center'><i v-html='icon_for_online' /> <b>Current online: 45</b></span>
            </div>
          </div>

        </section>

      </div>

      <div class='right-section position-relative'>
        <div class='bg-for-img'>
          <img :src='img_for_right_section' alt='s'>
        </div>
      </div>
    </section>

    <footer class='d-flex'>
      <div>
      <svg-import :vhtml-icon='$config.nameProject'/>
        <p>Copyright © Phantom 2023. Все права защищены. Сервера
          Phantom не относятся к Mojang Studios.</p>
      </div>

      <div>
        <strong>Документы</strong>
        <p>Договор оферты</p>
        <p>Политика обработки персональных данных</p>
      </div>

      <div>
        <strong>Свяжитесь с нами</strong>
        <p>help@xjiupa.com</p>
      </div>

    </footer>
  </div>

</div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

import IgniButton from '@/components/UI/button.vue';
import SvgImport from '@/components/UI/svg-import.vue';

import img_for_right_section from '@/assets/main.png';
import { legacyIcons } from '@/mixin/legacyIcons';

export default defineComponent({
  name: 'header_page',
  mixins: [legacyIcons],
  components: { SvgImport, IgniButton },
  data: () => ({
    img_for_right_section,
  }),
  methods: {
    ...mapActions({}),
    async loadAllGroupsInfo() {

    },
  },
  computed: {
    ...mapGetters({}),
  },
  mounted() {
    this.loadAllGroupsInfo();
  },
});
</script>

<style lang='scss'>
.inner-header {
  height: 90%;
  .header {
    align-items: center;
    height: 80%;

    .left-section {
      width: 70%;

      section {

        .buttons-and-online {
          flex-direction: column;
          width: fit-content;

          .online-section {
            background: #151519;
            border-radius: 16px;
            font-size: 1.2em;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            b {
              margin-left: 15px;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 24px;
            }

            i {
              border-radius: 16px;
              background: rgba(255, 189, 62, 0.20);
              display: flex;
              padding: 8px;
              justify-content: center;
              align-items: flex-start;

              svg {
                width: 32px;
                height: 32px;
                fill: #FFBD3E
              }
            }

            .bg-icon-online {
              background: #2f3136;
            }
          }
        }
      }

      > span {
        white-space: pre-line;
        display: block;
        font-size: 60px;
        font-style: normal;
        font-weight: 600;
        line-height: 60px;
      }

      p {
        color: #8F8F94;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }

    }

    .right-section {
      display: flex;
      align-items: center;

      .bg-for-img {
        position: absolute;
        border-radius: 80px 0 0 80px;
        background: #1E1E25;

        > img {
          height: 400px;
          max-height: 400px;
          z-index: 5;
          position: relative;
          transform: scale(1.5);
        }

        &::after {
          content: " ";
          width: 1000%;
          background: #1E1E25;
          display: block;
          left: 99.8%;
          top: 0;
          right: 0;
          position: absolute;
          height: 100%;
        }
      }

    }
  }
  footer {
    border-top: 2px solid #38383E;
    padding-top: 1.4em;
    align-items: flex-start;

    .icon {
      padding-top: 5px;
      height: 28px;
      display: block;
    }
    div {
      width: 33.33%;
    }
    strong {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
    }

    p {
      color: #8F8F94;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      padding-top: 1em;
    }
  }
}

@import '../../styles/animation_heading_line';

</style>