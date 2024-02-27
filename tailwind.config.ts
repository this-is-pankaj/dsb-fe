import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,vue,css}'],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' }
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        rotate: 'rotate 0.5s ease-in-out 1 both',
        slideFromRight: 'slideFromRight 0.5s ease-in-out',
        slideToLeft: 'slideFromLeft 0.5s ease-in-out reverse forwards',
        slideFromTop: 'slideFromTop 0.5s ease-in-out',
        slideToTop: 'slideFromTop 0.5s ease-in-out reverse forwards'
      }
    }
  },
  plugins: []
} satisfies Config
