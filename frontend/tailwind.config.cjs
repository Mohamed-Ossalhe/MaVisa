/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#004AAD",
        "secondary" : "#2E4D77"
      },
      backgroundImage: {
        "landing-backg": "url('./assets/img/airplane.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
