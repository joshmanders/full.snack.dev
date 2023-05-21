import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: { primary: colors.pink },
      fontFamily: {
        'comic-sans': ['"Comic Neue"', '"Comic Sans MS"', '"Comic Sans"', 'cursive'],
      },
    },
  },
};

export default config;
