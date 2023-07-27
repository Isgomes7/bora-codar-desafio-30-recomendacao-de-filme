/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'dark-01' : '#1E1F28',
        'yellow-01' : '#FEEA35',
        'gray-01' : '#8B8D9B',
        'gray-02' : '#2B2B37',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
  },
  plugins: [],
}

