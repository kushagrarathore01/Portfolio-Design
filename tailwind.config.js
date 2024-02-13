/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
      "3xl": "1600px",
      "4xl": "2000px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      aloo: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    // colors: {
    //   // backcolor: "#1f242d",
    //   // seccolor: "#323946",
    //   // maincolr: "#0ef",
    //   gradcol: "linear-gradient(rgba(0,0,0,.1), #0ef)",
    // },
    extend: {
      boxShadow: {
        myshad: "0 0 1rem #0ef",
        myshad2: "0 0 1rem [#1f242d]",
        navsm: "0 .5rem 1rem rgb(0,0,0,.2)",
      },
      gridTemplateColumns: {
        1000: "repeat(3,1fr)",
        100: "repeat(2,1fr)",
      },
    },
  },
  plugins: [],
};
