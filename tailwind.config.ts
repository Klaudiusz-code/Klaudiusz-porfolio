import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        contactBanner: `url('/ContactBanner1.png')`,
      },
      colors: {
        bgColor: '#1a1e29',
        customColor: '#0077cc',
        gColor: '#9ea0a3',
        boxColor: 'rgba(34, 54, 62,0.3)',
        hoverColor: 'rgba(40, 50, 61,0.9)',
        navcolor: 'rgba(52, 192, 201,0.9)',
        whiteOp: 'rgba(255, 255, 255,0.2)',
      },
      screens: {
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
      fontFamily: {
        sans: ["Open Sans", 'sans-serif'],
        bevan: ["Bevan", 'serif'],
        source: ["Source Sans 3", "sans-serif"]
      },
    },

  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}
export default config
