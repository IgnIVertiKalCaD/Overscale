<script>
import { legacyIcons } from '@/mixin/legacyIcons';
import default_server_img from '@/assets/server-card.png';

export default {
  name: 'serversPage',
  mixins: [legacyIcons],
  data: () => ({
    setSmoothHide: false,
    default_server_img
  }),
  mounted() {
  }
};
</script>

<template>
  <div class='d-flex flex-column'>
    <section class='server ml-7 mb-6 d-flex overflow-hidden position-relative' v-for='(i, index) of 6'>

      <div class='d-flex overflow-hidden flex-0-0'>
        <img
          :src='default_server_img'
          alt='s'>
      </div>

      <div class='server-title-description mx-5 mt-5 mb-4 d-flex flex-column'>
        <div class='title d-flex justify-space-between'>
          <span>Super puper igni server</span>
          <div class='icon-show-full-server' @mouseenter='setSmoothHide = true'>
              <span :class="{'smoothHide': setSmoothHide}" class='btn-show-full-server'>Подробнее</span>
              <i v-html='icon_for_show_full_version_server' />
          </div>
        </div>

        <b class='mt-5'>Этот серер является полностью попускным для таких игровок как: igni, frys, xjiupa, ixliynez и
          др.</b>

        <div class='div-chips-and-online d-flex mt-4'>
          <div class='div-chips'>
            <v-chip class='custom-chip'
                    :class='`div${index + 1}`'
                    variant='text' v-for='(i, index) of 2'>
              <template #prepend>
                <i class='icon-chip' v-html='icon_for_server_description' />
              </template>

              <b>Industrial craft</b>
            </v-chip>
          </div>

          <div class='div-progressbar'>
            <span v-if='index <= 2' class='min-value'>42</span>

            <div class='active v-progress-linear v-progress-linear--active v-theme--dark v-locale--is-ltr'
                 :class='{disabled_server: index > 2}'
                 role='progressbar'
                 aria-hidden='false' aria-valuemin='0' aria-valuemax='100' aria-valuenow='20'
                 style='width: 260px;height: 12px;border-radius: 7px; --v-progress-linear-height: 12px;'
            >
              <div class='v-progress-linear__background' style='width: 100%;'></div>
              <div class='v-progress-linear__determinate' style='width: 20%;'></div>
            </div>

            <span v-if='index <= 2' class='max-value'>100</span>
            <span v-else class='max-value'>OFF</span>

          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style lang='scss'>
section {
  &.server {
    border-radius: 16px;
    background-color: #09090C;

    &:hover {
      img {
        transform: scale(1.06);
      }
    }

    img {
      backface-visibility: hidden;
      transform: translateZ(0);
      -webkit-font-smoothing: subpixel-antialiased;

      transition: all .3s ease;
      width: 330px;
      object-fit: cover;
    }

    .server-title-description {
      font-style: normal;
      line-height: 24px;

      .title {
        > span {
          font-size: 32px;
          font-weight: 600;
        }

        .icon-show-full-server {
          border-radius: 12px;
          transition: all .4s ease;
          cursor: pointer;
          display: flex;
          position: relative;
          text-align: center;
          overflow: hidden;
          padding: 0;

          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(101, 99, 238, 0.3);

          i {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            opacity: 1;

            transition: opacity .2s ease;

            path {
              transition: .4s;
            }
          }

          .btn-show-full-server {
            position: absolute;
            left: 10px;
            right: 10px;
            top: 0;
            bottom: 0;
            opacity: 0;
            transition: opacity .5s ease;

            font-size: 14px;
            font-weight: 600;
            line-height: 30px;

          }

          &:hover {
            padding-left: 80px;
            background: rgba(101, 99, 238, 1);

            .btn-show-full-server {
              opacity: 1;
            }
            i {opacity: 0}
          }

        }

      }


      > b {
        color: rgba(255, 255, 255, 0.50);
        font-size: 24px;
        font-weight: 400;
      }

      .div-chips-and-online {

        .div-chips {
          width: 100%;
          display: grid;
          grid-column-gap: 20px;
          grid-row-gap: 5px;
          justify-content: start;
          justify-items: start;

          .div1 {
            grid-area: 1 / 1 / 2 / 2;
          }

          .div2 {
            grid-area: 1 / 2 / 2 / 3;
          }

          .div3 {
            grid-area: 2 / 1 / 3 / 2;
          }

          .div4 {
            grid-area: 2 / 2 / 3 / 3;
          }

          .custom-chip {
            display: flex;
            padding: 0 8px 0 4px;
            width: fit-content;
            border-radius: 12px;
            background: #1E1E25;
            height: 25px;

            i {
              &.icon-chip {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 19px;
                height: 19px;

                border-radius: 10px;
                background: #2C2C4E;
              }
            }

            b {
              transition: opacity .2s ease;
              margin-left: 5px;
              opacity: .5;
              color: rgba(255, 255, 255);
              font-size: 16px;
              font-weight: 400;
            }

            &:hover {
              b {
                opacity: 1;
              }
            }

            &:hover:active {
              b {
                opacity: .75;
              }
            }
          }
        }

        .div-progressbar {
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          position: relative;

          @mixin template-value {
            position: absolute;
            bottom: 20px;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;

          }

          .min-value {
            @include template-value;
            left: 0;
          }

          .max-value {
            @include template-value;
            right: 0;
            color: rgba(255, 255, 255, 0.50);
            text-align: right;

          }

          .v-progress-linear {

            &.active {
              background: #1E1E25;

              .v-progress-linear__determinate {
                border-radius: 7px;
                background: #6563EE;
              }
            }

            &.disabled_server {
              animation: blink 4s ease infinite;

              background: #F44;

              .v-progress-linear__background,
              .v-progress-linear__determinate {
                background: none;
              }

            }

          }

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
}
</style>