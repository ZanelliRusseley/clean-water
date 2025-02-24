import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-white': '#D9D9D9',
        'gray': '#336C82',
        'light-blue': '#0C98CC',
        'mid-blue': '#067CA9',
        'dark-blue': '#004d5996',
        'green': '#02C602',
        'blank': '',
      },
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
