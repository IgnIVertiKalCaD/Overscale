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

html, body, #app, .v-application, .inner-header{
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: hidden;
  background: black !important;
}
body::-webkit-scrollbar {
  display: none;
}
.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-active {
  transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(1.2);
  transition: all .8s ease;
  opacity: 0;
}

</style>