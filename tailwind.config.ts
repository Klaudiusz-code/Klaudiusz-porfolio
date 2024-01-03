import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#252B39',
        customColor: '#34C0C9',
        gColor: '#818488',
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
    },
  
  },
  plugins: [],
}
export default config
