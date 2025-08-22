import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{jsx,tsx}',
    './src/app/**/*.{jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        sourceCodePro: ['var(--font-source-code-pro)', 'monospace'],
        ebGaramond: ['var(--font-ebgaramond)', 'sans'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        // Nova paleta de cores
        brand: {
          primary: '#0B132B',      // Navy profundo (fundo/brand base)
          secondary: '#1C2541',    // UI escuro
          accent1: '#00E5FF',      // Links/ações (cyan)
          accent2: '#2EE6A6',      // Realce (green)
          accent3: '#FF7A00',      // Contraste sutil (orange)
          'neutral-light': '#F5F7FA',   // Texto em fundo escuro
          'neutral-medium': '#9AA0A6'   // Borda/ícones secundários
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #0B132B 0%, #1C2541 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00E5FF 0%, #2EE6A6 100%)'
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: "1"
          },
          '50%': {
            opacity: "0"
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        blink: 'blink 0.5s infinite',
        fadeIn: 'fadeIn 0.6s ease-out',
        slideIn: 'slideIn 0.5s ease-out'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
export default config
