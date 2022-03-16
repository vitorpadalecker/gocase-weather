module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#FFF',
        'dark': '#304F6B',
        'light': '#F1F3F6',
        'lightest': '#BEC3C7',
        'darkest': '#C3C3C3',
        'escuro': '#243443',
           },
           fontSize: {
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['20px', '28px'],
            xl: ['32px', '40px'],
          }
    },
  },
  plugins: [],
}
