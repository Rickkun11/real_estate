/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.4rem',
        'lg': '0.9rem',
        'full': '9999px',
        'large': '12px',
      },
      backgroundColor: {
        'background': '#F7F9FB',
        'black': '#0C0C1D',
        'white': '#FFFFFF',
        'blue': '#4B73FF'
      },
      fontFamily: {
        'ubuntu': ['ubuntu']
      }
    },
  },
  plugins: [],
}
