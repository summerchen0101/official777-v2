module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'main-pattern': "url('/bg.png')",
        'login-btn': "url('/login_btn.png')",
        'login-btn-active': "url('/login_btn_active.png')",
        'slider-pager': "url('/slider_pager.png')",
        'slider-pager-active': "url('/slider_pager_active.png')",
        'slider-nav-next': "url('/slider_nav_next.png')",
        'slider-nav-next-active': "url('/slider_nav_next_active.png')",
      },
      colors: {
        gold: {
          100: '#FCF4DD',
          200: '#FAE8BB',
          300: '#F1D397',
          400: '#E4BB79',
          500: '#D39B4F',
          600: '#B57B39',
          700: '#975E27',
          800: '#7A4419',
          900: '#65310F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
