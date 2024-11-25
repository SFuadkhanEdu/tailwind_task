/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your main HTML file
    "./js/**/*.js", // Include all JavaScript files in the 'js' folder
    "./css/**/*.css" // Include all CSS files in the 'css' folder
  ],
  theme: {
    extend: {
      colors: {
        vividBlue: '#2938f1',
      },
    },
  },
  plugins: [], // Add plugins here if required
};


