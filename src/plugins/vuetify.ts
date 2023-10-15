import 'vuetify/styles';
import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';


const globalTheme: ThemeDefinition = {
    dark: false,
    colors: {
        'dark-1': '#070A0D',
        'dark-2': '#0C1115',

        'red-1': '#A32727',

        'text-primary': '#FFFFFF',
        'text-secondary': '#D9D9D9',
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
