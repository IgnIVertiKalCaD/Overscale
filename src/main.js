import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VuePreloader } from 'vue-preloader';

// import 'swiper/css';

const app = createApp(App)

loadFonts()


app
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VuePreloader)
  .mount('#app')
