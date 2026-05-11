/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'PingFang SC',
          'Microsoft YaHei UI',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#07111f',
        porcelain: '#f5f7fb',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(59, 130, 246, 0.18)',
      },
    },
  },
  plugins: [],
};
