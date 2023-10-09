import 'vuetify/styles';
import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';


const globalTheme: ThemeDefinition = {
    dark: false,
    colors: {
    },

};

export const vuetify = createVuetify({
    components,
    theme: {
        defaultTheme: 'globalTheme',
        themes: {
            globalTheme,
        },
    },
    directives,
});
