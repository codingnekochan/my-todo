module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        // light theme
        "l-very-light-grey": "#fafafa",
        "l-very-light-grey-blue": "#e4e5f1",
        "l-light-grey-blue": "#d2d3db",
        "l-dark-grey-blue": "#9394a5",
        "l-very-dark-grey-blue": "#484b6a",
        // dark theme
        "d-very-dark-blue": "#161722",
        "d-very-dark-desaturated-blue": "#25273c",
        "d-light-grey-blue": "#cacde8",
        "d-light-grey-blue-hover": "#e4e5f1",
        "d-dark-grey-blue": "#777a92",
        "d-very-dark-grey-blue": "#393a4c",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
