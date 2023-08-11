<template>
  <v-container class="fill-height d-flex container-user">
    fds
  </v-container>
</template>


<script>
import {defineComponent, defineAsyncComponent} from "vue";

import information from "@/views/user/pages/information/information.vue";
import settings from "@/views/user/pages/settings/settings.vue";

import SwiperPaginationMOD from "@/components/global/swiper/swiperPaginationMOD.vue";

export default defineComponent({
  name: "UserView",
  data: () => ({
    fieldText: [
      {
        text: 'parentSwiper.userInformation',
        icon: 'fa-solid fa-user fa-1x'
      },
      {
        text: 'settings',
        icon: 'fa-solid fa-gear fa-1x'
      },
      {
        text: 'parentSwiper.userInformation',
        icon: 'fa-solid fa-user-gear fa-1x'
      },
    ],
  }),
  components: {
    information,
    settings,
    SwiperPaginationMOD,
    lazyLoading: defineAsyncComponent(() => import('@/components/modified/swiper-slide-lazy.vue')),
  },
})
</script>

<style lang="scss">
.container-user {
  padding: 16px 0;
  .swiper-mod {
    width: 100%;
  }
  .mod-pagination-container {
    margin-right: 5%;
  }

}

</style>