const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    require("@tailwindcss/custom-forms"),
  ],
  theme: {
    extend: {
      boxShadow: {
        "outline-gray": "0 0 0 3px rgba(226, 232, 240, 1)",
        "outline-green": "0 0 0 3px rgba(154, 230, 180, 1)",
        "outline-red": "0 0 0 3px rgba(254, 178, 178, 1)",
        "outline-blue": "0 0 0 3px rgba(144, 205, 244, 1)",
      },
    },
  },
};
