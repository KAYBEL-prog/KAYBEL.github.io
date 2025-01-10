/** @type {import('tailwindcss').Config} */

// npx tailwindcss -i ./assets/src/input.css -o ./assets/css/output.css --watch 

module.exports = {
  content: [
    './home/*.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '0rem',
    },
    extend: {
      fontFamily: {
        'body': ['Sansation'],
        'Russo': ['RussoOne'],
      },
      colors: {
        // Using `rgb`
        secondary: 'rgb(var(--color-backgroud))',
        primary: 'rgb(var(--color-primary))',
        border: 'rgb(var(--color-border))'
      },
      borderRadius: {
        'none': '0',
        'sm': '5px',
      },
      screens: {
        'sm': '425px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1530px',
        // => @media (min-width: 1536px) { ... }
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'cast-rou': '20px',
      }
    }


  }
}

