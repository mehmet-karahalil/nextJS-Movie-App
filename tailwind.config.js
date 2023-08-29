/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '0 5px 10px 0 rgba(0, 0, 0, 0.5)',
      },
      gridTemplateColumns: {
        "auto" : "repeat(auto-fit, minmax(180px, 1fr))"
      },
      gridAutoRows: {
        '1453': '320px',
      },
    },
  },
  plugins: [],
}
