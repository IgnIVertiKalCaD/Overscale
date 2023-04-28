<template>
  <v-layout class="overflow-visible position-absolute">
    <v-bottom-navigation bg-color="transparent" mode="shift">
        <v-btn :to="item.router_name" v-for="(item, index) of dockItems" :key="index"
          class="rounded-lg"
          :class="item.hover ? 'v-btn--selected' : ''"
          @mouseleave="item.hover = false"
          @mouseenter="item.hover = true"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>

export default {
  name: "dock",
  data: () => ({
    items: [],
    dockItems: [
      {
        router_name: 'auth',
        icon: "mdi-account-circle",
        title: "auth",
        hover: false,
      },
      {
        router_name: 'store',
        icon: "mdi-television-play",
        title: "play",
        hover: false,
      },
      {
        router_name: 'store',
        icon: "mdi-television-play",
        title: "music",
        hover: false,
      },
      {
        router_name: 'sss',
        icon: "mdi-television-play",
        title: "about",
        hover: false,
      },
    ],
  }),
  components: {
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.position-absolute {
  top: 1.2rem;
  left: 0;
  right: 0;
  height: 54px;
}
</style>
