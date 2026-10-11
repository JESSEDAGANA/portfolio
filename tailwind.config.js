/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',      // primary text
        sub: '#666666',      // secondary text
        rule: '#E7E7E7',     // borders
        paper: '#FFFFFF',    // main background
        alt: '#F7F7F5',      // alternate section background
        soft: '#F0F0EE',     // muted interface elements
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      maxWidth: { page: '1120px' },
    },
  },
  plugins: [],
}
