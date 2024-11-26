import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{jsx,tsx}',
    './src/app/**/*.{jsx,tsx}',
  ],
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
        ebGaramond: ['var(--font-ebgaramond)', 'sans']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
      },
      animation: {
        blink: 'blink 0.5s infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
export default config
