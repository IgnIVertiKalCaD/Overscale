// Styles
<<<<<<< Updated upstream
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

=======
import 'vuetify/styles';
>>>>>>> Stashed changes
// Vuetify
import { createVuetify } from 'vuetify';

<<<<<<< Updated upstream

export default createVuetify(
    {

    }
)
=======
const dark = {
  colors: {
    //stack color
    white: '#FFFFFF',
    black: '#000000',

    //box-shadow
    black_boxShadow: '0,0,0, 0.8',
  },
};
export default createVuetify({
  ssr: true,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark,
    },
  },
});
>>>>>>> Stashed changes
