import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  mode: "jit",
  content: ["components/**/*.{vue,js}", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.{js,ts}", "App.{js,ts,vue}", "app.{js,ts,vue}", "./nuxt.config.{js,ts}"],
  corePlugins: {},
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        serif: ["Poppins"],
        mono: ["Poppins"],
      },
      colors: {
        sunset: "#FA357B",
        fullmoon: "#FFCF35",
        borealis: "#00CFB6",
        midnight: "#6460FF",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "1rem",
          xl: "2rem",
          "2xl": "4rem",
        },
      },
    },
  },
};
