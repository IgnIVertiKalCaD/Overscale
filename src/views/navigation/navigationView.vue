<template>
  <div class='fill-height overflow-y-auto'
       @scroll.passive="handleScroll">
    <b style='height: 0; line-height: 0' ref='upperElement' />

    <dock />

    <section class='navigation-section v-container align-start d-flex flex-nowrap px-0'>

      <nav class='left d-flex flex-column'>
        <router-link :to='{name: router.router_name}' v-for='router of navItemList'>
          <igni-button :class-name='`navigation-btn`' class='mb-2'>
            <i v-html='router.icon' />
            <p class='pl-2'>{{ router.title }}</p>
          </igni-button>
        </router-link>
      </nav>

      <main class='d-flex justify-center flex-column'>
        <router-view v-slot='{ Component, route }'>
          <transition :name='route.meta.animation' mode='out-in' appear>
            <component :key='route.path' :is='Component' />
          </transition>
        </router-view>
      </main>

      <transition name='fade'>
      <div class='div-block-to-top position-fixed'
      v-show='offsetY > 50'>
        <button @click='scrollToUp' class='block-to-top'><i v-html='icon_arrow_up'/></button>
      </div>
      </transition>

    </section>
  </div>
</template>

<script>
import IgniButton from '@/components/UI/button.vue';
import { legacyIcons } from '@/mixin/legacyIcons';

