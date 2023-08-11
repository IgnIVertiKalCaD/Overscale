import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
<<<<<<< Updated upstream
import { loadFonts } from './plugins/webfontloader'
import { VuePreloader } from 'vue-preloader';

// import 'swiper/css';
=======
import { createI18n } from 'vue-i18n';

>>>>>>> Stashed changes

const app = createApp(App)

loadFonts()


app
<<<<<<< Updated upstream
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VuePreloader)
  .mount('#app')
=======
    .use(router)
    .use(store)
    .use(i18n)
    .use(vuetify)
    .mount('#app')
>>>>>>> Stashed changes
