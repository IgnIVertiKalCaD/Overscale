<template>
    <v-app>
        <transition name="scale">
            <preloader v-if="!loaded"></preloader>
        </transition>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </v-app>
</template>

<script>
import preloader from '@/components/UI/preloader.vue';
export default {
    name: 'App',
    data: () => ({
        loaded: false
    }),
    components: {
        preloader
    },
    mounted() {
        window.addEventListener('load', () => {
            this.loaded = true;
        });
    },
}
</script>

<style lang="scss">


html, body, #app, .v-application, .inner-header {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: hidden;
  background: black !important;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

body::-webkit-scrollbar {
  display: none;
}

.fade-enter-active {
  transition: 1s ease;
}

.fade-leave-active {
  transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(1.1);
  transition: .4s ease;
  opacity: 0;
}


.scale-enter-active {
    transition: all 1s ease;
}

.scale-leave-active {
    transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0.8);
    transition: all .8s ease;
    opacity: 0;
}
</style>