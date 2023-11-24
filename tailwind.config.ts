import { sourceCodePro } from '@/app/font'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{jsx,tsx}',
    './src/app/**/*.{jsx,tsx}',
  ],
  theme: {
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
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
export default config
