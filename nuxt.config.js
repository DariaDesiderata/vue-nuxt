module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Daria Calwell Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Daria Calwell | Web and UI developer"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   */
  css: ["./static/assets/css/main.scss", "./static/assets/css/main.css"],
  /*
   ** Loading
   */
  loading: {
    color: "#E6ABFF",
    failedColor: "red",
    height: "5px",
    duration: 5000
  },
  /*
   ** For a custom loading component loading: '~/components/loading.vue'
   */
  /*
   ** Add transitionios between pages
   */
  transition: {
    name: "component-fade",
    mode: "out-in"
  },
  /*
   ** Add axios globally
   */
  build: {
    vendor: ["axios"]
  }
};
