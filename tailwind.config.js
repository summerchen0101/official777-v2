// @keyframes pulse {
//   50% {
//     opacity: .5;
//   }
// }
// .animate-pulse {
//   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true, // 讓 container 居中
        padding: '2rem', // 設定全域 padding
        screens: {
          sm: '100%', // 小於 sm 的寬度
          md: '100%', // 小於 md 的寬度
          lg: '1024px', // 在 lg 的寬度
          xl: '1024px', // 在 xl 的寬度
        },
      },
      keyframes: {
        'scale-sm': {
          '50%': { transform: 'scale(1.05)' },
        },
        scale: {
          '50%': { transform: 'scale(1.1)' },
        },
        jumpup: {
          '0%': { transform: 'translateY(20%)', opacity: 0 },
          '60%': { transform: 'translateY(-0.5%)', opacity: 1 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
      },
      animation: {
        'scale-sm': 'scale-sm 1.2s ease-in-out infinite',
        scale: 'scale 1.5s ease-in-out infinite',
        jumpup: 'jumpup 1s ease-in-out',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        alpha: 'lower-alpha',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundSize: {
        '100%': '100%',
        '110%': '110%',
        '120%': '120%',
        '130%': '130%',
        '140%': '140%',
        '150%': '150%',
        '160%': '160%',
      },
      backgroundPosition: {
        // 'top-4': 'center top 1rem',
      },
      backgroundImage: {
        'login-btn': "url('/img/login_btn.png')",
        'login-btn-active': "url('/img/login_btn_active.png')",
        'logout-btn': "url('/img/logout_btn.png')",
        'logout-btn-active': "url('/img/logout_btn_active.png')",
        'slider-pager': "url('/img/slider_pager.png')",
        'slider-pager-active': "url('/img/slider_pager_active.png')",
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
        brown: {
          100: '#FBF4E8',
          200: '#F8E8D3',
          300: '#EAD1B5',
          400: '#D6B59A',
          500: '#BB9175',
          600: '#A06F55',
          700: '#86503A',
          800: '#6C3525',
          900: '#592116',
        },
        purple: {
          dark: '#22074c',
          darkeset: '#240e46',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-textshadow'),
  ],
}