export default {
  name: 'navigationView',
  mixins: [legacyIcons],
  components: { IgniButton },
  data: () => ({
    navList: [
      {
        router_name: 'news',
        title: 'Главная',
        icon: `<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M27.4537 4.66019C21.2141 -1.5534 11.0526 -1.5534 4.81303 4.66019C-1.42653 10.8738 -1.42653 20.9931 4.81303 27.2067C7.84367 30.4022 11.9439 32 16.0442 32C20.1445 32 24.2448 30.4022 27.4537 27.3842C33.6933 21.1706 33.6933 10.8738 27.4537 4.66019ZM26.3841 24.3662L22.8186 20.8155C23.8882 19.5728 24.6013 17.7975 24.6013 16.0222C24.6013 14.2469 24.0665 12.4716 22.9969 11.0513L26.5623 7.50069C30.4843 12.4716 30.4843 19.5728 26.3841 24.3662ZM11.9439 20.1054C10.8743 19.0402 10.1612 17.62 10.1612 16.0222C10.1612 14.4244 10.696 13.0042 11.9439 11.939C13.1919 10.8738 14.4398 10.1637 16.0442 10.1637C17.6487 10.1637 19.0749 10.6963 20.1445 11.939C21.2141 13.0042 21.9272 14.4244 21.9272 16.0222C21.9272 17.62 21.3924 19.0402 20.1445 20.1054C18.0052 22.2358 14.0832 22.2358 11.9439 20.1054ZM24.4231 5.72538L20.8576 9.27601C19.6097 8.21082 17.827 7.50069 16.0442 7.50069C14.2615 7.50069 12.4788 8.21082 11.0526 9.27601L7.48712 5.72538C12.4788 1.64216 19.6097 1.64216 24.4231 5.72538ZM5.70439 7.67823L9.26985 11.2288C8.20021 12.4716 7.48712 14.2469 7.48712 16.0222C7.48712 17.7975 8.02194 19.5728 9.09158 20.9931L5.52612 24.5437C1.60411 19.5728 1.60411 12.4716 5.70439 7.67823ZM7.6654 26.319L11.2309 22.7684C12.4788 23.8336 14.2615 24.5437 16.0442 24.5437C17.827 24.5437 19.6097 24.0111 21.0359 22.9459L24.6013 26.4965C19.6097 30.4022 12.4788 30.4022 7.6654 26.319Z' fill='#8F8F94'/></svg> `,
      },
      {
        router_name: 'servers',
        title: 'Сервера',
        icon: `<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M28.9778 13.8667H3.2C1.42222 13.8667 0 12.4444 0 10.6667V3.2C0 1.42222 1.42222 0 3.2 0H28.9778C30.7556 0 32.1778 1.42222 32.1778 3.2V10.6667C32 12.4444 30.5778 13.8667 28.9778 13.8667ZM3.2 2.66667C3.02222 2.66667 2.66667 2.84444 2.66667 3.2V10.6667C2.66667 10.8444 2.84444 11.2 3.2 11.2H28.9778C29.1556 11.2 29.5111 11.0222 29.5111 10.6667V3.2C29.5111 3.02222 29.3333 2.66667 28.9778 2.66667H3.2ZM28.9778 32H3.2C1.42222 32 0 30.5778 0 28.8V21.3333C0 19.5556 1.42222 18.1333 3.2 18.1333H28.9778C30.7556 18.1333 32.1778 19.5556 32.1778 21.3333V28.9778C32 30.5778 30.5778 32 28.9778 32ZM3.2 20.9778C3.02222 20.9778 2.66667 21.1556 2.66667 21.5111V29.1556C2.66667 29.3333 2.84444 29.6889 3.2 29.6889H28.9778C29.1556 29.6889 29.5111 29.5111 29.5111 29.1556V21.3333C29.5111 21.1556 29.3333 20.8 28.9778 20.8H3.2V20.9778Z' fill='#8F8F94'/></svg> `,
      },
      {
        router_name: 'profile',
        title: 'Профиль',
        icon: `<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_88_294)'><path d='M16 0C7.11111 0 0 7.11111 0 16C0 24.8889 7.11111 32 16 32C24.8889 32 32 24.8889 32 16C32 7.11111 24.8889 0 16 0ZM7.64444 26.4889C9.77778 24.1778 12.8 22.7556 16 22.7556C19.2 22.7556 22.2222 24.1778 24.3556 26.4889C22.0444 28.2667 19.2 29.3333 16 29.3333C12.8 29.3333 9.95556 28.2667 7.64444 26.4889ZM26.3111 24.5333C23.6444 21.6889 19.9111 19.9111 16 19.9111C12.0889 19.9111 8.35556 21.5111 5.68889 24.5333C3.73333 22.2222 2.66667 19.2 2.66667 16C2.66667 8.71111 8.71111 2.66667 16 2.66667C23.2889 2.66667 29.3333 8.71111 29.3333 16C29.3333 19.2 28.0889 22.2222 26.3111 24.5333Z' fill='#8F8F94'/><path d='M16 6.40002C12.6222 6.40002 9.95557 9.06669 9.95557 12.4445C9.95557 15.8222 12.6222 18.4889 16 18.4889C19.3778 18.4889 22.0445 15.8222 22.0445 12.4445C22.0445 9.06669 19.3778 6.40002 16 6.40002ZM16 15.8222C14.2222 15.8222 12.6222 14.2222 12.6222 12.4445C12.6222 10.6667 14.2222 9.06669 16 9.06669C17.7778 9.06669 19.3778 10.6667 19.3778 12.4445C19.3778 14.2222 17.7778 15.8222 16 15.8222Z' fill='#8F8F94'/></g><defs><clipPath id='clip0_88_294'><rect width='32' height='32' fill='white'/></clipPath></defs></svg>`,
      },
    ],
    offsetY: 0,
  }),
  methods: {
    scrollToUp() {
      this.$refs.upperElement.scrollIntoView({
        behavior: 'smooth',
      });
      // this.$refs.upperElement?.scrollIntoView({behavior: 'smooth'});
    },
    handleScroll(e) {
      this.offsetY = e.target.scrollTop
    }
  },
  computed: {
    navItemList() {
      return this.navList.map((item) => ({
        ...item,
      }));
    },
  },
};
</script>

<style lang='scss'>
div {
  &.div-block-to-top {
    width: max-content;
    bottom: 20px;
    left: 96%;

    .block-to-top {
      display: flex;
      width: 50px;
      height: 50px;
      padding: 15px;
      justify-content: center;
      align-items: center;

      transition: background-color .3s ease;

      border-radius: 16px;
      border: 1px solid #343442;
      background: #1E1E25;

      &:hover {
        background: #343442;
      }

      i {
        display: flex;
        height: 10px;
      }
    }
  }

}

.navigation-section {
  height: 90%;

  nav {
    width: 20%;

    &.right {

    }

    &.left {
      .router-link-active {
        button {
          color: white;
          background: #1E1E25;

          i {
            path {
              fill: white
            }
          }

          &:hover {
            box-shadow: none;
          }
        }
      }

      .navigation-btn {
        i {
          height: 32px;
        }

        p {
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          text-transform: none;
        }
      }
    }
  }

  main {
    width: 80%;
  }

}
</style>