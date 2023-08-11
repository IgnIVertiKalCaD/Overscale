<template>
<<<<<<< Updated upstream
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
=======
  <v-app>

    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.animation" mode="out-in">
          <component :is="Component"/>
        </transition>
    </router-view>

    <preloader/>

  </v-app>
>>>>>>> Stashed changes
</template>

<script>
import preloader from '@/components/UI/preloader.vue';
export default {
<<<<<<< Updated upstream
    name: 'App',
    data: () => ({
        loaded: false
=======
  name: "App",
  data: () => ({
    loaded: false,
  }),
  components: {
    Preloader,
    Wave,
  },
  mounted() {
    // window.addEventListener("load", async () => {});
  },
  methods: {
    GuardRouters() {
      this.$router.beforeEach(async (to, from, next) => {
          if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (this.statusAuth) {
            next();
          } else {
              //dev uncom
            // next({name: "preview"});
          }
        } else {
          next();
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      statusAuth: 'auth/getStatusAuth',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
@import "./views/styles/vue_animation";
@import "./views/styles/nonScoped";

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

//This is no my design. P.S. IgnI

//https://fonts.google.com/specimen/Cantarell#styles
//https://www.cdnfonts.com/baumans.font
>>>>>>> Stashed changes


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