<template>
      <v-app>
          <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                  <component :is="Component" />
              </transition>
          </router-view>
      </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>

<style lang="scss">

.fade-enter-active {
  transition: all .8s ease-out;
}

.fade-leave-active {
  transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>