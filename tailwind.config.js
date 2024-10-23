/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        primaryDark: '#2563EB',
        secondary: '#FBBF24',
        secondaryDark: '#F59E0B',
        accent: '#EF4444',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
}